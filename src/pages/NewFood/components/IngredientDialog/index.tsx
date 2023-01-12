import * as Dialog from '@radix-ui/react-dialog'
import React, { useEffect, useState } from 'react'
import { MagnifyingGlass, X } from 'phosphor-react'
import { Input } from '../../../../components/Input'
import { Loading } from '../../../../components/Loading'
import { api } from '../../../../services/api'
import {
  ButtonAdd,
  ButtonCancel,
  ButtonClose,
  Content,
  DialogButtonsContainer,
  IngredientButton,
  IngredientDialogContainer,
  ListIngredient,
  Overlay,
  SearchContainer,
} from './styles'
import { IngredientProps } from '../..'

interface IngredientDialogProps {
  handleCheckedIngredient: (ingredient: IngredientProps[]) => void
  ingredientsChecked: IngredientProps[]
}
export function IngredientDialog(props: IngredientDialogProps) {
  const [search, setSearch] = useState('')
  const [isLoading, isSetLoading] = useState(false)
  const [ingredientName, setIngredientName] = useState<string[]>([])

  const [ingredients, setIngredients] = useState<IngredientProps[]>([])

  function handleState(e: React.MouseEvent<HTMLButtonElement>) {
    e.currentTarget.classList.toggle('checked')

    if (!e.currentTarget.className.includes('checked')) {
      const name = e.currentTarget.value

      const filterIngredientByName = ingredientName.filter(
        (ingredient) => ingredient !== name,
      )

      setIngredientName(filterIngredientByName)
    } else {
      setIngredientName((prevState) => [...prevState, e.currentTarget.value])
    }
  }

  function handleAddIngredients() {
    const findByName = ingredientName.map((name) => {
      const filter = ingredients.filter(
        (ingredient) => ingredient.name === name,
      )
      return filter
    })
    let concatFindByName: IngredientProps[] = []
    concatFindByName = concatFindByName.concat(...findByName)

    props.handleCheckedIngredient(concatFindByName)

    setIngredientName([])
  }

  useEffect(() => {
    async function getIngredients() {
      const response = await api.get(`/ingredients?name=${search}`)
      setIngredients(response.data)
      isSetLoading(true)
    }

    getIngredients()
  }, [search])

  return (
    <IngredientDialogContainer>
      <Overlay />
      <Content>
        <SearchContainer>
          <MagnifyingGlass />
          <Input
            placeholder="Buscar "
            title="search"
            hasNotLabel
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchContainer>
        <Dialog.Title className="DialogTitle">Ingredients</Dialog.Title>
        <div>
          {!isLoading ? (
            <Loading />
          ) : (
            <ListIngredient>
              {ingredients.map((ingredient) => (
                <li key={ingredient.id}>
                  <IngredientButton
                    onClick={handleState}
                    value={ingredient.name}
                  >
                    <img
                      src={`${api.defaults.baseURL}/ingredients/files/${ingredient.image}`}
                      alt={ingredient.name}
                    />
                    {ingredient.name}
                  </IngredientButton>
                </li>
              ))}
            </ListIngredient>
          )}
        </div>

        <DialogButtonsContainer>
          <Dialog.Close asChild>
            <ButtonAdd onClick={handleAddIngredients}>Adicionar</ButtonAdd>
          </Dialog.Close>
          <Dialog.Close asChild>
            <ButtonCancel aria-label="Close">Cancelar</ButtonCancel>
          </Dialog.Close>
        </DialogButtonsContainer>

        <Dialog.Close asChild>
          <ButtonClose aria-label="Close">
            <X size={24} />
          </ButtonClose>
        </Dialog.Close>
      </Content>
    </IngredientDialogContainer>
  )
}
