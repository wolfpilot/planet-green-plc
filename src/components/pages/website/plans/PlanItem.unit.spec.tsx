import { screen, render } from "@testing-library/react"

// Data
import { mockPlans } from "@data/homepage"

// Components
import PlanItem from "./PlanItem"

describe("PlanItem", () => {
  it("renders correctly", () => {
    expect(1 + 1).toBe(2)

    const { container } = render(<PlanItem {...mockPlans.items[0]} />)

    expect(container).toHaveTextContent("€0.28/kWH")

    expect(
      screen.getByRole("heading", {
        name: "Fixed costs",
      })
    ).toBeInTheDocument()

    expect(
      screen.getByText(
        "Do you prefer having peace of mind? Sign up to our fixed cost plan and receive guaranteed rates (*) for your entire contract length."
      )
    )
  })
})
