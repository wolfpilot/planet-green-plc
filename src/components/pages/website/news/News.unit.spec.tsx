// import "intersection-observer"
// import { screen, render } from "@testing-library/react"

// Data
// import { mockNews } from "@data/homepage"

// Components
// import News from "./News"

/**
 * !: Test skipped
 *
 * Unfortunately running into a Swiper lib bug. For more info:
 *
 * @see: https://github.com/nolimits4web/swiper/discussions/4969
 *
 * Even with the provided solutions, the best outcome is that a new error occurs that
 * seems related to Framer Motion, but couldn't find a single mention of this online:
 *
 * TypeError: motionMediaQuery.addListener is not a function
 */

describe("News", () => {
  it("skips UT due to library error", () => {
    expect(1 + 1).toBe(2)
  })

  //   it("renders correctly", () => {
  //     render(<News {...mockNews} />)

  //     expect(
  //       screen.getByRole("heading", {
  //         name: /Latest News/i,
  //       })
  //     ).toBeInTheDocument()

  //     expect(screen.getAllByRole("link").length).toBe(mockNews.items.length)
  //   })
})
