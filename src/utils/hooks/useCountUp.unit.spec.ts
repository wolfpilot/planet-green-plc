import { renderHook, waitFor } from "@testing-library/react"

import { Props, useCountUp } from "./useCountUp"

const mockProps: Props = {
  isInView: true,
  duration: 1000,
  target: 5000,
}

describe("useCountUp", () => {
  it("returns the expected values", async () => {
    const { result } = renderHook(() => useCountUp({ ...mockProps }))

    // Confirm that the initial returned value is 0
    expect(result.current).toBe(0)

    // Allow the full count duration to run before verifying the final result
    await waitFor(() => expect(result.current).toBe(mockProps.target), {
      timeout: 1500,
    })
  })
})
