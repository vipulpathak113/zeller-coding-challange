module.exports = {
    testEnvironment: "jsdom",
    preset: "ts-jest",
    moduleDirectories: ["node_modules"],
    setupFilesAfterEnv: ["@testing-library/jest-dom"],
    testEnvironmentOptions: {
      browsers: ["chrome", "firefox", "safari"],
    },
    verbose: true,
    transform: {
      "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
    },
  coverageThreshold: {
    global: {
      branches: 20,
      functions: 20,
      lines: 20,
      statements: 20,
    },
  },
  }