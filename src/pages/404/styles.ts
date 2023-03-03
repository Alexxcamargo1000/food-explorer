import styled from 'styled-components'

export const Container404 = styled.main`
  > button {
    border: 0;
    margin: 2rem;
    cursor: pointer;
    transition: color 0.2s;
    background-color: transparent;
    color: ${(props) => props.theme['light-100']};
    &:hover {
      color: ${(props) => props.theme['light-500']};
    }
  }
`

export const Content404 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 500px;

  h1 {
    font-size: 5rem;
    font-weight: 900;
  }
`
