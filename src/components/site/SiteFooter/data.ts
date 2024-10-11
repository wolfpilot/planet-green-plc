// Constants
import { routes } from "@constants/routes"

export const primaryLinks = [
  {
    name: "About",
    children: [routes.about.vision, routes.about.sustainability],
  },
  {
    name: "Business",
    children: [
      routes.projects,
      routes.suppliers,
      routes.partnerships,
      routes.investors,
    ],
  },
  {
    name: "Technology & Research",
    children: [
      routes.researchAndDevelopment.hub,
      routes.researchAndDevelopment.climate,
    ],
  },
  {
    name: "Knowledge Center",
    children: [routes.knowledge.faq, routes.knowledge.culture, routes.news],
  },
]

export const secondaryLinks = [
  routes.termsAndConditions,
  routes.privacy,
  routes.disclaimer,
  routes.sitemap,
]
