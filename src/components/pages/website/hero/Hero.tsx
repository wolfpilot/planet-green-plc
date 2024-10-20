// Assets
import HeroImgSrc from "@public/media/photos/homepage-hero.jpg"

// Styles
import * as S from "./styles"

// Components
import Container from "@components/layout/Container/Container"

const Hero: React.FC = () => (
  <S.Wrapper>
    <Container>
      <S.Content>
        <S.Tagline size="L">Say hello to a new revolution</S.Tagline>
        <S.Title level="h1">The future of clean energy</S.Title>

        <S.CtaGroup>
          <S.Cta href="/#plans" theme="primary">
            Get started
          </S.Cta>
          <S.Cta href="/#vision" theme="secondary">
            Discover more
          </S.Cta>
        </S.CtaGroup>
      </S.Content>
    </Container>

    <S.BackgroundImage src={HeroImgSrc} alt="" />
  </S.Wrapper>
)

export default Hero
