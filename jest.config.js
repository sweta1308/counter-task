module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    // TypeScript
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
}
