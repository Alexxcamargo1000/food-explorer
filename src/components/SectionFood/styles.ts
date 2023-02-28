import styled from 'styled-components'

export const SectionHome = styled.section`
  margin-bottom: 2rem;

  min-height: 20rem;
  h3 {
    font-size: 2rem;
    margin-bottom: 2.5rem;

    @media (max-width: 800px) {
      font-weight: 500;
      font-size: 1.125rem;
      line-height: 140%;
      margin-left: 1rem;
    }
  }
`

export const ContainerCarrossel = styled.div`
  position: relative;

  &::before {
    content: '';
    z-index: 0;
    position: absolute;
    height: 100%;
    width: 278px;
    background: linear-gradient(${(props) => props.theme['gradient-100']});
    transform: matrix(-1, 0, 0, 1, 0, 0);
    left: 0px;
    top: 0px;
    pointer-events: none;
    @media (max-width: 800px) {
      display: none;
    }
  }

  &::after {
    content: '';
    z-index: 0;
    position: absolute;
    height: 100%;
    width: 278px;
    background: linear-gradient(${(props) => props.theme['gradient-100']});
    right: 0px;
    top: 0px;
    user-select: none;
    pointer-events: none;
    @media (max-width: 800px) {
      display: none;
    }
  }
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
  @media (max-width: 800px) {
    display: none;
  }
  button {
    border: 0;
    height: 100%;
    width: 4rem;
    display: block;
    cursor: pointer;
    color: ${(props) => props.theme['light-100']};
    top: 50%;
    opacity: 1;
    transition: opacity 0.2s;
    background-color: transparent;

    &:hover {
      opacity: 1;
    }

    &:focus {
      box-shadow: 0 0 0 0px ${(props) => props.theme['cake-200']};
    }
  }

  .arrow-left {
    z-index: 100;
    position: absolute;
    left: 0px;
    transform: translateY(-50%);
  }

  .arrow-right {
    z-index: 100;

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
