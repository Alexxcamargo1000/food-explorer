import { Minus, Plus } from 'phosphor-react'
import { useAuth } from '../../hooks/useAuth'
import { api } from '../../services/api'
import { formatPriceToReal } from '../../utils/format-price-to-real'
import { ButtonEdit } from '../ButtonEdit'
import { ButtonFavorite } from '../ButtonFavorite'
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
  id: string
}

export function CardFood({
  image,
  description,
  price,
  title,
  slug,
  id,
}: CardFoodProps) {
  const priceFormatted = formatPriceToReal(price)
  const { user } = useAuth()

  return (
    <CardContainer>
      {user?.admin ? <ButtonEdit slug={slug} /> : <ButtonFavorite />}

      <img src={`${api.defaults.baseURL}/foods/files/${image}`} alt="" />
      <Title to={`/food/${slug}`}>
        {title} {'>'}{' '}
      </Title>
      <Description>{description}</Description>
      <Price>{priceFormatted}</Price>
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
