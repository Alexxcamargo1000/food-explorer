import styled from 'styled-components'

export const ContainerHome = styled.div``

export const BannerHome = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: linear-gradient(${(props) => props.theme.linear});
  height: 16.25rem; //260px
  border-radius: 8px;
  margin-top: 10rem;
  margin-bottom: 4rem;

  .containerImg {
    position: relative;

    img {
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

  .bannerTitle {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 2rem;
    margin-top: -2rem;
    color: ${(props) => props.theme['gray-200']};

    h2 {
      font-size: 2.5rem;
      font-weight: 500;
      line-height: 1.4;
    }

    p {
      font-family: 'Poppins', sans-serif;
      line-height: 1.4;
    }
  }
`
