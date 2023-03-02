import { CaretLeft, UploadSimple } from 'phosphor-react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Input } from '../../components/Input'
import { useAuth } from '../../hooks/useAuth'
import {
  ButtonSaveIngredient,
  FormIngredient,
  InputImageIngredient,
  NewIngredientContainer,
} from './styles'

export function NewIngredient() {
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user?.admin) {
      navigate('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <NewIngredientContainer>
      <Link to="/new">
        <CaretLeft size={32} /> voltar
      </Link>
      <FormIngredient>
        <legend>Adicionar Ingrediente</legend>
        <div>
          <Input title="Nome" placeholder="Ex. Tomate" />
        </div>
        <div>
          <span>Imagem do prato</span>
          <InputImageIngredient>
            <label htmlFor="image">
              <UploadSimple size={32} />
              <span>Selecione a imagem</span>
            </label>
            <input type="file" id="image" name="image" />
          </InputImageIngredient>
        </div>

        <ButtonSaveIngredient type="submit">Salvar</ButtonSaveIngredient>
      </FormIngredient>
    </NewIngredientContainer>
  )
}
