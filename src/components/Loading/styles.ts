import styled, { keyframes } from 'styled-components'

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - (6.5rem * 2));
`

const transform = keyframes`
 0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(20px);
  }

  100% {
    transform: translateY(0px);    
  }
`
export const Icon = styled.svg`
  margin-top: -3rem;
  width: 3rem;
  fill: ${(props) => props.theme['blue-200']};
  animation: ${transform} 2s ease-in-out infinite;
`
