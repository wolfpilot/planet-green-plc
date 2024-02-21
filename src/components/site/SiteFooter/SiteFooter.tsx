// Types
import { Props } from "./types"

// Constants
import { routes } from "@constants/routes"
import { social } from "@constants/social"

// Styles
import * as S from "./styles"

// Components
import SiteFooterTop from "./SiteFooterTop/SiteFooterTop"
import SiteFooterBottom, {
  Props as FooterBottomProps,
} from "./SiteFooterBottom/SiteFooterBottom"

const SiteFooter: React.FC<Props> = () => {
  const currentYear = new Date().getFullYear()
  const copyright = `© ${currentYear} Planet Blue`

  const dataFooterBottom: FooterBottomProps = {
    copyright,
    extraLinks: routes,
    socialLinks: social,
  }

  return (
    <S.Wrapper>
      <SiteFooterTop />
      <SiteFooterBottom {...dataFooterBottom} />
    </S.Wrapper>
  )
}

export default SiteFooter
