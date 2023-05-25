import styled from 'styled-components'

export const ContainerEmpty = styled.div`
  width: 100%;
  margin-block: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  h3 {
    color: ${(props) => props.theme['light-200']};
  }

  p,
  a {
    color: ${(props) => props.theme['light-500']};
  }

  a:hover {
    color: ${(props) => props.theme['light-300']};
  }
`
