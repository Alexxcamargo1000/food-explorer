import styled from 'styled-components'

export const ButtonBackContainer = styled.button`
  background: transparent;
  border: 0;
  color: ${(props) => props.theme['light-300']};
  font-size: 1.5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  line-height: 0.0001px;
  margin-bottom: 3rem;
  height: fit-content;
`
