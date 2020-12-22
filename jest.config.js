const { defaults } = require("jest-config");

module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  moduleNameMapper: {
    "^.+\\.(css)$": "jest-transform-stub",
  },
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },
  preset: "ts-jest",
  transformIgnorePatterns: ["/node_modules"],
  reporters: [
    "default",
    [
      "./node_modules/jest-html-reporter",
      {
        pageTitle: "PD - Test Report",
        outputPath: "build/reports/jest/test_report.html",
      },
    ],
  ],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/**/*.tsx"],
  coverageDirectory: "build/reports/coverage",
  coverageReporters: ["json", "html", "cobertura", "lcov"],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 30,
      lines: 30,
      statements: 30,
    },
  },
  testMatch: ["./**/**/**/**/*.spec.ts?(x)"],
  testPathIgnorePatterns: ["./node_modules/", "./build/"],
};
