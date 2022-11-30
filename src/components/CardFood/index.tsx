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
  className: string
}

export function CardFood({ image, className }: CardFoodProps) {
  return (
    <CardContainer className={className}>
      <img src={image} alt="" />
      <Title>Salada Ravanello {'>'} </Title>
      <Description>
        Rabanetes, folhas verdes e molho agridoce salpicados com gergelim
      </Description>
      <Price>R$ 49,97</Price>
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
