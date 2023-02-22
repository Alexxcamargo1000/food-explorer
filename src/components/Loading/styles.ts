import styled, { keyframes } from 'styled-components'

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - (6.5rem * 2));

  > strong {
    margin-top: 1rem;
    position: absolute;
  }
`
const rotate = keyframes`
 0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(90deg);
  }

  100% {
    transform: rotate(180deg);  
  }
`
export const Icon = styled.svg`
  margin-top: -6rem;
  max-width: 3rem;
  fill: ${(props) => props.theme['cake-200']};
  animation: ${rotate} 2s ease-in-out infinite;
`
