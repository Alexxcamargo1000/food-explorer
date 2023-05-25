import { Link } from 'react-router-dom'
import { ContainerEmpty } from './styles'

export function EmptyFood() {
  return (
    <ContainerEmpty>
      <h3>Ainda não adicionou nenhuma comida</h3>
      <p>
        Adicione sua primeira comida clicando <Link to="/new">aqui</Link>
      </p>
    </ContainerEmpty>
  )
}
