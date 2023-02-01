import styled from 'styled-components'

export const NewIngredientContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  > a {
    align-self: flex-start;
    color: currentColor;
    display: flex;
    align-items: center;
    gap: 0.5;
    text-decoration: none;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    width: fit-content;
  }

  h2 {
    margin-bottom: 2rem;
  }
`

export const FormIngredient = styled.form`
  background-color: ${(props) => props.theme['blue-500']};
  max-width: 400px;
  width: 100%;
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  > legend {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    text-transform: capitalize;
    font-weight: 800;
  }
`

export const InputImageIngredient = styled.div`
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

export const ButtonSaveIngredient = styled.button`
  height: 3rem;
  background-color: ${(props) => props.theme['green-400']};
  border-radius: 4px;
  cursor: pointer;
  border: 0;
  color: ${(props) => props.theme['blue-900']};
  margin-top: 1rem;
`
