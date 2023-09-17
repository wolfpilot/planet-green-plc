import "intersection-observer"
import { screen, render } from "@testing-library/react"

// Data
import { mockFacts } from "@data/homepage"

// Components
import Facts from "./Facts"

describe("Facts", () => {
  it("renders the titles correctly as they count up", () => {
    render(<Facts {...mockFacts} />)

    expect(screen.getAllByRole("listitem").length).toBe(3)
  })
})
