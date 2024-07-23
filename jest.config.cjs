module.exports = {
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
      },
      
    testEnvironment: 'node',
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)']
}