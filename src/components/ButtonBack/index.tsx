import { CaretLeft } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { ButtonBackContainer } from './styles'

interface ButtonBackProps {}

export function ButtonBack(props: ButtonBackProps) {
  const navigate = useNavigate()

  function handleNavigateBack() {
    navigate(-1)
  }
  return (
    <ButtonBackContainer onClick={handleNavigateBack}>
      <CaretLeft size={32} />
      Voltar
    </ButtonBackContainer>
  )
}
