import * as Dialog from '@radix-ui/react-dialog'
import React, { useState } from 'react'
import { MagnifyingGlass, X } from 'phosphor-react'
import { Input } from '../Input'

import { api } from '../../services/api'
import {
  ButtonAdd,
  ButtonClose,
  Content,
  DialogButtonsContainer,
  IngredientButton,
  IngredientDialogContainer,
  LinkNewIngredient,
  ListIngredient,
  Overlay,
  SearchContainer,
} from './styles'
import { IngredientProps } from '../../pages/NewFood'

interface IngredientDialogProps {
  handleCheckedIngredient: (ingredient: IngredientProps[]) => void
  ingredients: IngredientProps[]
  ingredientsActive: IngredientProps[]
  handleSearch: (search: string) => void
  search: string
}
export function IngredientDialog(props: IngredientDialogProps) {
  const [ingredientsChecked, setIngredientChecked] = useState<
    IngredientProps[]
  >([])

  function handleIngredientChecked(
    event: React.MouseEvent<HTMLButtonElement>,
    ingredient: IngredientProps,
  ) {
    event.currentTarget.classList.add(`checked`)
    const findIngredientCheckedExist = ingredientsChecked.find(
      ({ name }) => name === ingredient.name,
    )

    if (findIngredientCheckedExist) {
      event.currentTarget.classList.remove(`checked`)

      const removeIngredientChecked = ingredientsChecked.filter(
        (ingredient) => ingredient.name !== findIngredientCheckedExist.name,
      )
      return setIngredientChecked(removeIngredientChecked)
    }

    if (props.ingredientsActive.length > 0) {
      const findIngredientActive = props.ingredientsActive.find(
        (ingre) => ingre.name === ingredient.name,
      )

      if (!findIngredientActive) {
        setIngredientChecked((prevState) => [...prevState, ingredient])
      } else {
        event.currentTarget.classList.remove(`checked`)

        event.currentTarget.disabled = true
      }
    } else {
      setIngredientChecked((prevState) => [...prevState, ingredient])
    }
  }

  function handleAddIngredient() {
    props.handleCheckedIngredient(ingredientsChecked)
    setIngredientChecked([])
  }

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
            value={props.search}
            onChange={(e) => props.handleSearch(e.target.value)}
          />
        </SearchContainer>
        <Dialog.Title className="DialogTitle">Ingredients</Dialog.Title>
        <div>
          <ListIngredient>
            {props.ingredients.map((ingredient) => (
              <li key={ingredient.id}>
                <IngredientButton
                  onClick={(
                    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
                  ) => handleIngredientChecked(e, ingredient)}
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
        </div>

        <DialogButtonsContainer>
          <Dialog.Close asChild>
            <ButtonAdd onClick={handleAddIngredient}>Salvar</ButtonAdd>
          </Dialog.Close>
          <Dialog.Close asChild>
            <LinkNewIngredient to="/ingredient/new">
              Novo Ingrediente
            </LinkNewIngredient>
          </Dialog.Close>
        </DialogButtonsContainer>

        <Dialog.Close asChild>
          <ButtonClose
            aria-label="Close"
            onClick={() => setIngredientChecked([])}
          >
            <X size={24} />
          </ButtonClose>
        </Dialog.Close>
      </Content>
    </IngredientDialogContainer>
  )
}
