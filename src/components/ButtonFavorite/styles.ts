import styled from 'styled-components'

export const HeartContainer = styled.button`
  background-color: transparent;
  border: 0;
  color: ${(props) => props.theme['light-300']};
  position: absolute;
  top: 1rem;
  right: 1rem;

  svg {
    fill: ${(props) => props.theme['tomato-200']};
  }
`
