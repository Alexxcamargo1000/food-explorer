import { MagnifyingGlass, Receipt, SignOut } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import logoAdmin from '../../assets/logo-admin.svg'
import {
  ButtonHeader,
  ButtonSingOut,
  HeaderContainer,
  InputHeader,
  Logo,
} from './styles'
import { useAuth } from '../../hooks/useAuth'
import { useFood } from '../../hooks/useFood'

interface HeaderProps {
  handleSearch?: (search: string) => void
}

export function Header(props: HeaderProps) {
  const { user, signOut } = useAuth()
  const { getFoods } = useFood()
  const navigate = useNavigate()

  function handleSignOut() {
    signOut()
    navigate('/')
  }

  function handleFoodSearch(search: string) {
    getFoods(search)
  }

  return (
    <HeaderContainer>
      <div>
        <Logo to="/">
          <img src={user?.admin ? logoAdmin : logo} alt="food explorer" />
        </Logo>

        <InputHeader>
          <label htmlFor="search">Busca</label>
          <MagnifyingGlass size={24} />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Busque pelas opções de pratos"
            onChange={(e) => handleFoodSearch(e.target.value)}
          />
        </InputHeader>

        {!user?.admin ? (
          <ButtonHeader to="order">
            <Receipt size={24} />
            Meu pedido (0)
          </ButtonHeader>
        ) : (
          <ButtonHeader to="/admin/new">Novo prato</ButtonHeader>
        )}

        <ButtonSingOut onClick={handleSignOut}>
          <SignOut size={24} />
        </ButtonSingOut>
      </div>
    </HeaderContainer>
  )
}
