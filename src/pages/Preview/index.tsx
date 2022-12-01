import foodImg from '../../assets/food.png'
import ingredient1 from '../../assets/ingredient-2.png'
import ingredient2 from '../../assets/ingredient-4.png'
import ingredient3 from '../../assets/ingredient-3.png'
import ingredient4 from '../../assets/ingredient-1.png'
import { CaretLeft, Minus, Plus, Receipt } from 'phosphor-react'
import {
  ButtonsControllers,
  FoodContainer,
  FoodContent,
  IngredientsContainer,
  PreviewContainer,
  PriceContainer,
} from './styles'

export function Preview() {
  return (
    <main>
      <PreviewContainer>
        <button>
          <CaretLeft size={32} />
          Voltar
        </button>

        <FoodContainer>
          <img src={foodImg} alt="" />

          <FoodContent>
            <h1>Salada Ravanello</h1>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
            </p>

            <IngredientsContainer>
              <li>
                <img src={ingredient1} alt="" />
                <span>alface</span>
              </li>
              <li>
                <img src={ingredient2} alt="" />
                <span>tomate</span>
              </li>
              <li>
                <img src={ingredient3} alt="" />
                <span>rabanete</span>
              </li>
              <li>
                <img src={ingredient4} alt="" />
                <span>pao naan</span>
              </li>
            </IngredientsContainer>

            <PriceContainer>
              <span className="price">R$ 25,97</span>
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
    </main>
  )
}
