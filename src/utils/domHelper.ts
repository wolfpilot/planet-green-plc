/**
 * Check if scripts are running on the client or server-side
 */
export const isClient = typeof window !== "undefined"
