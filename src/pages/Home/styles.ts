import styled from 'styled-components'

export const ContainerHome = styled.div`
  padding-top: 10rem;
  @media (max-width: 800px) {
    padding-top: 5rem;
  }
`

export const BannerHome = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: linear-gradient(${(props) => props.theme['gradient-200']});
  height: 16.25rem; //260px
  border-radius: 8px;
  margin-bottom: 4rem;

  @media (max-width: 800px) {
    height: 120px;
    width: 95%;
    margin-inline: auto;
    margin-bottom: 4rem;
  }

  .containerImg {
    position: relative;

    img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      @media (max-width: 800px) {
        object-fit: cover;
      }
    }
  }

  .bannerTitle {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 2rem;
    margin-top: -2rem;
    color: ${(props) => props.theme['light-300']};

    @media (max-width: 800px) {
      padding-left: 0rem;
      margin-top: 0rem;
    }

    h2 {
      font-size: 2.5rem;
      font-weight: 500;
      line-height: 1.4;
      color: ${(props) => props.theme['light-300']};

      @media (max-width: 800px) {
        font-size: 1.25rem;
        line-height: 140%;
        font-weight: 600;
      }
    }

    p {
      font-family: 'Poppins', sans-serif;
      line-height: 1.4;
      color: ${(props) => props.theme['light-300']};

      @media (max-width: 800px) {
        font-size: 0.75rem;
        line-height: 140%;
      }
    }
  }
`
