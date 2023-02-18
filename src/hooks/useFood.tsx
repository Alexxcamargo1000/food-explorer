import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../services/api'

interface FoodProviderProps {
  children: ReactNode
}

interface Food {
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
interface Ingredient {
  id: string
  name: string
  image: string
}

interface foodIngredientProps {
  food: Food
  ingredients: Ingredient
}

const FoodContext = createContext({
  getFoods: (search?: string) => {},
  foods: [] as foodIngredientProps[],
})

function FoodProvider({ children }: FoodProviderProps) {
  const [foods, setFoods] = useState<foodIngredientProps[]>([])

  async function getFoods(search = '') {
    const response = await api.get(`/foods?search=${search}`)

    setFoods(response.data)
  }

  useEffect(() => {
    getFoods()
  }, [])

  return (
    <FoodContext.Provider value={{ foods, getFoods }}>
      {children}
    </FoodContext.Provider>
  )
}

function useFood() {
  const context = useContext(FoodContext)

  return context
}

export { useFood, FoodProvider }
