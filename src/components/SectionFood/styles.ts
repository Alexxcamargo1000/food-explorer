import styled from 'styled-components'

export const SectionHome = styled.section`
  margin-bottom: 2rem;
  h3 {
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }
`

export const ContainerCarrossel = styled.div`
  position: relative;
`

export const Carrossel = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`

export const ControlsButtons = styled.div`
  button {
    border: 0;
    height: 100%;
    width: 4rem;
    display: block;
    cursor: pointer;
    color: ${(props) => props.theme['white-100']};
    top: 50%;
    opacity: 0.6;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }

    &:focus {
      box-shadow: 0 0 0 0px ${(props) => props.theme['blue-200']};
    }
  }

  .arrow-left {
    position: absolute;
    left: 0px;
    background: linear-gradient(
      -90deg,
      rgba(0, 10, 15, 0.272541) 0%,
      #000a0f 100%
    );
    transform: translateY(-50%);
  }

  .arrow-right {
    position: absolute;
    right: 0px;
    transform: translateY(-50%);
    background: linear-gradient(
      90deg,
      rgba(0, 10, 15, 0.272541) 0%,
      #000a0f 100%
    );
  }
`
