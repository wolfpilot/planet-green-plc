import { render, screen } from "@testing-library/react"
import Home from "./page"
import "@testing-library/jest-dom"

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />)

    const heading = screen.getByRole("link", {
      name: /learn/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
