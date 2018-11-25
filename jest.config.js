module.exports = {
  preset: 'ts-jest',
  verbose: false,
  testEnvironment: 'node',
  testMatch: null,
  testRegex: '/src/.*test.tsx?$',
  collectCoverageFrom: ['./src/**/*.{ts,tsx}']
};
