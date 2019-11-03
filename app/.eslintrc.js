module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    useJSXTextNode: true,
  },
  plugins: [
    '@typescript-eslint', 'react', 'jsx-a11y'
  ],
  rules: {
    "semi": [1, "always"],
  },
};
