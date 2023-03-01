import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 6.5rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme['dark-600']};
  padding: 1rem;

  .hide {
    visibility: hidden;
    width: 0.0001px;
    height: 0.00001px;
  }

  > nav {
    width: 100%;
    max-width: 70rem;
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 800px) {
      padding-inline: 1rem;
    }
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme['light-100']};
    line-height: 1.6;
  }
`

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  span {
    font-weight: bold;
    font-size: 1.5rem;
    color: ${(props) => props.theme['light-100']};
  }
`

export const InputHeader = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: 3rem;
  gap: 0.875rem; //14px
  padding-block: 0.75rem; //12px
  padding-inline: 0.875rem; //14px
  border-radius: 4px;
  background-color: ${(props) => props.theme['dark-900']};
  @media (max-width: 800px) {
    display: none;
  }

  &:focus-within {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['cake-200']};
  }

  > svg {
    color: ${(props) => props.theme['light-500']};
  }

  label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  input {
    background-color: transparent;
    border: none;
    width: 100%;
    color: ${(props) => props.theme['light-200']};

    &::placeholder {
      color: ${(props) => props.theme['light-500']};
    }

    &:focus {
      box-shadow: none;
    }
  }
`

export const ButtonHeader = styled(Link)`
  background-color: ${(props) => props.theme['tomato-200']};
  color: ${(props) => props.theme['light-100']};
  border: 0;
  padding-block: 0.75rem;
  padding-inline: 2rem;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: background 0.2s;

  @media (max-width: 800px) {
    display: none;
  }

  &:hover {
    background-color: ${(props) => props.theme['tomato-300']};
  }
`

export const ButtonSingOut = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme['light-100']};
  border: 0;
  cursor: pointer;
  transition: color 0.2s;
  line-height: 0.0001px;

  @media (max-width: 800px) {
    display: none;
  }

  &:hover {
    color: ${(props) => props.theme['light-300']};
  }
`

// =================================Mobile====================================

export const ButtonMenu = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  color: ${(props) => props.theme['light-100']};

  @media (min-width: 800px) {
    display: none;
  }
`

export const ButtonReceipt = styled(ButtonMenu)`
  position: relative;

  span {
    position: absolute;
    top: -10px;
    right: -10px;
    display: block;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 9999px;
    background-color: ${(props) => props.theme['tomato-100']};

    font-size: ${(props) => props.theme.fontsSize.sm};
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }
`

//= ===================Menu Open =================================

export const MenuOpen = styled.div`
  position: fixed;
  overflow-y: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme['dark-400']};
  display: grid;
  grid-template-rows: auto auto 1fr;
`

export const MenuHeader = styled.div`
  min-height: 8rem;
  background-color: ${(props) => props.theme['dark-700']};
  padding-top: 4rem;
  padding-left: 2rem;

  button {
    background-color: transparent;
    border: 0;
    color: ${(props) => props.theme['light-100']};
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      font-size: 1.5rem;
    }
  }
`

export const MenuContainer = styled.div`
  padding: 1.5rem;
`

export const InputHeaderMobile = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: 3rem;
  gap: 0.875rem; //14px
  padding-block: 0.75rem; //12px
  padding-inline: 0.875rem; //14px
  border-radius: 4px;
  background-color: ${(props) => props.theme['dark-900']};

  &:focus-within {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['cake-200']};
  }

  > svg {
    color: ${(props) => props.theme['light-500']};
  }

  label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  input {
    background-color: transparent;
    border: none;
    width: 100%;
    color: ${(props) => props.theme['light-200']};

    &::placeholder {
      color: ${(props) => props.theme['light-500']};
    }

    &:focus {
      box-shadow: none;
    }
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 3rem;

  button,
  a {
    width: 100%;
    text-align: left;
    border: 0;
    background-color: transparent;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 140%;
    color: ${(props) => props.theme['light-100']};
    margin-left: 10px;

    &::after {
      content: '';
      width: 100%;
      height: 1px;
      display: block;
      background-color: ${(props) => props.theme['dark-1000']};
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
`

export const MenuFooter = styled.div`
  align-self: flex-end;
`
