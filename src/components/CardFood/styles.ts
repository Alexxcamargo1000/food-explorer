import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CardContainer = styled.div`
  position: relative;
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

  @media (max-width: 800px) {
    min-height: 25rem;
    justify-content: center;
  }

  button {
    font-weight: bold;
    border: 0;
    color: ${(props) => props.theme['light-100']};
    cursor: pointer;
    transition: opacity 0.3s;
  }

  img {
    max-width: 11rem; //176px
    max-height: 11rem; //176px
    width: 100%;
    height: 100%;
    object-fit: contain;

    @media (max-width: 800px) {
      max-width: 8rem;
    }
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

  @media (max-width: 800px) {
    font-size: 0.875rem;
  }
`

export const Description = styled.p`
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 800px) {
    display: none;
  }

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

  @media (max-width: 800px) {
    font-size: 1rem;
  }
`
export const ButtonsContainer = styled.div`
  z-index: 2;
  min-height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: stretch;
  }

  div {
    display: flex;
    gap: 1rem;
    align-items: center;

    @media (max-width: 800px) {
      margin: 0 auto;
    }

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

    @media (max-width: 800px) {
      border-radius: 5px;
    }
  }
`
