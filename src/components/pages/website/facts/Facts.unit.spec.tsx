import "intersection-observer"
import { render } from "@testing-library/react"

// Data
import { mockFacts } from "@data/homepage"

// Components
import Facts from "./Facts"

describe("Facts", () => {
  it("renders the titles correctly as they count up", () => {
    const { container } = render(<Facts {...mockFacts} />)

    expect(container.getElementsByTagName("li").length).toBe(3)
  })
})
