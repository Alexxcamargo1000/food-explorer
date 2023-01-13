import * as Dialog from '@radix-ui/react-dialog'
import { CaretLeft, Plus, UploadSimple, X } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'
import { Loading } from '../../components/Loading'
import { api } from '../../services/api'
import { IngredientDialog } from './components/IngredientDialog'
import { NewFoodContainer, NewFoodForm as Form, Price } from './styles'

export interface IngredientProps {
  id: string
  image: string
  name: string
}

export function NewFood() {
  const [search, setSearch] = useState('')
  const [ingredients, setIngredients] = useState<IngredientProps[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [ingredientsActive, setIngredientsActive] = useState<IngredientProps[]>(
    [],
  )

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
  const validate =
    image.length > 0 &&
    name.length >= 3 &&
    description.length >= 10 &&
    ingredientsActive.length > 0 &&
    price.length > 3

  useEffect(() => {
    async function getIngredients() {
      const response = await api.get(`/ingredients?name=${search}`)
      setIngredients(response.data)
      setIsLoading(true)
    }

    getIngredients()
  }, [search])
  return (
    <NewFoodContainer>
      <Link to="/">
        <CaretLeft size={32} /> voltar
      </Link>

      <h1>Editar Prato</h1>

      {!isLoading ? (
        <Loading />
      ) : (
        <Dialog.Root>
          <Form.Root>
            <Form.Fieldset>
              <div>
                <span>Imagem do prato</span>
                <Form.InputImage className={!image ? 'empty' : 'notEmpty'}>
                  <label htmlFor="image">
                    <UploadSimple size={32} />
                    <span>Selecione imagem</span>
                  </label>
                  <input
                    value={image}
                    type="file"
                    id="image"
                    name="image"
                    onChange={(e) => setImage(e.target.value)}
                  />
                </Form.InputImage>
              </div>
              <Input
                className={name.length < 3 ? 'empty' : 'notEmpty'}
                title="Nome"
                placeholder="Ex.: Salada Ceasar"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Fieldset>

            <Form.Fieldset>
              <Form.IngredientsRoot>
                <label htmlFor="">Ingredientes</label>
                <Form.IngredientsWrapper
                  className={
                    ingredientsActive.length === 0 ? 'empty' : 'notEmpty'
                  }
                >
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
                  className={price.length < 4 ? 'empty' : 'notEmpty'}
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
                  className={description.length < 10 ? 'empty' : 'notEmpty'}
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                ></Form.TextArea>
              </div>
            </Form.Fieldset>

            <Form.Button disabled={!validate}>Adicionar pedido</Form.Button>
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
