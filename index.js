module.exports = {
  env: {
    mocha: true
  },

  plugins: ['mocha'],

  extends: ['plugin:mocha/recommended'],

  rules: {
    'mocha/no-skipped-tests': 'error',
    'filenames/match-regex': ['error', '^[a-z0-9\\-\\.]+-test$'],
    'import/no-extraneous-dependencies': ['error', {devDependencies: true}]
  }
};
