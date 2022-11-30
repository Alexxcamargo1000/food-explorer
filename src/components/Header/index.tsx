import { MagnifyingGlass, Receipt, SignOut } from 'phosphor-react'
import { Link } from 'react-router-dom'
import {
  ButtonHeader,
  ButtonSingOut,
  HeaderContainer,
  InputHeader,
  Logo,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <Logo>
          <svg
            width="27"
            height="30"
            viewBox="0 0 27 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.6024 0.306641L26.2484 7.60782V22.2102L13.6024 29.5114L0.956346 22.2102V7.60782L13.6024 0.306641Z"
              fill="#065E7C"
            />
          </svg>
          <span>food explorer</span>
        </Logo>

        <Link to="fav">Meus favoritos</Link>

        <InputHeader>
          <label htmlFor="search">Busca</label>
          <MagnifyingGlass size={24} />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Busque pelas opções de pratos"
          />
        </InputHeader>

        <ButtonHeader>
          <Receipt size={24} />
          Meu pedido (0)
        </ButtonHeader>

        <ButtonSingOut>
          <SignOut size={24} />
        </ButtonSingOut>
      </div>
    </HeaderContainer>
  )
}
