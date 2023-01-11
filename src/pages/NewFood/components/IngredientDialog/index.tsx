import * as Dialog from '@radix-ui/react-dialog'
import { MagnifyingGlass, X } from 'phosphor-react'
import { useEffect, useState } from 'react'
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

interface IngredientProps {
  id: string
  image: string
  name: string
}
export function IngredientDialog() {
  const [isLoading, isSetLoading] = useState(false)
  const [search, setSearch] = useState('')

  const [ingredients, setIngredients] = useState<IngredientProps[]>([])

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
                  <IngredientButton>
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
            <ButtonAdd>Adicionar</ButtonAdd>
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
