import styled from 'styled-components'

export const PreviewContainer = styled.div`
  padding-top: 1.5rem;

  > button {
    background: transparent;
    border: 0;
    color: ${(props) => props.theme['gray-200']};
    font-size: 1.5rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    line-height: 0.0001px;
    margin-bottom: 3rem;
  }
`

export const FoodContainer = styled.div`
  display: flex;
  gap: 2.5rem;
  padding-bottom: 4rem;

  img {
    max-width: 24rem;
    max-height: 24rem;
    object-fit: cover;
  }
`

export const FoodContent = styled.div`
  margin-bottom: 4rem;
  h1 {
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 8px;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-family: 'Poppins', sans-serif;
  }
`

export const IngredientsContainer = styled.ul`
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;

  li {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    span {
      font-size: 1.125rem;
      text-align: center;
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
  .price {
    color: ${(props) => props.theme['blue-100']};
    font-size: 2rem;
  }

  > div {
    display: flex;

    gap: 3rem;

    > button {
      background-color: ${(props) => props.theme['red-500']};
      color: ${(props) => props.theme['white-100']};
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 0.75rem 0.25rem;
      border-radius: 4px;

      font-size: 0.875rem;
    }
  }
`

export const ButtonsControllers = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.875rem;
  button {
    background-color: transparent;
    border: 0;
    font-size: 1.5rem;
    line-height: 0.00001px;

    color: ${(props) => props.theme['white-100']};
  }
`
