import { CaretLeft, UploadSimple } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'
import {
  ButtonSaveIngredient,
  FormIngredient,
  InputImageIngredient,
  NewIngredientContainer,
} from './styles'

export function NewIngredient() {
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
