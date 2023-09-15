// Assets
import PlansImgSrc from "@public/media/photos/homepage-plans.jpg"

// Types
import { Props as FactsProps } from "@components/pages/website/facts/types"
import { Props as PlansProps } from "@components/pages/website/plans/types"

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

export const mockPlans: PlansProps = {
  title: `A plan suited to <b>your</b> exact needs`,
  description: `Choose one of our eco-friendly subscriptions below. Do you require something else? <a href:"mailto:bla@bla.com target="_top">Get in touch</a> with us and we’ll see what we can arrange!`,
  items: [
    {
      cost: {
        value: 0.28,
        unit: "kWH",
      },
      title: "Fixed costs",
      description:
        "Do you prefer having peace of mind? Sign up to our fixed cost plan and receive guaranteed rates (*) for your entire contract length.",
    },
    {
      cost: {
        value: 0.32,
        unit: "kWH",
      },
      title: "Variable cost using wind energy",
      description:
        "Take advantage of our nation-wide network of wind turbines.",
      isHighlighted: true,
    },
    {
      cost: {
        value: 0.19,
        unit: "kWH",
      },
      title: "Variable cost using solar energy",
      description:
        "Would you rather harness the power of the Sun itself? We set you up with your very own solar panels!",
    },
  ],
  footnote: `<b>*NOTE:</b> Due to high variations in energy production costs, fixed plans can only be supplied a maximum of 3 years from the starting date of your contract.`,
  bgImage: {
    src: PlansImgSrc,
    alt: "Photo of wind turbines on a hill on a cloudy day",
  },
}

export const mockData = {
  facts: mockFacts,
  plans: mockPlans,
}
