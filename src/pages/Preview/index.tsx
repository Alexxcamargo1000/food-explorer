import { CaretLeft, Minus, Plus, Receipt } from 'phosphor-react'
import {
  ButtonsControllers,
  FoodContainer,
  FoodContent,
  IngredientsContainer,
  PreviewContainer,
  PriceContainer,
} from './styles'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { formatPriceToReal } from '../../utils/format-price-to-real'
import { Loading } from '../../components/Loading'

interface foodProps {
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
  food: foodProps
  ingredients: ingredientProps[]
}

export function Preview() {
  const navigate = useNavigate()
  const { slug } = useParams()
  const [isLoading, isSetLoading] = useState(false)

  const [foodWithIngredient, setFoodWithIngredient] =
    useState<foodWithIngredients>({
      food: {} as foodProps,
      ingredients: [],
    })

  const { food, ingredients } = foodWithIngredient

  const priceFormatted = formatPriceToReal(food.priceInCents)

  function handleBackNavigate() {
    navigate(-1)
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
    <main>
      {!isLoading ? (
        <Loading />
      ) : (
        <PreviewContainer>
          <button onClick={handleBackNavigate}>
            <CaretLeft size={32} />
            Voltar
          </button>

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
                    <img
                      src={`${api.defaults.baseURL}/ingredients/files/${ingredient.image}`}
                      alt=""
                    />
                    <span>{ingredient.name}</span>
                  </li>
                ))}
              </IngredientsContainer>

              <PriceContainer>
                <span className="price">{priceFormatted}</span>
                <div>
                  <ButtonsControllers>
                    <button>
                      <Minus />
                    </button>
                    <span>01</span>
                    <button>
                      <Plus />
                    </button>
                  </ButtonsControllers>
                  <button>
                    <Receipt size={32} />
                    incluir
                  </button>
                </div>
              </PriceContainer>
            </FoodContent>
          </FoodContainer>
        </PreviewContainer>
      )}
    </main>
  )
}
