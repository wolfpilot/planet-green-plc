import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

import HomePage from "./page"

describe("Home", () => {
  it("renders a heading", () => {
    render(<HomePage />)

    const heading = screen.getByRole("heading", {
      name: /homepage/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
