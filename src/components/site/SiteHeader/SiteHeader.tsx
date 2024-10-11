// Assets
import LogoHorizontalSrc from "@public/media/svgs/logo-horizontal.svg"

// Constants
import { routes } from "@constants/routes"
import { navLinks } from "./data"

// Styling
import * as S from "./styles"

// Components
import Container from "@components/layout/Container/Container"

const SiteHeader: React.FC = () => (
  <S.Wrapper>
    <Container>
      <S.Content>
        <S.LogoLink href="/">
          <S.Logo
            src={LogoHorizontalSrc}
            alt="Planet Blue logo and title stacked horizontally"
          />
        </S.LogoLink>

        <S.Links>
          {navLinks.map((item, index) => (
            <S.LinksItem key={index} variant="primary">
              <S.LinksItemAnchor href={item.href} theme="primary">
                {item.title}
              </S.LinksItemAnchor>
            </S.LinksItem>
          ))}

          <S.LinksItem variant="secondary">
            <S.LinksItemAnchor
              href={routes.account.overview.href}
              theme="secondary"
            >
              My account
            </S.LinksItemAnchor>
          </S.LinksItem>
        </S.Links>
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default SiteHeader
