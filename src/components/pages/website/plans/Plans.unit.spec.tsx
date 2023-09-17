import "intersection-observer"
import { screen, render } from "@testing-library/react"

// Data
import { mockPlans } from "@data/homepage"

// Components
import Plans from "./Plans"

describe("Plans", () => {
  it("renders correctly", () => {
    render(<Plans {...mockPlans} />)

    expect(
      screen.getByRole("heading", {
        name: /A plan suited to your exact needs/i,
      })
    )

    expect(screen.getAllByRole("listitem").length).toBe(3)
  })
})
