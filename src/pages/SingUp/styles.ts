import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SingUpContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 40rem;
  place-items: center;
  height: 100vh;
`
export const SingUpLogo = styled.div`
  display: flex;
  gap: 1.5rem;
`

// Form SignIN

const Container = styled.form`
  background-color: ${(props) => props.theme['blue-600']};
  padding: 4rem;
  border-radius: 1rem;
  max-width: 476px;
  width: 100%;
  display: flex;
  gap: 2rem;
  flex-direction: column;
`
const Title = styled.legend`
  text-align: center;
  font-size: 2rem;
  font-family: 'Poppins';
  font-weight: 500;
  color: ${(props) => props.theme['white-100']};
`

const Button = styled.button`
  padding-block: 0.75rem;
  border: 0;
  background-color: ${(props) => props.theme['red-500']};
  color: ${(props) => props.theme['white-100']};
  cursor: pointer;
  transition: background-color 0.2s;
  border-radius: 4px;

  &:hover {
    background-color: ${(props) => props.theme['red-600']};
  }
`

const FormLink = styled(Link)`
  margin: 0 auto;
  font-size: 0.875rem;
  width: fit-content;
  color: ${(props) => props.theme['white-100']};
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const SingUpForm = {
  Container,
  Title,
  Button,
  FormLink,
}
