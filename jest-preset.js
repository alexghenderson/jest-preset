module.exports = {
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.js$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  projects: [
    {
      displayName: 'test',
      testMatch: ['<rootDir>/src/**/*.(test|spec).(js|jsx)'],
      testMatchIgnorePatterns: ['<rootDir>/src/index\.js']
    },
    {
      displayName: 'lint',
      runner: 'jest-runner-eslint',
      testMatch: ['<rootDir>/src/**/*.{js,jsx}'],
    },
  ],
  watchPlugins: ['jest-runner-eslint/watch-fix'],
};
