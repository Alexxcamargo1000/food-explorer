import styled from 'styled-components'

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    text-transform: capitalize;
    color: ${(props) => props.theme['light-200']};
  }

  input {
    padding-inline: 0.875rem;
    padding-block: 0.75rem;
    border-radius: 4px;
    border: 0;
    background-color: ${(props) => props.theme['dark-900']};
    color: ${(props) => props.theme['light-100']};

    &::placeholder {
      color: ${(props) => props.theme['light-500']};
    }
  }
`
