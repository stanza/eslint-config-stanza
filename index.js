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
    'react/jsx-filename-extension': 0,
    // allow _id underscore-dangle
    'no-underscore-dangle': ['error', {
      allowAfterThis: false,
      allow: ['_id']
    }],
    // enforcing stateless components also implies refactoring a
    // component entirely if we want to switch it to a non functional one
    // enforcing component structure consistency seems better at this point
    // -> also no performance gains for now (actually the opposite)
    'react/prefer-stateless-function': 0,
    // React sub renders should go below the main render
    // why? you read code from top to bottom
    'react/sort-comp': ['error', {
      'order': [
        'static-methods',
        'lifecycle',
        '/^on.+$/',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'everything-else',
        'render',
        '/^render.+$/'
      ],
    }],
    // this was colliding with the sub render functions
    // can be set back when it supports regex entries in exceptMethods
    'class-methods-use-this': 0,
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
