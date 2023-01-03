import { Input } from '../../components/Input'
import { SingInContainer, SingInForm, SingInLogo } from './styles'

export function SingInPage() {
  return (
    <SingInContainer>
      <SingInLogo>
        <svg
          width="44"
          height="48"
          viewBox="0 0 44 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.0318 0.216492L43.4349 12.0918V35.8425L22.0318 47.7179L0.628698 35.8425V12.0918L22.0318 0.216492Z"
            fill="#065E7C"
          />
        </svg>
        <h1>food explorer</h1>
      </SingInLogo>
      <SingInForm.Container>
        <SingInForm.Title>Faça login</SingInForm.Title>
        <Input
          type={'email'}
          title="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
        />
        <Input
          type={'password'}
          title="Senha"
          placeholder="No mínimo 8 caracteres"
        />

        <SingInForm.Button type="submit">Entrar</SingInForm.Button>
        <SingInForm.FormLink to="/register">
          Criar uma conta
        </SingInForm.FormLink>
      </SingInForm.Container>
    </SingInContainer>
  )
}
