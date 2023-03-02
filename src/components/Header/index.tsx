import { List, MagnifyingGlass, Receipt, SignOut, X } from 'phosphor-react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import logoAdmin from '../../assets/logo-admin.svg'
import {
  ButtonHeader,
  ButtonMenu,
  ButtonReceipt,
  ButtonSingOut,
  ButtonsWrapper,
  HeaderContainer,
  InputHeader,
  InputHeaderMobile,
  Logo,
  MenuContainer,
  MenuFooter,
  MenuHeader,
  MenuOpen,
} from './styles'
import { useAuth } from '../../hooks/useAuth'
import { useFood } from '../../hooks/useFood'
import { useEffect, useState } from 'react'
import { Footer } from '../Footer'

interface HeaderProps {
  handleSearch?: (search: string) => void
}

export function Header(props: HeaderProps) {
  const { user, signOut } = useAuth()
  const { getFoods } = useFood()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  function handleMenuToggle() {
    setIsMenuOpen((state) => !state)
  }

  function handleSignOut() {
    signOut()
    navigate('/')
  }

  useEffect(() => {
    getFoods(search)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  return (
    <HeaderContainer>
      <nav>
        <ButtonMenu onClick={handleMenuToggle}>
          <List size={24} />
        </ButtonMenu>

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
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputHeader>

        {!user?.admin ? (
          <ButtonHeader to="order">
            <Receipt size={24} />
            Meu pedido (0)
          </ButtonHeader>
        ) : (
          <ButtonHeader to="/new">Novo prato</ButtonHeader>
        )}

        <ButtonSingOut onClick={handleSignOut}>
          <SignOut size={24} />
        </ButtonSingOut>
        {!user?.admin ? (
          <ButtonReceipt>
            <span>0</span>
            <Receipt size={24} />
          </ButtonReceipt>
        ) : (
          <div />
        )}
      </nav>

      <MenuOpen className={!isMenuOpen ? 'hide' : ''}>
        <MenuHeader>
          <button onClick={handleMenuToggle}>
            <X size={24} /> <span>Menu</span>
          </button>
        </MenuHeader>

        <MenuContainer>
          <InputHeaderMobile>
            <label htmlFor="search">Busca</label>
            <MagnifyingGlass size={24} />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Busque pelas opções de pratos"
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputHeaderMobile>

          <ButtonsWrapper>
            {user?.admin && (
              <Link to="/new" onClick={handleMenuToggle}>
                Novo Prato
              </Link>
            )}
            <button onClick={handleSignOut}>Sair</button>
          </ButtonsWrapper>
        </MenuContainer>

        <MenuFooter>
          <Footer />
        </MenuFooter>
      </MenuOpen>
    </HeaderContainer>
  )
}
