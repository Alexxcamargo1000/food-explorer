import * as Dialog from '@radix-ui/react-dialog'
import { CaretLeft, Plus, UploadSimple, X } from 'phosphor-react'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from '../../components/Input'
import { Loading } from '../../components/Loading'
import { api } from '../../services/api'
import { formatPriceToCents } from '../../utils/format-price-to-cents'
import { IngredientDialog } from '../../components/IngredientDialog'
import { NewFoodContainer, NewFoodForm as Form, Price } from './styles'
import { useAuth } from '../../hooks/useAuth'

export interface IngredientProps {
  id: string
  image: string
  name: string
}

export function NewFood() {
  const { user } = useAuth()

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [search, setSearch] = useState('')
  const [typeOfFood, setTypeOfFood] = useState('Pratos principais')
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

  async function handleDeleteIngredient(name: string) {
    try {
      const confirm = window.confirm(`deseja deletar a(o) ${name}`)
      if (!confirm) {
        return
      }

      await api.delete(`ingredients/${name}`)
      const ingredientFilter = ingredients.filter(
        (ingredient) => ingredient.name !== name,
      )
      setIngredients(ingredientFilter)
      alert('ingrediente deletado')
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('não foi possível deletar o ingrediente')
      }
    }
  }

  async function handleSubmitFood(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const priceInCents = formatPriceToCents(price)

    if (ingredientsActive.length === 0) {
      return alert('adicione pelo menos um ingrediente')
    }
    if (!name || !description || !priceInCents) {
      return
    }

    const ingredientsNames = ingredientsActive.map((ingre) => ingre.name)
    const ingredientsNamesString = ingredientsNames.toString()

    try {
      await api.post(
        'foods',
        {
          name,
          description,
          priceInCents,
          typeFood: typeOfFood,
          image,
          ingredients: ingredientsNamesString,
        },
        { headers: { 'Content-Type': 'multipart/form-data' } },
      )
      alert('novo prato criado')
      navigate('/')
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('não foi possível criar um novo prato')
      }
    }
  }

  useEffect(() => {
    if (!user?.admin) {
      navigate('/')
    }
    async function getIngredients() {
      const response = await api.get(`/ingredients?name=${search}`)
      setIngredients(response.data)
      setIsLoading(true)
    }

    getIngredients()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])
  return (
    <NewFoodContainer>
      <button onClick={backToPage} type="button">
        <CaretLeft size={32} /> voltar
      </button>

      <h1>Adicionar Prato</h1>

      {!isLoading ? (
        <Loading />
      ) : (
        <Dialog.Root>
          <Form.Root onSubmit={(e) => handleSubmitFood(e)}>
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
                placeholder="Ex.: Salada Ceasar"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <Form.SelectWrapper>
                <label htmlFor="category">Categoria</label>
                <select
                  id="category"
                  value={typeOfFood}
                  onChange={(e) => setTypeOfFood(e.target.value)}
                >
                  <option value="Pratos principais">Pratos Principais</option>
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
                  required
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
                  required
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                ></Form.TextArea>
              </div>
            </Form.Fieldset>

            <Form.Button>Salvar alterações</Form.Button>
          </Form.Root>
          <IngredientDialog
            handleCheckedIngredient={handleCheckedIngredient}
            ingredients={ingredients}
            handleSearch={handleSearch}
            search={search}
            ingredientsActive={ingredientsActive}
            handleDeleteIngredient={handleDeleteIngredient}
          />
        </Dialog.Root>
      )}
    </NewFoodContainer>
  )
}
