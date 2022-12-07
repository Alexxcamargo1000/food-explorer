import { Minus, Plus } from 'phosphor-react'
import {
  CardContainer,
  Title,
  Description,
  Price,
  ButtonsContainer,
} from './styles'

interface CardFoodProps {
  image: string
  slug: string
  title: string
  description: string
  price: number
  className: string
}

export function CardFood({
  image,
  description,
  price,
  title,
  className,
  slug,
}: CardFoodProps) {
  return (
    <CardContainer className={className}>
      <img src={`http://localhost:3333/foods/files/${image}`} alt="" />
      <Title to={`/food/${slug}`}>
        {title} {'>'}{' '}
      </Title>
      <Description>{description}</Description>
      <Price>{price}</Price>
      <ButtonsContainer>
        <div>
          <button>
            <Minus />
          </button>
          <span>01</span>
          <button>
            <Plus />
          </button>
        </div>
        <button>incluir</button>
      </ButtonsContainer>
    </CardContainer>
  )
}
