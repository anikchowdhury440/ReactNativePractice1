 module.exports = {
    preset: 'react-native',
    modulePathIgnorePatterns: ['extras'],
    setupFiles: [
      '<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js',
    ],
    transformIgnorePatterns: [
      'node_modules/(?!(jest-)?react-native|react-(native|universal|navigation)-(.*)|@react-native-community/(.*)|@react-navigation/(.*)|bs-platform|@rootstrap/redux-tools)',
    ],
    verbose: true,
    "collectCoverage": true,
    "coverageReporters": ["lcov"],
    "coverageDirectory": "test-coverage",
    "coverageThreshold": {
      "global": {
      "branches": 0,
      "functions": 0,
      "lines": 0,
      "statements": 0
      }
     },
     "testRegex": "/*.test.js$",
  };