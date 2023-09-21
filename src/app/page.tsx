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
import News from "@components/pages/website/news/News"
import AppBanner from "@components/pages/website/appBanner/AppBanner"

const HomePage: NextPage = () => (
  <>
    <Hero />
    {mockData?.facts && <Facts {...mockData.facts} />}
    {mockData?.plans && <Plans {...mockData.plans} />}
    {mockData?.partners && <Partners {...mockData.partners} />}
    {mockData?.vision && <TextMedia {...mockData.vision} />}
    {mockData?.news && <News {...mockData.news} />}
    {mockData?.appBanner && <AppBanner {...mockData.appBanner} />}
  </>
)

export default HomePage
