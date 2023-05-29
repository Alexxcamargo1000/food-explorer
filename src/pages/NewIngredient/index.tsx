import { UploadSimple } from 'phosphor-react'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonBack } from '../../components/ButtonBack'
import { Input } from '../../components/Input'
import { useAuth } from '../../hooks/useAuth'
import { api } from '../../services/api'
import {
  ButtonSaveIngredient,
  FormIngredient,
  InputImageIngredient,
  NewIngredientContainer,
} from './styles'

export function NewIngredient() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [ingredientName, setIngredientName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [image, setImage] = useState<File>()

  function handleAddImage(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files!.length < 1) {
      return
    }
    const file = event.target.files![0]
    setImage(file)
  }

  async function handleSubmitNewIngredient(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    if (!ingredientName) {
      return
    }
    try {
      await api
        .post(
          'ingredients',
          {
            name: ingredientName,
            image,
          },
          { headers: { 'Content-Type': 'multipart/form-data' } },
        )
        .finally(() => setIsLoading(false))
      alert('ingrediente criado')
    } catch (error: any) {
      setIsLoading(false)
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('não foi possível criar um novo ingrediente')
      }
    }
  }

  useEffect(() => {
    if (!user?.admin) {
      navigate('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <NewIngredientContainer>
      <ButtonBack />
      <FormIngredient onSubmit={handleSubmitNewIngredient}>
        <legend>Adicionar Ingrediente</legend>
        <div>
          <Input
            title="Nome"
            placeholder="Ex. Tomate"
            value={ingredientName}
            required
            onChange={(e) => setIngredientName(e.target.value)}
          />
        </div>
        <div>
          <span>Imagem do prato</span>
          <InputImageIngredient>
            <label htmlFor="image">
              <UploadSimple size={32} />
              <span>Selecione a imagem</span>
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={(e) => handleAddImage(e)}
            />
          </InputImageIngredient>
        </div>

        <ButtonSaveIngredient disabled={isLoading} type="submit">
          Salvar
        </ButtonSaveIngredient>
      </FormIngredient>
    </NewIngredientContainer>
  )
}
