import "intersection-observer"
import { screen, render } from "@testing-library/react"

// Data
import { mockVision } from "@data/homepage"

// Components
import TextMedia from "./TextMedia"

describe("TextMedia", () => {
  it("renders as expected", () => {
    render(<TextMedia {...mockVision} />)

    // Check for title
    expect(
      screen.getByRole("heading", {
        name: /Our Vision/i,
      })
    ).toBeInTheDocument()

    // Check for items
    expect(screen.getAllByRole("listitem").length).toBe(2)

    // Check for images
    expect(
      screen.getByRole("img", { name: mockVision.items[0].image.alt })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("img", { name: mockVision.items[1].image.alt })
    ).toBeInTheDocument()
  })
})
