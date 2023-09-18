// Assets
import PlansImgSrc from "@public/media/photos/homepage-plans.jpg"
import PartnerLogoImgSrc01 from "@public/media/svgs/partners/logo-enel-group.svg"
import PartnerLogoImgSrc02 from "@public/media/svgs/partners/logo-innovation-quarter.svg"
import PartnerLogoImgSrc03 from "@public/media/svgs/partners/logo-siemens-energy.svg"
import PartnerLogoImgSrc04 from "@public/media/svgs/partners/logo-tesla.svg"
import PartnerLogoImgSrc05 from "@public/media/svgs/partners/logo-nextera-energy.svg"
import PartnerLogoImgSrc06 from "@public/media/svgs/partners/logo-general-electric.svg"
import PartnerLogoImgSrc07 from "@public/media/svgs/partners/logo-vestas.svg"
import PartnerLogoImgSrc08 from "@public/media/svgs/partners/logo-wwf.svg"
import PartnerLogoImgSrc09 from "@public/media/svgs/partners/logo-bmw-group.svg"
import PartnerLogoImgSrc10 from "@public/media/svgs/partners/logo-philips.svg"
import PartnerLogoImgSrc11 from "@public/media/svgs/partners/logo-jp-morgan.svg"

// Types
import { Props as FactsProps } from "@components/pages/website/facts/types"
import { Props as PlansProps } from "@components/pages/website/plans/types"
import { Props as PartnersProps } from "@components/pages/website/partners/types"

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
      id: "fix",
      cost: {
        value: 0.28,
        unit: "kWH",
      },
      title: "Fixed costs",
      description:
        "Do you prefer having peace of mind? Sign up to our fixed cost plan and receive guaranteed rates (*) for your entire contract length.",
    },
    {
      id: "eol",
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
      id: "sol",
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

export const mockPartners: PartnersProps = {
  tagline: "They make it “rain”",
  title: "<b>Clients</b> & <b>Investors</b>",
  items: [
    {
      image: {
        src: PartnerLogoImgSrc01,
        alt: "Enel logo",
      },
      link: {
        href: "https://www.enel.com/",
      },
    },
    {
      image: {
        src: PartnerLogoImgSrc02,
        alt: "Innovation Quarter logo",
      },
      link: {
        href: "https://www.innovationquarter.nl/",
      },
    },
    {
      image: {
        src: PartnerLogoImgSrc03,
        alt: "Siemens Energy logo",
      },
      link: {
        href: "https://www.siemens-energy.com/",
      },
    },
    {
      image: {
        src: PartnerLogoImgSrc04,
        alt: "Tesla logo",
      },
      link: {
        href: "https://www.tesla.com/",
      },
    },
    {
      image: {
        src: PartnerLogoImgSrc05,
        alt: "NextEra Energy logo",
      },
      link: {
        href: "https://www.nexteraenergy.com/",
      },
    },
    {
      image: {
        src: PartnerLogoImgSrc06,
        alt: "",
      },
      link: {
        href: "https://www.ge.com/",
      },
    },
    {
      image: {
        src: PartnerLogoImgSrc07,
        alt: "General Electric logo",
      },
      link: {
        href: "https://www.vestas.com/",
      },
    },
    {
      image: {
        src: PartnerLogoImgSrc08,
        alt: "World Wildlife Fund logo",
      },
      link: {
        href: "https://www.worldwildlife.org/",
      },
    },
    {
      image: {
        src: PartnerLogoImgSrc09,
        alt: "BMW Group logo",
      },
      link: {
        href: "https://www.bmwgroup.com/",
      },
    },
    {
      image: {
        src: PartnerLogoImgSrc10,
        alt: "Philips logo",
      },
      link: {
        href: "https://www.philips.com/",
      },
    },
    {
      image: {
        src: PartnerLogoImgSrc11,
        alt: "JP Morgan Chase & Co. logo",
      },
      link: {
        href: "https://www.jpmorganchase.com/",
      },
    },
  ],
}

export const mockData = {
  facts: mockFacts,
  plans: mockPlans,
  partners: mockPartners,
}
