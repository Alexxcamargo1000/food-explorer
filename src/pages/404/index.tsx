import { useNavigate } from 'react-router-dom'
import { Container404, Content404 } from './styles'

export function Page404() {
  const navigate = useNavigate()

  function handleBacHome() {
    navigate('/')
  }

  return (
    <Container404>
      <button onClick={handleBacHome}>Voltar para Home</button>
      <Content404>
        <h1>404</h1>
        <p>Pagina não encontrada</p>
      </Content404>
    </Container404>
  )
}
