import { SignOut } from 'phosphor-react'
import { Link } from 'react-router-dom'
import {
  ButtonHeader,
  ButtonSingOut,
  HeaderButtons,
  HeaderContainer,
  Logo,
} from './styles'

export function HeaderAdmin() {
  return (
    <HeaderContainer>
      <div>
        <Logo to="/admin">
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

        <HeaderButtons>
          <Link to="/admin/user">Administrador</Link>
          <ButtonHeader to="/admin/new">Adicionar um Prato</ButtonHeader>

          <ButtonSingOut>
            <SignOut size={24} />
          </ButtonSingOut>
        </HeaderButtons>
      </div>
    </HeaderContainer>
  )
}
