module.exports = {
    // Other Jest configurations...
    moduleNameMapper: {
      '\\.css$': 'identity-obj-proxy', // Mock CSS imports
    },
    testEnvironment: 'jest-environment-jsdom', // Ensure jsdom is used for tests
  };