import { Fragment, useEffect } from 'react'

import { SectionFood } from '../../components/SectionFood'
import bannerHomeImg from '../../assets/bannerHome.png'
import { CardFood } from '../../components/CardFood'
import { BannerHome, ContainerHome } from './styles'
import { useFood } from '../../hooks/useFood'

import { EmptyFood } from '../../components/EmptyFood'
import { Loading } from '../../components/Loading'

export function Home() {
  const { foods, getFoods, isLoading, typeFood, getTypeFood } = useFood()

  useEffect(() => {
    getFoods()
    getTypeFood()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main>
      {isLoading ? (
        <Loading />
      ) : (
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

          {foods.length < 1 && <EmptyFood />}

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
      )}
    </main>
  )
}
