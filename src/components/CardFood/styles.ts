import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CardContainer = styled.div`
  min-height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  gap: 1rem;
  padding: 2rem;
  width: 100%;
  max-width: 19rem; //304px
  background-color: ${(props) => props.theme['dark-200']};
  border: 1px solid ${(props) => props.theme['dark-300']};
  flex: none;

  button {
    font-weight: bold;
    border: 0;
    color: ${(props) => props.theme['light-100']};
    cursor: pointer;
    transition: opacity 0.3s;
  }

  img {
    max-width: 11rem; //176px
  }
`

export const Title = styled(Link)`
  color: currentColor;
  text-decoration: none;
  font-size: 1.5rem;
  font-family: 'Poppins', sans-serif;
  line-height: 1.4;
  overflow: hidden;
  white-space: nowrap;
`

export const Description = styled.p`
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;

  width: 100%;
  color: ${(props) => props.theme['light-400']};
  font-size: 0.875rem;
  line-height: 1.6;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const Price = styled.span`
  color: ${(props) => props.theme['cake-200']};
  font-size: 2rem;
  line-height: 1.6;
`
export const ButtonsContainer = styled.div`
  z-index: 2;
  min-height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;

  div {
    display: flex;
    gap: 1rem;
    align-items: center;

    span {
      font-weight: bold;
      font-size: 1.25rem;
    }
    button {
      font-weight: bold;
      font-size: 1.25rem;
      background-color: transparent;
      border: 0;
      color: ${(props) => props.theme['light-300']};
      cursor: pointer;
    }
  }

  button {
    height: 3rem;
    padding: 0.75rem 0.875rem;
    background: ${(props) => props.theme['tomato-100']};
    color: ${(props) => props.theme['light-100']};

    &:hover {
      opacity: 0.7;
    }
  }
`
