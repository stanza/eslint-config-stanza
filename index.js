module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  ecmaFeatures: {
    defaultParams: true
  },
  rules: {
    'jsx-quotes': ['error', 'prefer-single'],
    // A .jsx extension is not required for files containing jsx.
    'react/jsx-filename-extension': 0
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            extensions: ['.js', '.jsx'],
            modules: ['src', 'shared', 'node_modules']
          }
        }
      }
    }
  }
};
