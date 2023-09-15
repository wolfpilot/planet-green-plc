// Types
import { Props as FactsProps } from "@components/pages/website/facts/types"

export const mockFacts: FactsProps = {
  items: [
    {
      amount: {
        value: 250000,
        suffix: "+",
      },
      description: `km<sup>2</sup> habitats restored`,
    },
    {
      amount: {
        value: 21536,
      },
      description: "tons CO<sub>2</sub> emissions saved",
    },
    {
      amount: {
        value: 87,
      },
      description: "patents registered",
    },
  ],
}

export const mockData = {
  facts: mockFacts,
}
