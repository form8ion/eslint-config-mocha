module.exports = {
  overrides: [{
    files: '**/*-test.js',

    env: {mocha: true},

    plugins: ['mocha'],

    extends: ['plugin:mocha/recommended'],

    rules: {
      'mocha/no-skipped-tests': 'error',
      'mocha/no-mocha-arrows': 'off',
      'mocha/no-setup-in-describe': 'off',
      'mocha/no-hooks-for-single-case': 'off',
      'filenames/match-regex': ['error', '^[a-z0-9\\-\\.]+-test$'],
      'import/no-extraneous-dependencies': ['error', {devDependencies: true}]
    }
  }]
};
