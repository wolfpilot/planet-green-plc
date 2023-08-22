const nextJest = require("next/jest")

const createJestConfig = nextJest({
  dir: "./",
})

const customJestConfig = {
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/.next/**",
    "!**/*.d.ts",
    "!**/__e2e__/**",
    "!**/*.e2e.(test|spec).{ts,tsx}",
  ],
  setupFiles: ["<rootDir>/test/window.setup.js"],
  setupFilesAfterEnv: ["<rootDir>/test/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  testMatch: [
    "**/*.unit.(test|spec).{ts,tsx}",
    "!**/__e2e__/**",
    "!**/*.e2e.(test|spec).{ts,tsx}",
  ],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  modulePathIgnorePatterns: ["<rootDir>/.*/__mocks__"],
}

module.exports = createJestConfig(customJestConfig)
