// Types
import { Route } from "@ts/global"

// Styles
import * as S from "./styles"

// Components
import Container from "@components/layout/Container/Container"

export interface Props {
  copyright: string
  navLinks: Route[]
  socialLinks: Record<string, Route>
}

const SiteFooterBottom: React.FC<Props> = ({
  copyright,
  navLinks,
  socialLinks,
}) => (
  <S.Wrapper>
    <Container>
      <S.Content>
        <S.Meta>
          {copyright && <S.Copyright>{copyright}</S.Copyright>}

          <S.NavLinks>
            {Object.entries(navLinks).map(
              ([key, value]) =>
                value.title &&
                value.href && (
                  <S.NavLinksItem key={key}>
                    <S.NavLinksItemAnchor href={value.href}>
                      {value.title}
                    </S.NavLinksItemAnchor>
                  </S.NavLinksItem>
                )
            )}
          </S.NavLinks>
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
