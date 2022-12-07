import styled from 'styled-components'

export const SectionHome = styled.section`
  margin-bottom: 2rem;
  h3 {
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }
`

export const CarrosselHome = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
`

export const ContainerCarrossel = styled.div`
  position: relative;

  .arrow-left,
  .arrow-right {
    border: 0;
    background-color: transparent;
    cursor: pointer;
    color: ${(props) => props.theme['blue-200']};
  }

  .arrow-left {
    position: absolute;
    left: -40px;
    top: 50%;
    transform: translateY(-50%);
  }

  .arrow-right {
    position: absolute;
    right: -40px;
    top: 50%;
    transform: translateY(-50%);
  }
`
