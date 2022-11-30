import styled from 'styled-components'

export const FooterContainer = styled.footer`
  height: 6.5rem;
  background-color: ${(props) => props.theme['blue-600']};
  color: ${(props) => props.theme['white-200']};

  > div {
    max-width: 70rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
