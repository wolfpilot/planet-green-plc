// Types
import { NextPage } from "next"

// Data
import { mockData } from "@data/homepage"

// Components
import Hero from "@components/pages/website/hero/Hero"
import Facts from "@components/pages/website/facts/Facts"
import Plans from "@components/pages/website/plans/Plans"
import Partners from "@components/pages/website/partners/Partners"
import TextMedia from "@components/typography/TextMedia/TextMedia"

const HomePage: NextPage = () => (
  <>
    <Hero />
    {mockData?.facts && <Facts {...mockData.facts} />}
    {mockData?.plans && <Plans {...mockData.plans} />}
    {mockData?.partners && <Partners {...mockData.partners} />}
    {mockData?.vision && <TextMedia {...mockData.vision} />}
  </>
)

export default HomePage
