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

    {mockData?.facts && (
      <div id="facts">
        <Facts {...mockData.facts} />
      </div>
    )}

    {mockData?.plans && (
      <div id="plans">
        <Plans {...mockData.plans} />
      </div>
    )}

    {mockData?.partners && (
      <div id="partners">
        <Partners {...mockData.partners} />
      </div>
    )}

    {mockData?.vision && (
      <div id="vision">
        <TextMedia {...mockData.vision} />
      </div>
    )}

    {mockData?.news && (
      <div id="news">
        <News {...mockData.news} />
      </div>
    )}

    {mockData?.appBanner && (
      <div id="apps">
        <AppBanner {...mockData.appBanner} />
      </div>
    )}
  </>
)

export default HomePage
