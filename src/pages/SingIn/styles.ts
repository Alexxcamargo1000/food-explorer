import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SingInContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 40rem;
  place-items: center;
  height: 100vh;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
export const SingInLogo = styled.div`
  display: flex;
  gap: 1.5rem;

  img {
    width: 20rem;
  }
`

// Form SignIN

const Container = styled.form`
  background-color: ${(props) => props.theme['dark-700']};
  padding: 4rem;
  border-radius: 1rem;
  max-width: 476px;
  width: 100%;
  display: flex;
  gap: 2rem;
  flex-direction: column;

  @media (max-width: 800px) {
    background-color: ${(props) => props.theme['dark-400']};
    max-width: 100%;
  }
`
const Title = styled.legend`
  text-align: center;
  font-size: 2rem;
  font-family: 'Poppins';
  font-weight: 500;
  color: ${(props) => props.theme['light-100']};

  @media (max-width: 800px) {
    display: none;
  }
`

const Button = styled.button`
  padding-block: 0.75rem;
  border: 0;
  background-color: ${(props) => props.theme['tomato-100']};
  color: ${(props) => props.theme['light-100']};
  cursor: pointer;
  transition: background-color 0.2s;
  border-radius: 4px;

  &:hover {
    background-color: ${(props) => props.theme['tomato-200']};
  }
`

const FormLink = styled(Link)`
  margin: 0 auto;
  font-size: 0.875rem;
  width: fit-content;
  color: ${(props) => props.theme['light-100']};
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${(props) => props.theme['light-500']};
  }
`

export const SingInForm = {
  Container,
  Title,
  Button,
  FormLink,
}
