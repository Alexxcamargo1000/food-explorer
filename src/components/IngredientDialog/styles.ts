import { DialogContent, DialogOverlay, Portal } from '@radix-ui/react-dialog'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const IngredientDialogContainer = styled(Portal)``

export const Overlay = styled(DialogOverlay)`
  background-color: ${(props) => props.theme['gradient-100']};
  position: fixed;
  inset: 0;
`

export const Content = styled(DialogContent)`
  background-color: ${(props) => props.theme['dark-900']};
  border-radius: 8px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 550px;
  max-height: 85vh;
  padding: 3rem;
  overflow-y: auto;

  @media (max-width: 500px) {
    padding: 1rem;
    padding-top: 3rem;
    width: 98vw;
  }
`

export const SearchContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['light-100']};
  margin-bottom: 2rem;

  &:focus-within {
    box-shadow: 0 0 0 2px ${(props) => props.theme['cake-200']};
  }

  input:focus {
    box-shadow: 0 0 0 0px ${(props) => props.theme['cake-200']};
  }

  input {
    border: 0;
  }
`

export const ListIngredient = styled.ul`
  list-style: none;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
  li {
    display: flex;
    position: relative;

    .delete {
      position: absolute;
      top: 0px;
      right: 0px;
      border: 0;
      padding: 2.5px;
      color: ${(props) => props.theme['tomato-100']};
      background-color: transparent;
      cursor: pointer;
      transition: 0.2s;
      line-height: 0.0001px;
      &:hover {
        color: ${(props) => props.theme['tomato-400']};
      }
      &:focus {
        box-shadow: 0 0 0 2px ${(props) => props.theme['cake-100']};
      }
    }
  }
`

export const IngredientButton = styled.button`
  width: 100%;
  padding-block: 0.5rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, color 0.4s;
  background-color: ${(props) => props.theme['cake-200']};
  color: ${(props) => props.theme['dark-500']};
  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme['cake-100']};
  }

  &:disabled {
    opacity: 0.3;
    background-color: ${(props) => props.theme['cake-200']};

    &:hover {
      opacity: 0.3;
      background-color: ${(props) => props.theme['cake-200']};
      color: ${(props) => props.theme['dark-500']};
    }
  }

  &:not(:disabled).checked {
    background-color: ${(props) => props.theme['dark-500']};
    color: ${(props) => props.theme['light-100']};

    &:hover {
      background-color: ${(props) => props.theme['dark-500']};
      color: ${(props) => props.theme['light-100']};
    }
  }

  &:hover {
    background-color: ${(props) => props.theme['cake-100']};
  }

  img {
    width: 2rem;
    height: 2rem;
    border-radius: 4rem;
    object-fit: cover;
  }
`

export const DialogButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`

const ButtonDefault = styled.button`
  width: 100%;
  height: 3rem;
  padding-block: 0.5rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`

export const ButtonAdd = styled(ButtonDefault)`
  background-color: ${(props) => props.theme['mint-100']};
  color: ${(props) => props.theme['dark-100']};
`

export const LinkNewIngredient = styled(Link)`
  width: 100%;
  height: 3rem;
  padding-block: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s, border-color 0.4s;
  background-color: ${(props) => props.theme['dark-500']};
  border: 1px solid ${(props) => props.theme['cake-100']};
  color: ${(props) => props.theme['light-100']};

  &:hover {
    background-color: ${(props) => props.theme['dark-800']};
    border-color: ${(props) => props.theme['mint-100']};
  }
`

export const ButtonClose = styled.button`
  line-height: 0;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: transparent;
  border: 0;
  color: ${(props) => props.theme['light-100']};
`
