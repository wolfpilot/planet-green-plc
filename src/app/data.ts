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

  // TODO: Util to split number up into thousands, millions, every 3 digits
  // TODO: add suffix and/or prefix key for "+"

  // TODO: Alternativ, extrag numarul din string si il dau la prelucrat
  // items: [
  //   {
  //     // value: {
  //     //   ...: 250000,
  //     //   suffix: "+"
  //     // },
  //     value: 250000,
  //     description: `km<sup>2</sup> habitats restored`,
  //   },
  //   {
  //     value: 21536,
  //     description: "tons CO<sub>2</sub> emissions saved",
  //   },
  //   {
  //     value: 87,
  //     description: "innovative patents registered",
  //   },
  // ],
}

export const mockData = {
  facts: mockFacts,
}
