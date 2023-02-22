import styled from 'styled-components'

export const FooterContainer = styled.footer`
  height: 6.5rem;
  background-color: ${(props) => props.theme['dark-600']};
  color: ${(props) => props.theme['light-200']};
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 100%;
    max-width: 70rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const LogoFood = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme['light-100']};
  opacity: 0.3;
  gap: 0.75rem;

  span {
    font-weight: bold;
    font-size: 1.5rem;
  }
`
