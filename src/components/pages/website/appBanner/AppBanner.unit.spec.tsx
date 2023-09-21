import "intersection-observer"
import { screen, render } from "@testing-library/react"

// Data
import { mockAppBanner } from "@data/homepage"

// Components
import AppBanner from "./AppBanner"

describe("AppBanner", () => {
  it("renders correctly", () => {
    render(<AppBanner {...mockAppBanner} />)

    expect(
      screen.getByRole("heading", {
        name: /Payments and insights on the go with our mobile apps/i,
      })
    ).toBeInTheDocument()

    expect(screen.getByRole("link", { name: /App Store/i })).toBeInTheDocument()

    expect(
      screen.getByRole("link", { name: /Google Play/i })
    ).toBeInTheDocument()
  })
})
