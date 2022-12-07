import 'keen-slider/keen-slider.min.css'
import { ReactNode } from 'react'
import { CarrosselHome, ContainerCarrossel, SectionHome } from './styles'

interface SectionFoodProps {
  children: ReactNode
  title: string
}

export function SectionFood({ title, children }: SectionFoodProps) {
  return (
    <SectionHome>
      <h3>{title}</h3>
      <ContainerCarrossel>
        <CarrosselHome>{children}</CarrosselHome>
      </ContainerCarrossel>
    </SectionHome>
  )
}
