import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { ReactNode, useState } from 'react'
import { CarrosselHome, ContainerCarrossel, SectionHome } from './styles'

interface SectionFoodProps {
  children: ReactNode
  title: string
}

export function SectionFood({ title, children }: SectionFoodProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    breakpoints: {
      '(min-width: 600px)': {
        slides: { perView: 2, spacing: 16 },
      },
      '(min-width: 900px)': {
        slides: { perView: 3, spacing: 16 },
      },
      '(min-width: 1284px)': {
        slides: { perView: 3.5, spacing: 16 },
      },
    },
    slides: {
      perView: 1,
      spacing: 16,
    },
  })

  return (
    <SectionHome>
      <h3>{title}</h3>
      <ContainerCarrossel>
        <CarrosselHome ref={sliderRef} className="keen-slider">
          {children}
        </CarrosselHome>
        {loaded && instanceRef.current && (
          <>
            <button
              className="arrow-left"
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            >
              <CaretLeft size={32} weight="bold" />
            </button>

            <button
              className="arrow-right"
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            >
              <CaretRight size={32} weight="bold" />
            </button>
          </>
        )}
      </ContainerCarrossel>
    </SectionHome>
  )
}
