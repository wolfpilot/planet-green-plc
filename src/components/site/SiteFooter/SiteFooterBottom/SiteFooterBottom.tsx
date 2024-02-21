// Types
import { Routes } from "@ts/global"

// Styles
import * as S from "./styles"

// Components
import Container from "@components/layout/Container/Container"

export interface Props {
  copyright: string
  extraLinks: Routes
  socialLinks: Routes
}

const SiteFooterBottom: React.FC<Props> = ({
  copyright,
  extraLinks,
  socialLinks,
}) => (
  <S.Wrapper>
    <Container>
      <S.Content>
        <S.Meta>
          {copyright && <S.Copyright>{copyright}</S.Copyright>}

          <S.ExtraLinksGroup>
            {Object.entries(extraLinks).map(
              ([key, value]) =>
                value.title &&
                value.href && (
                  <S.ExtraLink key={key} href={value.href}>
                    {value.title}
                  </S.ExtraLink>
                )
            )}
          </S.ExtraLinksGroup>
        </S.Meta>

        <S.SocialLinksGroup>
          <S.SocialLink {...socialLinks.linkedin}>
            <S.SocialLinkIcon type="linkedin" />
          </S.SocialLink>

          <S.SocialLink {...socialLinks.facebook}>
            <S.SocialLinkIcon type="facebook" />
          </S.SocialLink>

          <S.SocialLink {...socialLinks.twitter}>
            <S.SocialLinkIcon type="twitter" />
          </S.SocialLink>

          <S.SocialLink {...socialLinks.youtube}>
            <S.SocialLinkIcon type="youtube" />
          </S.SocialLink>
        </S.SocialLinksGroup>
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default SiteFooterBottom
