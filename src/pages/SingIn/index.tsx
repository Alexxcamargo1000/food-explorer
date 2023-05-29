import { FormEvent, useState } from 'react'
import { Input } from '../../components/Input'
import { useAuth } from '../../hooks/useAuth'
import { SingInContainer, SingInForm, SingInLogo } from './styles'
import logoFoodExplorer from '../../assets/logo.svg'

export function SingInPage() {
  const { signIn, isLoading } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSignIn(event: FormEvent) {
    event.preventDefault()
    signIn(email, password)
  }
  return (
    <SingInContainer>
      <SingInLogo>
        <img src={logoFoodExplorer} alt="logo food explorer" />
      </SingInLogo>
      <SingInForm.Container>
        <SingInForm.Title>Faça login</SingInForm.Title>
        <Input
          type={'email'}
          title="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type={'password'}
          title="Senha"
          placeholder="No mínimo 8 caracteres"
          onChange={(e) => setPassword(e.target.value)}
        />

        <SingInForm.Button
          onClick={handleSignIn}
          type="submit"
          disabled={isLoading}
        >
          Entrar
        </SingInForm.Button>
        <SingInForm.FormLink to="/register">
          Criar uma conta
        </SingInForm.FormLink>
      </SingInForm.Container>
    </SingInContainer>
  )
}
