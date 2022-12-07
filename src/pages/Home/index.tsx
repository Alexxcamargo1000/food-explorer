import bannerHomeImg from '../../assets/bannerHome.png'
import { BannerHome, ContainerHome } from './styles'
// import foodImg from '../../assets/food.png'
import { CardFood } from '../../components/CardFood'
import { SectionFood } from '../../components/SectionFood'
import { Fragment, useEffect, useState } from 'react'
import { api } from '../../services/api'

interface TypeOfFood {
  id: string
  name: string
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

export function Home() {
  const [foods, setFoods] = useState<foodIngredientProps[]>([])
  const [typeFood, setTypeFood] = useState<TypeOfFood[]>([])

  async function getFoods() {
    const response = await api.get('/foods')
    setFoods(response.data)
  }

  async function getTypeFood() {
    const response = await api.get('/type-food')
    setTypeFood(response.data)
  }
  useEffect(() => {
    getFoods()
    getTypeFood()
  }, [])

  return (
    <main>
      <ContainerHome>
        <BannerHome>
          <div className="containerImg">
            <img src={bannerHomeImg} alt="" />
          </div>

          <div className="bannerTitle">
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </BannerHome>

        {typeFood &&
          typeFood.map((section) => (
            <SectionFood key={section.id} title={section.name}>
              {foods &&
                foods.map(({ food }) => {
                  if (section.id === food.type_of_food_id) {
                    return (
                      <CardFood
                        key={food.id}
                        image={food.image}
                        description={food.description}
                        price={food.priceInCents}
                        title={food.name}
                        slug={food.slug}
                        className="keen-slider__slide"
                      />
                    )
                  }
                  return <Fragment key={food.id}></Fragment>
                })}
            </SectionFood>
          ))}
      </ContainerHome>
    </main>
  )
}
