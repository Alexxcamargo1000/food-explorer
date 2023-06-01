import { FormEvent, useState } from 'react'
import { Input } from '../../components/Input'
import { api } from '../../services/api'
import { SingUpContainer, SingUpForm, SingUpLogo } from './styles'
import { useNavigate } from 'react-router-dom'

export function SingUpPageAdmin() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isDisable, setIsDisable] = useState(false)

  async function handleCreateNewUser(e: FormEvent) {
    e.preventDefault()
    setIsDisable(true)
    try {
      await api.post('users/admin', {
        name,
        email,
        password,
      })
      alert('usuário admin criado')
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('não foi possível cadastrar')
      }
    } finally {
      setIsDisable(false)
      navigate('/')
    }
  }

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
      <SingUpForm.Container onSubmit={(e) => handleCreateNewUser(e)}>
        <SingUpForm.Title>Crie um Usuário Administrador</SingUpForm.Title>
        <Input
          type={'text'}
          title="Seu nome"
          placeholder="Exemplo: Maria da Silva"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type={'email'}
          title="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type={'password'}
          title="Senha"
          placeholder="No mínimo 8 caracteres"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <SingUpForm.Button disabled={isDisable} type="submit">
          Criar Admin
        </SingUpForm.Button>
        <SingUpForm.FormLink to="/">Voltar</SingUpForm.FormLink>
      </SingUpForm.Container>
    </SingUpContainer>
  )
}
