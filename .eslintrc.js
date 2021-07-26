module.exports = {
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  extends: [
    'airbnb-typescript/base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'import/prefer-default-export': 0,
    semi: 'error',
    'linebreak-style': 0,
    'max-len': 0,
    'operator-linebreak': 0,
    'no-useless-constructor': 0,
    'no-param-reassign': 0,
    'import/no-cycle': 0,
    'no-nested-ternary': 0,
    'no-underscore-dangle': 0,
  },
};
