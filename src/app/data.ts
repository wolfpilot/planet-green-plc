// Types
import { Props as FactsProps } from "@components/pages/website/facts/types"

const mockFacts: FactsProps = {
  items: [
    {
      value: "250.000+",
      description: `km<sup>2</sup> habitats restored`,
    },
    {
      value: "21.536",
      description: "tons CO<sub>2</sub> emissions saved",
    },
    {
      value: "87",
      description: "innovative patents registered",
    },
  ],
}

export const mockData = {
  facts: mockFacts,
}
