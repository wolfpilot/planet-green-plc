// Types
import { NextPage } from "next"

// Data
import { mockData } from "@data/homepage"

// Components
import Hero from "@components/pages/website/hero/Hero"
import Facts from "@components/pages/website/facts/Facts"
import Plans from "@components/pages/website/plans/Plans"

const HomePage: NextPage = () => (
  <>
    <Hero />
    {mockData?.facts && <Facts {...mockData.facts} />}
    {mockData?.plans && <Plans {...mockData.plans} />}
  </>
)

export default HomePage
