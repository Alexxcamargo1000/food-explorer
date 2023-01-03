import { Input } from '../../components/Input'
import { SingUpContainer, SingUpForm, SingUpLogo } from './styles'

export function SingUpPage() {
  return (
    <SingUpContainer>
      <SingUpLogo>
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
      </SingUpLogo>
      <SingUpForm.Container>
        <SingUpForm.Title>Crie sua conta</SingUpForm.Title>
        <Input
          type={'text'}
          title="Nome"
          placeholder="Exemplo: Maria da Silva"
        />
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

        <SingUpForm.Button type="submit">Criar conta</SingUpForm.Button>
        <SingUpForm.FormLink to="/">
          Já tenho uma conta
        </SingUpForm.FormLink>
      </SingUpForm.Container>
    </SingUpContainer>
  )
}
