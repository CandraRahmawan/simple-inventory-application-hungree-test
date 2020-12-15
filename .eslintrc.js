module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'airbnb',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['apps', './src/apps/']],
        extensions: ['.js', '.jsx'],
      },
      'babel-module': {},
    },
  },
  plugins: ['react', 'import', 'jsx-a11y', 'react-hooks', 'prettier'],
  rules: {
    'react/forbid-prop-types': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-array-index-key': 0,
    'object-curly-newline': 0,
    'comma-dangle': 0,
    indent: 0,
    'implicit-arrow-linebreak': 0,
    'function-paren-newline': 0,
    'jsx-a11y/anchor-is-valid': 1,
    'no-param-reassign': 1,
    'prefer-promise-reject-errors': 0,
    'import/prefer-default-export': 1,
    'import/no-cycle': 0,
    'operator-linebreak': 0,
  },
};
