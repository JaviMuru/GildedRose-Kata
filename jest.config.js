module.exports = {
  moduleFileExtensions: ['ts', 'js', 'json'],
  testRegex: 'spec\\.(ts|js)$',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules'],
  cacheDirectory: '.jest/cache',
  globals: {
    'ts-jest': {
      babelConfig: true,
      diagnostics: true
    }
  },
  resetMocks: true
}
