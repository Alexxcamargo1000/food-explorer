import { createContext, ReactNode, useContext, useState } from 'react'
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
  category?: string
}

interface TypeOfFood {
  id: string
  name: string
}

const FoodContext = createContext({
  getFoods: async (search?: string) => {},
  getTypeFood: async (search?: string) => {},
  typeFood: [] as TypeOfFood[],
  foods: [] as foodIngredientProps[],
  isLoading: true,
})

function FoodProvider({ children }: FoodProviderProps) {
  const [foods, setFoods] = useState<foodIngredientProps[]>([])
  const [typeFood, setTypeFood] = useState<TypeOfFood[]>([])

  const [isLoading, setIsLoading] = useState(false)

  async function getFoods(search = '') {
    setIsLoading(true)
    const response = await api
      .get(`/foods?search=${search}`)
      .catch((err) => {
        console.log(err)
        alert(err.message)
        setIsLoading(false)
      })
      .finally(() => setIsLoading(false))

    if (!response?.data) {
      return setFoods([])
    }

    setFoods(response.data)
  }

  async function getTypeFood() {
    setIsLoading(true)
    const response = await api
      .get('/type-food')
      .catch((err) => {
        alert(err.message)
      })
      .finally(() => setIsLoading(false))

    if (!response?.data) {
      return setTypeFood([])
    }

    setTypeFood(response.data)
  }

  return (
    <FoodContext.Provider
      value={{ foods, getFoods, isLoading, getTypeFood, typeFood }}
    >
      {children}
    </FoodContext.Provider>
  )
}

function useFood() {
  const context = useContext(FoodContext)

  return context
}

export { useFood, FoodProvider }
