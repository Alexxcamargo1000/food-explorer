import styled from 'styled-components'

export const NewFoodContainer = styled.main`
  padding-top: 1.5rem;
  padding-inline: 1rem;

  .empty {
    //  border-color: ${(props) => props.theme['red-500']};
  }

  .notEmpty {
    border-color: ${(props) => props.theme['green-400']};
  }

  > button {
    background: transparent;
    color: currentColor;
    display: flex;
    align-items: center;
    gap: 0.5;
    text-decoration: none;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
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

  select {
    background-color: transparent;
    padding-inline: 0.875rem;
    padding-block: 0.75rem;
    height: 45px;
    align-self: flex-end;
    color: ${(props) => props.theme['white-200']};
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme['white-100']};
    cursor: pointer;

    option {
      padding: 1rem;
      background-color: ${(props) => props.theme['blue-700']};
    }
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
  flex-wrap: wrap;
  gap: 1rem;
  min-height: 3rem;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid ${(props) => props.theme['white-100']};
  padding-inline: 0.5rem;
  padding-block: 0.5rem;
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
  span {
    display: block;
  }

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

  &:disabled {
    cursor: not-allowed;
    opacity: 0.1;
  }

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

export const Price = styled.div`
  height: 100%;

  input {
    min-height: 3.1rem;
  }
`
