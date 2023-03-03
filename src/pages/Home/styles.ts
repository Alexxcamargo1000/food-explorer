import styled from 'styled-components'

export const ContainerHome = styled.div`
  padding-top: 10rem;
  padding-inline: 1rem;
  @media (max-width: 800px) {
    padding-top: 5rem;
  }
`

export const BannerHome = styled.div`
  display: grid;
  height: 16rem;
  border-radius: 8px;
  margin-bottom: 4rem;
  grid-template-columns: 1fr 1fr;
  background: linear-gradient(${(props) => props.theme['gradient-200']});

  @media (max-width: 800px) {
    width: 95%;
    height: 7.5rem;
    margin-bottom: 4rem;
    margin-inline: auto;
  }

  .containerImg {
    position: relative;

    img {
      left: 0;
      bottom: 0;
      width: 100%;
      position: absolute;
      object-fit: cover;
    }
  }

  .bannerTitle {
    display: flex;
    margin-top: -2rem;
    padding-left: 2rem;
    flex-direction: column;
    justify-content: center;
    color: ${(props) => props.theme['light-300']};

    @media (max-width: 800px) {
      margin-top: 0rem;
      padding-left: 0rem;
    }

    h2 {
      font-weight: 500;
      line-height: 1.4;
      font-size: 2.5rem;
      color: ${(props) => props.theme['light-300']};

      @media (max-width: 800px) {
        font-weight: 600;
        line-height: 140%;
        font-size: 1.25rem;
      }
    }

    p {
      line-height: 1.4;
      font-family: 'Poppins', sans-serif;
      color: ${(props) => props.theme['light-300']};

      @media (max-width: 800px) {
        font-size: 0.75rem;
        line-height: 140%;
      }
    }
  }
`
