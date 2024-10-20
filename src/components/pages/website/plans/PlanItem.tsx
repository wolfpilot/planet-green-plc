// Types
import { Item as Props } from "./types"

// Styles
import * as S from "./styles"

// Animation
import { itemMotionProps } from "./animation"

const PlanItem: React.FC<Props> = ({
  id,
  cost,
  title,
  description,
  isHighlighted = false,
}) => {
  if (!cost?.value || !cost?.unit || !title || !description) return null

  return (
    <S.Item {...itemMotionProps} $isHighlighted={isHighlighted}>
      {isHighlighted && <S.ItemBanner>most chosen</S.ItemBanner>}

      <S.ItemLink href={`/subscribe?plan=${id}`} $isHighlighted={isHighlighted}>
        <S.ItemCost>
          <S.ItemCostValue>€{cost.value}</S.ItemCostValue>
          <S.ItemCostUnit>/{cost.unit}</S.ItemCostUnit>
        </S.ItemCost>

        <S.ItemTitle level="h3">{title}</S.ItemTitle>
        <S.ItemDescription size="M">{description}</S.ItemDescription>
      </S.ItemLink>
    </S.Item>
  )
}

export default PlanItem
