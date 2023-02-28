import 'keen-slider/keen-slider.min.css'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { ReactNode, useRef } from 'react'
import {
  Carrossel,
  ContainerCarrossel,
  ControlsButtons,
  SectionHome,
} from './styles'

interface SectionFoodProps {
  children: ReactNode
  title: string
}

export function SectionFood({ title, children }: SectionFoodProps) {
  const cardWidth = 300
  const carrossel = useRef<HTMLDivElement>(null)

  function handleRightCarrosselMove() {
    if (carrossel.current?.scrollLeft === undefined) {
      return
    }
    carrossel.current.scrollLeft += cardWidth
  }

  function handleLeftCarrosselMove() {
    if (carrossel.current?.scrollLeft === undefined) {
      return
    }
    carrossel.current.scrollLeft -= cardWidth
  }

  return (
    <SectionHome>
      <h3>{title}</h3>

      <ContainerCarrossel>
        <Carrossel ref={carrossel}>{children}</Carrossel>

        <ControlsButtons>
          <button onClick={handleLeftCarrosselMove} className="arrow-left">
            <CaretLeft weight="bold" size={32} />
          </button>
        </ControlsButtons>
        <ControlsButtons>
          <button onClick={handleRightCarrosselMove} className="arrow-right">
            <CaretRight weight="bold" size={32} />
          </button>
        </ControlsButtons>
      </ContainerCarrossel>
    </SectionHome>
  )
}
