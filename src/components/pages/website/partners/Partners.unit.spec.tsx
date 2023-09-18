import "intersection-observer"
import { screen, render } from "@testing-library/react"

// Data
import { mockPartners } from "@data/homepage"

// Components
import Partners from "./Partners"

describe("Partners", () => {
  it("renders as expected", () => {
    render(<Partners {...mockPartners} />)

    expect(
      screen.getByRole("heading", { name: "Clients & Investors" })
    ).toBeInTheDocument()

    // Check that all links are present
    expect(screen.getAllByRole("link").length).toBe(mockPartners.items.length)

    // Check for partner images AND the divider
    expect(screen.getAllByRole("img").length).toBe(
      mockPartners.items.length + 1
    )
  })
})
