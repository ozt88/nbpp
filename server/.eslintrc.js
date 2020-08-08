module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  rules: {
    'no-console': 0,
    'no-param-reassign': ['error', { props: false }],
  },
};
