import "intersection-observer"
import { render, screen } from "@testing-library/react"

// Data
import { mockFacts } from "@data/homepage"

// Components
import FactItem from "./FactItem"

describe("FactItem", () => {
  it("renders the titles correctly as they count up", () => {
    const { container } = render(<FactItem {...mockFacts.items[0]} />)

    /**
     * Since the item descriptions can sometimes contain HTML markup,
     * it's not possible to use the .getByText() method.
     *
     * Instead, we can get the actual text using the .textContent method.
     */
    expect(screen.getByText(/250.000+/)).toBeInTheDocument()
    expect(container).toHaveTextContent("km2 habitats restored")
  })
})
