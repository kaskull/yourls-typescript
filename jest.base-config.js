module.exports = (name) => ({
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: `./report`,
        outputName: `${name}-junit.xml`
      }
    ]
  ],
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.{spec,e2e}.ts', '!src/**/*.d.ts'],
  coverageReporters: ['lcov', 'text'],
  coverageDirectory: `./report/coverage/jest/${name}`,
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./jest.setup-after-env.js'],
  setupFiles: ['./jest.setup.js'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
      diagnostics: true
    }
  }
});
