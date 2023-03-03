import styled from 'styled-components'

export const PreviewContainer = styled.main`
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 800px) {
    padding-inline: 4rem;
  }
`

export const FoodContainer = styled.div`
  display: flex;
  gap: 2.5rem;
  padding-bottom: 4rem;

  @media (max-width: 800px) {
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  img {
    max-width: 24rem;
    max-height: 24rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media (max-width: 800px) {
      width: 80%;
    }
  }
`

export const FoodContent = styled.div`
  margin-bottom: 4rem;
  @media (max-width: 800px) {
    text-align: center;
  }
  h1 {
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-family: 'Poppins', sans-serif;

    @media (max-width: 800px) {
      font-size: 1rem;
      margin-top: 1rem;
    }
  }
`

export const IngredientsContainer = styled.ul`
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    align-items: center;
    justify-content: center;
  }

  li {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    span {
      text-align: center;
      display: block;
      padding-inline: 0.5rem;
      padding-block: 4px;
      border-radius: 5px;
      background-color: ${(props) => props.theme['dark-1000']};

      @media (max-width: 800px) {
        font-size: 0.875rem;
        line-height: 171%;
      }
    }
  }

  img {
    max-width: 4rem;
    max-height: 6rem;
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`

export const PriceContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  > div {
    display: flex;

    @media (max-width: 800px) {
      width: 100%;
      justify-content: space-between;
    }

    gap: 3rem;

    > button,
    a {
      text-decoration: none;
      background-color: ${(props) => props.theme['tomato-100']};
      color: ${(props) => props.theme['light-100']};
      border: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 500;
      line-height: 24px;
      font-size: 0.875rem;

      @media (max-width: 800px) {
        flex: 1;
        text-align: center;
      }
    }
  }
`

export const ButtonsControllers = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  span {
    font-size: 1.5rem;
    line-height: 160%;
    font-weight: 700;
  }

  button {
    background-color: transparent;
    border: 0;
    font-size: 2rem;
    line-height: 0.00001px;
    cursor: pointer;
    color: ${(props) => props.theme['light-100']};
  }
`
