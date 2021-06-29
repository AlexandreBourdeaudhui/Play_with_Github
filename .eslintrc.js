module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'airbnb/hooks'],
  env: {
    node: true,
    browser: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['./'],
      },
    },
  },

  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },

  /*
   * Override the base configuration
   * with our rules
   */
  rules: {
    /**
     * Code Style
     */
    'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    'class-methods-use-this': 'off',
    'function-paren-newline': 'off',
    'id-length': 'error',
    'implicit-arrow-linebreak': [0],
    'import/prefer-default-export': 'off',
    'max-len': [
      'error',
      {
        ignorePattern: '\\s*<|\\s*className|^import|^\\s*\\{.*\\},$',
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-console': 'error',
    'no-debugger': 'warn',
    'no-irregular-whitespace': ['error', { skipTemplates: true }],
    'no-mixed-operators': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-restricted-globals': 'error',
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    'no-underscore-dangle': 'off',
    'object-curly-newline': 'off',
    'prefer-destructuring': 'off',

    /**
     * React
     */
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-danger': 'off',
    'react/no-unused-prop-types': 'off',
    'react/static-property-placement': 'off',

    /**
     * a11y
     */
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
  },
};
