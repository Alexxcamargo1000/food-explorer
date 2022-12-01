import bannerHomeImg from '../../assets/bannerHome.png'
import { BannerHome, ContainerHome } from './styles'
import foodImg from '../../assets/food.png'
import { CardFood } from '../../components/CardFood'
import { SectionFood } from '../../components/SectionFood'

export function Home() {
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

        <SectionFood title="Pratos Principais">
          <CardFood image={foodImg} className="keen-slider__slide" />
          <CardFood image={foodImg} className="keen-slider__slide" />
          <CardFood image={foodImg} className="keen-slider__slide" />
          <CardFood image={foodImg} className="keen-slider__slide" />
          <CardFood image={foodImg} className="keen-slider__slide" />
          <CardFood image={foodImg} className="keen-slider__slide" />
          <CardFood image={foodImg} className="keen-slider__slide" />
        </SectionFood>

        <SectionFood title="Sobremesa">
          <CardFood image={foodImg} className="keen-slider__slide" />
          <CardFood image={foodImg} className="keen-slider__slide" />
          <CardFood image={foodImg} className="keen-slider__slide" />
          <CardFood image={foodImg} className="keen-slider__slide" />
          <CardFood image={foodImg} className="keen-slider__slide" />
          <CardFood image={foodImg} className="keen-slider__slide" />
          <CardFood image={foodImg} className="keen-slider__slide" />
        </SectionFood>

        <SectionFood title="Bebidas">
          <CardFood image={foodImg} className="keen-slider__slide" />
          <CardFood image={foodImg} className="keen-slider__slide" />
          <CardFood image={foodImg} className="keen-slider__slide" />
          <CardFood image={foodImg} className="keen-slider__slide" />
          <CardFood image={foodImg} className="keen-slider__slide" />
          <CardFood image={foodImg} className="keen-slider__slide" />
          <CardFood image={foodImg} className="keen-slider__slide" />
        </SectionFood>
      </ContainerHome>
    </main>
  )
}
