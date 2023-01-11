import styled from 'styled-components'

export const NewFoodContainer = styled.main`
  padding-top: 1.5rem;

  > a {
    color: currentColor;
    display: flex;
    align-items: center;
    gap: 0.5;
    text-decoration: none;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    width: fit-content;
  }
`

// form
const Root = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
  padding: 1rem;
`

const Fieldset = styled.fieldset`
  display: flex;
  gap: 2rem;
  border: none;

  .textarea-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
`

const InputImage = styled.div`
  margin-top: 8px;
  padding-inline: 0.875rem;
  padding-block: 0.75rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['white-100']};
  background-color: transparent;
  color: ${(props) => props.theme['white-100']};
  height: fit-content;
  max-height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    visibility: hidden;
    width: 0.000001px;
  }

  label {
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
  }
`
const IngredientsRoot = styled.div`
  width: 100%;
`
const IngredientsWrapper = styled.div`
  margin-top: 0.5rem;
  display: flex;
  max-height: 46px;
  gap: 1rem;
  height: 3rem;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid ${(props) => props.theme['white-100']};
  padding-inline: 0.5rem;
  border-radius: 4px;
`

const Ingredient = styled.div`
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${(props) => props.theme['white-100']};
  padding: 0.5rem;
  max-height: 2rem;
  border-radius: 4px;
  transition: opacity 0.2s;

  &:has(button:hover) {
    opacity: 0.8;
  }

  > button {
    border: 0;
    line-height: 0;
    background-color: transparent;
    color: currentColor;
    cursor: pointer;
  }
`

const NewIngredient = styled.div`
  display: flex;
  align-items: center;
  max-height: 2rem;
  gap: 0.5rem;
  border: 1px dashed ${(props) => props.theme['gray-500']};
  line-height: 0;
  background-color: transparent;
  color: currentColor;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;

  &:hover {
    svg,
    span {
      color: ${(props) => props.theme['gray-200']};
    }
  }

  svg,
  span {
    color: ${(props) => props.theme['gray-500']};
    transition: color 0.2s;
  }
`

const TextArea = styled.textarea`
  padding-inline: 0.875rem;
  padding-block: 0.75rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['white-100']};
  background-color: transparent;
  color: ${(props) => props.theme['white-100']};
  min-height: 172px;

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

const Button = styled.button`
  width: 33%;
  height: 3rem;
  align-self: flex-end;

  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${(props) => props.theme['white-100']};
  border: 1px solid ${(props) => props.theme['white-100']};
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`

export const NewFoodForm = {
  Root,
  Fieldset,
  InputImage,
  Button,
  TextArea,
  IngredientsRoot,
  IngredientsWrapper,
  Ingredient,
  NewIngredient,
}
