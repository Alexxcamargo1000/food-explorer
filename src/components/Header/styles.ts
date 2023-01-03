import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 6.5rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme['blue-600']};

  > div {
    width: 100%;
    max-width: 70rem;
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme['gray-100']};
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
    color: ${(props) => props.theme['white-100']};
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
  background-color: ${(props) => props.theme['blue-500']};

  &:focus-within {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['blue-200']};
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
    color: ${(props) => props.theme['white-100']};

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }

    &:focus {
      box-shadow: none;
    }
  }
`

export const ButtonHeader = styled(Link)`
  background-color: ${(props) => props.theme['red-500']};
  color: ${(props) => props.theme['white-100']};
  border: 0;
  padding-block: 0.75rem;
  padding-inline: 2rem;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['red-600']};
  }
`

export const ButtonSingOut = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme['white-100']};
  border: 0;
  cursor: pointer;
  transition: color 0.2s;
  line-height: 0.0001px;

  &:hover {
    color: ${(props) => props.theme['gray-200']};
  }
`
