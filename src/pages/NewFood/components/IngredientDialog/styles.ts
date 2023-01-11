import { DialogContent, DialogOverlay, Portal } from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const IngredientDialogContainer = styled(Portal)``

export const Overlay = styled(DialogOverlay)`
  background-color: ${(props) => props.theme.blackTransparent};
  position: fixed;
  inset: 0;
`

export const Content = styled(DialogContent)`
  background-color: ${(props) => props.theme['blue-500']};
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
`

export const SearchContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['white-100']};
  margin-bottom: 2rem;

  &:focus-within {
    box-shadow: 0 0 0 2px ${(props) => props.theme['blue-200']};
  }

  input:focus {
    box-shadow: 0 0 0 0px ${(props) => props.theme['blue-200']};
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

  li {
    display: flex;
  }
`

export const IngredientButton = styled.button`
  width: 100%;
  padding-block: 0.5rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme['blue-200']};
  color: ${(props) => props.theme['blue-100']};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, color 0.4s;

  &:hover {
    background-color: ${(props) => props.theme['blue-400']};
    color: ${(props) => props.theme['blue-200']};
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
  background-color: ${(props) => props.theme['green-400']};
  color: ${(props) => props.theme['blue-800']};
`

export const ButtonCancel = styled(ButtonDefault)`
  background-color: ${(props) => props.theme['red-300']};
  color: ${(props) => props.theme['white-100']};
`

export const ButtonClose = styled.button`
  line-height: 0;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: transparent;
  border: 0;
  color: ${(props) => props.theme['white-200']};
`
