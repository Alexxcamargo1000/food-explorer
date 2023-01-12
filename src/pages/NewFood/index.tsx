import * as Dialog from '@radix-ui/react-dialog'
import { CaretLeft, Plus, UploadSimple, X } from 'phosphor-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'
import { IngredientDialog } from './components/IngredientDialog'
import { NewFoodContainer, NewFoodForm as Form, Price } from './styles'

export interface IngredientProps {
  id: string
  image: string
  name: string
}

export function NewFood() {
  const [ingredients, setIngredients] = useState<IngredientProps[]>([])

  function handleCheckedIngredient(ingredientsDialog: IngredientProps[]) {
    setIngredients((prevState) => [...prevState, ...ingredientsDialog])
  }

  function handleRemoveIngredient(name: string) {
    const filterIngredientByName = ingredients.filter(
      (ingredient) => ingredient.name !== name,
    )

    setIngredients(filterIngredientByName)
  }

  function handleClearIngredient() {
    setIngredients([])
  }

  return (
    <NewFoodContainer>
      <Link to="/">
        <CaretLeft size={32} /> voltar
      </Link>

      <h1>Editar Prato</h1>

      <Dialog.Root>
        <Form.Root>
          <Form.Fieldset>
            <div>
              <span>Imagem do prato</span>
              <Form.InputImage>
                <label htmlFor="image">
                  <UploadSimple size={32} />
                  <span>Selecione imagem</span>
                </label>
                <input type="file" id="image" name="image" />
              </Form.InputImage>
            </div>
            <Input title="Nome" placeholder="Ex.: Salada Ceasar" />
          </Form.Fieldset>

          <Form.Fieldset>
            <Form.IngredientsRoot>
              <label htmlFor="">Ingredientes</label>
              <Form.IngredientsWrapper>
                {ingredients.map((ingredient) => (
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
                  <Form.NewIngredient onClick={handleClearIngredient}>
                    <span>Adicionar</span> <Plus />
                  </Form.NewIngredient>
                </Dialog.Trigger>
              </Form.IngredientsWrapper>
            </Form.IngredientsRoot>

            <Price>
              <Input title="Preço" placeholder="R$ 00,00" />
            </Price>
          </Form.Fieldset>

          <Form.Fieldset>
            <div className="textarea-wrapper">
              <label htmlFor="description">Descrição </label>
              <Form.TextArea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"></Form.TextArea>
            </div>
          </Form.Fieldset>

          <Form.Button>Adicionar pedido</Form.Button>
        </Form.Root>
        <IngredientDialog
          handleCheckedIngredient={handleCheckedIngredient}
          ingredientsChecked={ingredients}
        />
      </Dialog.Root>
    </NewFoodContainer>
  )
}
