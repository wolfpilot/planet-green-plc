// Types
import { Props } from "./types"

// Constants
import { routes } from "@constants/routes"
import { social } from "@constants/social"

// Styles
import * as S from "./styles"

// Components
import Container from "@components/layout/Container/Container"

const SiteFooter: React.FC<Props> = () => {
  const currentYear = new Date().getFullYear()

  return (
    <S.Wrapper>
      <S.Top>
        <S.TopContactInfo></S.TopContactInfo>
        <S.TopLinks></S.TopLinks>
      </S.Top>

      <S.Bottom>
        <Container>
          <S.BottomContent>
            <S.BottomMeta>
              <S.BottomCopyright>
                © {currentYear} Planet Blue
              </S.BottomCopyright>
              <S.BottomExtraLinksGroup>
                {Object.entries(routes).map(
                  ([key, value]) =>
                    value.title &&
                    value.href && (
                      <S.BottomExtraLink key={key} href={value.href}>
                        {value.title}
                      </S.BottomExtraLink>
                    )
                )}
              </S.BottomExtraLinksGroup>
            </S.BottomMeta>

            <S.BottomSocialLinksGroup>
              <S.BottomSocialLink {...social.linkedin}>
                <S.BottomSocialLinkIcon type="linkedin" />
              </S.BottomSocialLink>

              <S.BottomSocialLink {...social.facebook}>
                <S.BottomSocialLinkIcon type="facebook" />
              </S.BottomSocialLink>

              <S.BottomSocialLink {...social.twitter}>
                <S.BottomSocialLinkIcon type="twitter" />
              </S.BottomSocialLink>

              <S.BottomSocialLink {...social.youtube}>
                <S.BottomSocialLinkIcon type="youtube" />
              </S.BottomSocialLink>
            </S.BottomSocialLinksGroup>
          </S.BottomContent>
        </Container>
      </S.Bottom>
    </S.Wrapper>
  )
}

export default SiteFooter
