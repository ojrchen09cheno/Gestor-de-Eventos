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
    '@domain/(.*)': '<rootDir>/src/domain/$1',
    '@config/(.*)': '<rootDir>/src/config/$1',
  },
  verbose: false,
  silent: false,
}

module.exports = config;