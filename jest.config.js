module.exports = {
  preset: 'ts-jest',
  verbose: false,
  testEnvironment: 'node',
  testMatch: null,
  testRegex: '/src/.*test.tsx?$',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
};
