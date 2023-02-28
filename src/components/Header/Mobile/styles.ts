import styled from 'styled-components'
import * as Portal from '@radix-ui/react-portal'

export const HeaderContainerMobile = styled.div`
  width: 100%;
  min-height: 6.5rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme['dark-600']};
  padding-inline: 2rem;
  padding-block: 1rem;

  > div {
    width: 100%;
    max-width: 70rem;
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
  }
`

const buttonBase = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  color: ${(props) => props.theme['light-100']};
`

export const ButtonMenu = styled(buttonBase)``

export const ButtonReceipt = styled(buttonBase)`
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

export const MenuOpen = styled(Portal.Root)`
  position: fixed;
  overflow-y: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  height: 100vh;
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

export const ButtonOutMobile = styled.button``

export const MenuFooter = styled.div`
  align-self: flex-end;
`
