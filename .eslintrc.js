module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['react-hooks', '@typescript-eslint'],
  extends: ['airbnb-typescript', 'prettier'],
  // parserOptions: {
  //   ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
  //   sourceType: 'module', // Allows for the use of imports
  //   ecmaFeatures: {
  //     jsx: true, // Allows for the parsing of JSX
  //   },
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  rules: {
    '@typescript-eslint/naming-convention': 'off',
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'comma-dangle': ['error', 'never'],
    'object-curly-newline': ['error', { multiline: true }],
    'object-property-newline': 'error',
    'linebreak-style': 'off',
    'arrow-parens': 'off',
    'padded-blocks': [
      'error',
      {
        classes: 'always',
      },
    ],
    eqeqeq: ['error', 'smart'],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        MemberExpression: 0,
      },
    ],
    'max-len': ['error', 175],
    'new-cap': 'error',
    'no-undef': 'error',
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'no-loop-func': 'warn',
    'accessor-pairs': [
      'error',
      {
        setWithoutGet: true,
      },
    ],
    'dot-notation': [
      'error',
      {
        allowPattern: '^[a-z]+(_[a-z]+)+$|^[a-z]+(-[a-z]+)+$',
      },
    ],
    semi: [
      'error',
      'always',
      {
        omitLastInOneLineBlock: true,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'semi-style': ['error', 'last'],
    'consistent-return': 'error',
    'default-case': 'error',
    'prefer-spread': 'error',
    'no-extra-semi': 'error',
    'no-await-in-loop': 'off',
    'no-plusplus': 'off',
    'no-restricted-globals': 'off',
    'no-bitwise': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'no-restricted-globals': 'off',
    'no-return-assign': 'off',
    'import/prefer-default-export': 'off',
    camelcase: 'off',
    'react/jsx-filename-extension': 'off',
    'react/prefer-stateless-function': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/extensions': 'off',
    'class-methods-use-this': 'off',
    'no-underscore-dangle': 'off',
    complexity: 'off',
    'prefer-template': 'off',
    'spaced-comment': 'off',
    'no-console': 'off',
    'lines-around-directive': 'off',
    'prefer-const': 'off',
    'no-restricted-syntax': 'off',
    strict: 'off',
    curly: 'off',
  },
};
