import { List, Receipt, MagnifyingGlass, X } from 'phosphor-react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import logoAdmin from '../../../assets/logo-admin.svg'
import logo from '../../../assets/logo.svg'
import {
  ButtonMenu,
  ButtonReceipt,
  ButtonsWrapper,
  HeaderContainerMobile,
  InputHeaderMobile,
  MenuContainer,
  MenuFooter,
  MenuHeader,
  MenuOpen,
} from './styles'
import { useState } from 'react'
import { Footer } from '../../Footer'
import { useFood } from '../../../hooks/useFood'

export function HeaderMobile() {
  const { signOut, user } = useAuth()
  const { getFoods } = useFood()
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleMenuToggle() {
    setIsMenuOpen((state) => !state)
  }

  function handleSignOut() {
    signOut()
    navigate('/')
  }

  function handleFoodSearch(search: string) {
    getFoods(search)
  }
  return (
    <HeaderContainerMobile>
      {!isMenuOpen ? (
        <div>
          <ButtonMenu onClick={handleMenuToggle}>
            <List size={24} />
          </ButtonMenu>

          {user?.admin ? (
            <img src={logoAdmin} alt="" />
          ) : (
            <img src={logo} alt="" />
          )}

          {!user?.admin ? (
            <ButtonReceipt>
              <span>0</span>
              <Receipt size={24} />
            </ButtonReceipt>
          ) : (
            <div />
          )}
        </div>
      ) : (
        <MenuOpen>
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
                onChange={(e) => handleFoodSearch(e.target.value)}
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
      )}
    </HeaderContainerMobile>
  )
}
