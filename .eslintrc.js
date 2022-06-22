module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    'no-duplicate-imports': [1, { includeExports: true }], // 不能重复import
    'react-hooks/rules-of-hooks': 'error',
    'react/react-in-jsx-scope': 0, // 关闭掉页面必须引入React
    '@typescript-eslint/no-explicit-any': 0, // 关闭any
    'react/prop-types': 0,
    'react/display-name': 0,
  },
};
