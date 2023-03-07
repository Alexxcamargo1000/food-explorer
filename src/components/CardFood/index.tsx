import { Minus, Plus } from 'phosphor-react'
import { Link } from 'react-router-dom'
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
}

export function CardFood({
  image,
  description,
  price,
  title,
  slug,
}: CardFoodProps) {
  const priceFormatted = formatPriceToReal(price)
  const { user } = useAuth()

  return (
    <CardContainer>
      {user?.admin ? <ButtonEdit slug={slug} /> : <ButtonFavorite />}
      <Link to={`/food/${slug}`}>
        <img src={`${api.defaults.baseURL}/foods/files/${image}`} alt="" />
      </Link>
      <Title to={`/food/${slug}`}>
        {title} {'>'}
      </Title>
      <Description>{description}</Description>
      <Price>{priceFormatted}</Price>
      {!user?.admin && (
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
      )}
    </CardContainer>
  )
}
