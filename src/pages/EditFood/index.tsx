import * as Dialog from '@radix-ui/react-dialog'
import { CaretLeft, Plus, UploadSimple, X } from 'phosphor-react'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Input } from '../../components/Input'
import { Loading } from '../../components/Loading'
import { api } from '../../services/api'
import { formatPriceToCents } from '../../utils/format-price-to-cents'
import { formatPriceToReal } from '../../utils/format-price-to-real'
import { IngredientDialog } from '../../components/IngredientDialog'
import {
  ButtonDelete,
  ButtonsContainer,
  NewFoodContainer,
  NewFoodForm as Form,
  Price,
} from './styles'

export interface IngredientProps {
  id: string
  image: string
  name: string
}

interface foodProps {
  created_at: string
  description: string
  id: string
  image: string
  name: string
  priceInCents: number
  slug: string
  type_of_food_id: string
  updated_at: string
  user_id: string
}

interface foodWithIngredients {
  food: foodProps
  ingredients: IngredientProps[]
  category: string
}

export function EditFood() {
  const { slug } = useParams()

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [search, setSearch] = useState('')
  const [typeOfFood, setTypeOfFood] = useState('')
  const [image, setImage] = useState<File>()
  const [isLoading, setIsLoading] = useState(false)
  const [description, setDescription] = useState('')
  const [ingredients, setIngredients] = useState<IngredientProps[]>([])
  const [ingredientsActive, setIngredientsActive] = useState<IngredientProps[]>(
    [],
  )

  const navigate = useNavigate()

  function backToPage() {
    navigate(-1)
  }

  function handleCheckedIngredient(ingredientsDialog: IngredientProps[]) {
    setIngredientsActive((prevState) => [...prevState, ...ingredientsDialog])
  }

  function handleRemoveIngredient(name: string) {
    const filterIngredientByName = ingredientsActive.filter(
      (ingredient) => ingredient.name !== name,
    )

    setIngredientsActive(filterIngredientByName)
  }

  function handleSearch(search: string) {
    setSearch(search)
  }

  function handleChangeImage(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files!.length < 1) {
      return
    }
    const file = event.target.files![0]
    setImage(file)
  }

  async function handleUpdateFood(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const priceInCents = formatPriceToCents(price)

    if (
      !name ||
      !description ||
      !typeOfFood ||
      ingredientsActive.length === 0 ||
      !priceInCents
    ) {
      alert('preencha todos os campos')
      return
    }

    const newFood = {
      name,
      description,
      priceInCents,
      typeOfFood,
      image,
      ingredientsActive,
    }

    console.log(newFood)
  }

  useEffect(() => {
    async function getIngredients() {
      const response = await api.get(`/ingredients?name=${search}`)
      setIngredients(response.data)
    }
    getIngredients()
    setIsLoading(true)
  }, [search])

  useEffect(() => {
    async function getFoodByName() {
      const response = await api.get(`/foods/${slug}`)
      const { food, category, ingredients }: foodWithIngredients = response.data
      const priceInReal = formatPriceToReal(food.priceInCents)
      setName(food.name)
      setDescription(food.description)
      setPrice(priceInReal)
      setIngredientsActive(ingredients)
      setTypeOfFood(category)
    }

    getFoodByName()
  }, [slug])

  return (
    <NewFoodContainer>
      <button onClick={backToPage} type="button">
        <CaretLeft size={32} /> voltar
      </button>

      <h1>Editar Prato</h1>

      {!isLoading ? (
        <Loading />
      ) : (
        <Dialog.Root>
          <Form.Root onSubmit={(e) => handleUpdateFood(e)}>
            <Form.Fieldset>
              <div>
                <span>Imagem do prato</span>
                <Form.InputImage className={!image ? '' : 'notEmpty'}>
                  <label htmlFor="image">
                    <UploadSimple size={32} />
                    <span>Selecione imagem</span>
                  </label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={(e) => handleChangeImage(e)}
                  />
                </Form.InputImage>
              </div>
              <Input
                title="Nome"
                placeholder="Ex.: Salada"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <Form.SelectWrapper>
                <label htmlFor="category">Categoria</label>
                <select
                  id="category"
                  onChange={(e) => setTypeOfFood(e.target.value)}
                  value={typeOfFood}
                >
                  <option defaultValue="Pratos principais">
                    Pratos Principais
                  </option>
                  <option value="Sobremesas">Sobremesas</option>
                  <option value="Bebidas">Bebidas</option>
                </select>
              </Form.SelectWrapper>
            </Form.Fieldset>

            <Form.Fieldset>
              <Form.IngredientsRoot>
                <label htmlFor="">Ingredientes</label>
                <Form.IngredientsWrapper>
                  {ingredientsActive.map((ingredient) => (
                    <Form.Ingredient key={ingredient.id}>
                      <span>{ingredient.name}</span>

                      <button
                        onClick={() => handleRemoveIngredient(ingredient.name)}
                      >
                        <X size={16} />
                      </button>
                    </Form.Ingredient>
                  ))}
                  <Dialog.Trigger asChild>
                    <Form.NewIngredient>
                      <span>Adicionar</span> <Plus />
                    </Form.NewIngredient>
                  </Dialog.Trigger>
                </Form.IngredientsWrapper>
              </Form.IngredientsRoot>

              <Price>
                <Input
                  className={!price ? '' : 'notEmpty'}
                  title="Preço"
                  placeholder="R$ 00,00"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Price>
            </Form.Fieldset>

            <Form.Fieldset>
              <div className="textarea-wrapper">
                <label htmlFor="description">Descrição </label>
                <Form.TextArea
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                ></Form.TextArea>
              </div>
            </Form.Fieldset>

            <ButtonsContainer>
              <ButtonDelete type="button">Excluir prato</ButtonDelete>
              <Form.Button>Salvar alterações</Form.Button>
            </ButtonsContainer>
          </Form.Root>
          <IngredientDialog
            handleCheckedIngredient={handleCheckedIngredient}
            ingredients={ingredients}
            handleSearch={handleSearch}
            search={search}
            ingredientsActive={ingredientsActive}
          />
        </Dialog.Root>
      )}
    </NewFoodContainer>
  )
}
