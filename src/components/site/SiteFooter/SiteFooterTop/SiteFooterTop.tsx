// Types
import { Route } from "@ts/global"

// Assets
import LogoVerticalSrc from "@public/media/svgs/logo-vertical.svg"

// Contants
import { company } from "@constants/company"

// Styles
import * as S from "./styles"

// Components
import Container from "@components/layout/Container/Container"
import Text from "@components/typography/Text/Text"
import ExternalLink from "@components/link/ExternalLink"
import InternalLink from "@components/link/InternalLink"

export interface NavLinkGroup {
  name: string
  children: Route[]
}

export interface Props {
  navLinks: NavLinkGroup[]
}

const SiteFooterTop: React.FC<Props> = ({ navLinks }) => (
  <S.Wrapper>
    <Container>
      <S.Content>
        <S.InfoGroup>
          <S.Logo
            src={LogoVerticalSrc}
            alt="Planet Blue logo and title stacked vertically"
          />

          <Text>
            {`${company.address.name}
            ${company.address.street}
            ${company.address.postcode}, ${company.address.city}
            ${company.address.country}`}
          </Text>
          <Text>
            {`For email enquiries:`}
            <br />
            <ExternalLink href={`tel:${company.email.default}`}>
              {company.email.default}
            </ExternalLink>
          </Text>
          <Text>
            {`Mon-Fri: `}
            <ExternalLink href={`tel:${company.phone.default}`}>
              {company.phone.default}
            </ExternalLink>
            <br />
            {`Emergencies: `}
            <ExternalLink href={`tel:${company.phone.emergency}`}>
              {company.phone.emergency}
            </ExternalLink>
          </Text>
        </S.InfoGroup>

        <S.InfoGroup>
          <S.NavLinksWrapper>
            {navLinks.map((group, i) => (
              <S.NavLinks key={i}>
                <S.NavLinksHeading>{group.name}</S.NavLinksHeading>

                {group.children.map((item, j) => (
                  <S.NavLinksItem key={j}>
                    <InternalLink href={item.href}>{item.title}</InternalLink>
                  </S.NavLinksItem>
                ))}
              </S.NavLinks>
            ))}
          </S.NavLinksWrapper>
        </S.InfoGroup>
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default SiteFooterTop
