import bannerHomeImg from '../../assets/bannerHome.png'
import { BannerHome, ContainerHome } from './styles'

import { CardFood } from '../../components/CardFood'
import { SectionFood } from '../../components/SectionFood'
import { Fragment, useEffect, useState } from 'react'
import { api } from '../../services/api'
import { useFood } from '../../hooks/useFood'

interface TypeOfFood {
  id: string
  name: string
}

export function Home() {
  // const [foods, setFoods] = useState<foodIngredientProps[]>([])
  const [typeFood, setTypeFood] = useState<TypeOfFood[]>([])

  const { foods } = useFood()

  async function getTypeFood() {
    const response = await api.get('/type-food')
    setTypeFood(response.data)
  }
  useEffect(() => {
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
          typeFood.map((section) => {
            return (
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
                        />
                      )
                    }
                    return <Fragment key={food.id}></Fragment>
                  })}
              </SectionFood>
            )
          })}
      </ContainerHome>
    </main>
  )
}
