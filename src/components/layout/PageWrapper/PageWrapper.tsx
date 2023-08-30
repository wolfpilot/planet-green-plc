// Styles
import * as S from "./styles"

export interface Props {
  children?: React.ReactNode
}

const PageWrapper: React.FC<Props> = ({ children }) => (
  <S.Main>{children}</S.Main>
)

export default PageWrapper
