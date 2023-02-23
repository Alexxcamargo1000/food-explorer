import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const EditContainer = styled(Link)`
  color: ${(props) => props.theme['light-300']};
  position: absolute;
  top: 1rem;
  right: 1rem;
`
