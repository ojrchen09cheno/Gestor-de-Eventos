/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: "./",
  roots: [
    "<rootDir>",
  ],
  modulePaths: [
    "./",
    "<rootDir>/src/",
  ],
  moduleDirectories: [
    "node_modules",
    '<rootDir>'
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '@application/(.*)': '<rootDir>/src/application/$1',
  }
}

module.exports = config;