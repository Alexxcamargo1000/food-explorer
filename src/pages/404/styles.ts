import styled from 'styled-components'

export const Container404 = styled.main`
  > button {
    background-color: transparent;
    border: 0;
    color: ${(props) => props.theme['light-100']};
    cursor: pointer;
    margin: 2rem;
    transition: color 0.2s;
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
