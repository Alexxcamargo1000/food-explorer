import styled from 'styled-components'

export const NewFoodContainer = styled.main`
  padding-top: 1.5rem;
  padding-inline: 1rem;

  > button {
    background: transparent;
    border: 0;
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

  h1 {
    @media (max-width: 800px) {
      font-size: 2rem;
      line-height: 140%;
      margin-left: 1rem;
    }
  }
`

// form
const Root = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
  padding: 1rem;
  margin-bottom: 4rem;

  input {
    background-color: ${(props) => props.theme['dark-800']};
    border: none;
  }
`

const Fieldset = styled.fieldset`
  display: flex;
  gap: 2rem;
  border: none;

  @media (max-width: 800px) {
    flex-direction: column;
  }

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
  background-color: ${(props) => props.theme['dark-800']};
  color: ${(props) => props.theme['light-100']};
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

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  select {
    background-color: ${(props) => props.theme['dark-800']};
    padding-inline: 0.875rem;
    padding-block: 0.75rem;
    height: 100%;
    align-self: flex-end;
    color: ${(props) => props.theme['light-200']};
    border-radius: 4px;
    border: none;
    cursor: pointer;

    @media (max-width: 800px) {
      width: 100%;
    }

    option {
      padding: 1rem;
      background-color: ${(props) => props.theme['dark-800']};

      @media (max-width: 800px) {
        width: 50%;
      }
    }
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
  background-color: ${(props) => props.theme['dark-800']};

  border: none;
  padding-inline: 0.5rem;
  padding-block: 0.5rem;
  border-radius: 4px;
`

const Ingredient = styled.div`
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${(props) => props.theme['light-600']};

  color: ${(props) => props.theme['light-100']};
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
  border: 1px dashed ${(props) => props.theme['light-500']};
  line-height: 0;
  background-color: transparent;
  color: currentColor;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;

  &:hover {
    svg,
    span {
      color: ${(props) => props.theme['light-200']};
    }
  }

  svg,
  span {
    color: ${(props) => props.theme['light-500']};
    transition: color 0.2s;
  }
`

const TextArea = styled.textarea`
  padding-inline: 0.875rem;
  padding-block: 0.75rem;
  border-radius: 4px;
  border: none;
  background-color: ${(props) => props.theme['dark-800']};
  color: ${(props) => props.theme['light-100']};
  min-height: 172px;
  resize: none;
  overflow-y: auto;

  &::placeholder {
    color: ${(props) => props.theme['light-500']};
  }
`

const Button = styled.button`
  padding-inline: 1.5rem;
  padding-block: 0.75rem;
  align-self: flex-end;
  cursor: pointer;
  border: 0;
  background-color: ${(props) => props.theme['tomato-100']};
  color: ${(props) => props.theme['light-100']};
  border-radius: 5px;
  transition: background-color 0.2s;

  font-family: 'Poppins', sans-serif;
  font-size: ${(props) => props.theme.fontsSize.sm};
  font-weight: 500;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.1;
    background-color: ${(props) => props.theme['tomato-400']};
  }

  &:hover {
    background-color: ${(props) => props.theme['tomato-200']};
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
  SelectWrapper,
}

export const Price = styled.div`
  height: 100%;

  input {
    min-height: 3.1rem;
  }
`

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 2rem;

  @media (max-width: 800px) {
    justify-content: space-between;
  }
`

export const ButtonDelete = styled.button`
  background-color: ${(props) => props.theme['dark-800']};
  color: ${(props) => props.theme['light-100']};
  border: 0;
  border-radius: 5px;
  padding-inline: 1.5rem;
  padding-block: 0.75rem;
  font-family: 'Poppins', sans-serif;
  font-size: ${(props) => props.theme.fontsSize.sm};
  font-weight: 500;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`
