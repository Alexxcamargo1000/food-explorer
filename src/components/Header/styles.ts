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

  > div {
    width: 100%;
    max-width: 70rem;
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
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

  &:hover {
    color: ${(props) => props.theme['light-300']};
  }
`

export const HeaderButtons = styled.div`
  display: flex;
  gap: 1rem;

  a {
    align-self: center;
  }
`
