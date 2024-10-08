// Types
import { Props } from "./types"

// Constants
import { social as socialLinks } from "@constants/social"

// Data
import { primaryLinks, secondaryLinks } from "./data"

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

  // Parse data
  const dataFooterTop = {
    navLinks: primaryLinks,
  }

  const dataFooterBottom: FooterBottomProps = {
    copyright,
    navLinks: secondaryLinks,
    socialLinks,
  }

  return (
    <S.Wrapper>
      <SiteFooterTop {...dataFooterTop} />
      <SiteFooterBottom {...dataFooterBottom} />
    </S.Wrapper>
  )
}

export default SiteFooter
