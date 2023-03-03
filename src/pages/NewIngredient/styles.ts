import styled from 'styled-components'

export const NewIngredientContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  > button {
    align-self: flex-start;
  }

  h2 {
    margin-bottom: 2rem;
  }
`

export const FormIngredient = styled.form`
  background-color: ${(props) => props.theme['dark-800']};
  max-width: 400px;
  width: 100%;
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 800px) {
    width: 100%;
  }

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
  border: 1px solid ${(props) => props.theme['light-100']};
  background-color: transparent;
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

export const ButtonSaveIngredient = styled.button`
  height: 3rem;
  background-color: ${(props) => props.theme['mint-100']};
  border-radius: 4px;
  cursor: pointer;
  border: 0;
  color: ${(props) => props.theme['dark-1000']};
  margin-top: 1rem;
`
