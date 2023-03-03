import { Minus, Plus, Receipt } from 'phosphor-react'
import {
  ButtonsControllers,
  FoodContainer,
  FoodContent,
  IngredientsContainer,
  PreviewContainer,
  PriceContainer,
} from './styles'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { formatPriceToReal } from '../../utils/format-price-to-real'
import { Loading } from '../../components/Loading'
import { useAuth } from '../../hooks/useAuth'
import { ButtonBack } from '../../components/ButtonBack'

interface FoodProps {
  created_at: string
  description: string
  id: string
  image: string
  name: string
  priceInCents: number
  slug: string
  type_of_food_id: string
  updated_at: string
  user_id: string
}

interface ingredientProps {
  id: string
  image: string
  name: string
}
interface foodWithIngredients {
  food: FoodProps
  ingredients: ingredientProps[]
}

export function Preview() {
  const { slug } = useParams()
  const [isLoading, isSetLoading] = useState(false)
  const [amountFood, setAmountFood] = useState(1)
  const { user } = useAuth()

  const [foodWithIngredient, setFoodWithIngredient] =
    useState<foodWithIngredients>({
      food: {} as FoodProps,
      ingredients: [],
    })

  const { food, ingredients } = foodWithIngredient

  const priceFormatted = formatPriceToReal(food.priceInCents * amountFood)

  function handlePlusAmountFood() {
    setAmountFood((numb) => numb + 1)
  }

  function handleMinusAmountFood() {
    if (amountFood !== 1) {
      setAmountFood((numb) => numb - 1)
    }
  }

  useEffect(() => {
    async function getFood() {
      const response = await api.get(`/foods/${slug}`)

      setFoodWithIngredient(response.data)
      isSetLoading(true)
    }

    getFood()
  }, [slug])
  return (
    <PreviewContainer>
      <ButtonBack />

      {!isLoading ? (
        <Loading />
      ) : (
        <FoodContainer>
          <img
            src={`${api.defaults.baseURL}/foods/files/${food.image}`}
            alt=""
          />

          <FoodContent>
            <h1>{food.name}</h1>
            <p>{food.description}</p>

            <IngredientsContainer>
              {ingredients.map((ingredient) => (
                <li key={ingredient.id}>
                  <span>{ingredient.name}</span>
                </li>
              ))}
            </IngredientsContainer>

            <PriceContainer>
              <div>
                {!user?.admin ? (
                  <ButtonsControllers>
                    <button onClick={handleMinusAmountFood}>
                      <Minus />
                    </button>
                    <span>{String(amountFood).padStart(2, '0')}</span>
                    <button onClick={handlePlusAmountFood}>
                      <Plus />
                    </button>
                  </ButtonsControllers>
                ) : (
                  <></>
                )}

                {user?.admin ? (
                  <Link to={`/edit/${food.slug}`}>Editar prato</Link>
                ) : (
                  <button>
                    <Receipt size={24} /> <span>pedir ∙ {priceFormatted}</span>
                  </button>
                )}
              </div>
            </PriceContainer>
          </FoodContent>
        </FoodContainer>
      )}
    </PreviewContainer>
  )
}
