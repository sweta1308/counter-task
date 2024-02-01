module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  globals: {
    // TypeScript
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
}
