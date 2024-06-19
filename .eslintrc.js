module.exports = {
  extends: require.resolve('@umijs/max/eslint'),
  plugins: ['react'],
  rules: {
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'import/no-anonymous-default-export': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-invalid-this': 0,
    'react/no-array-index-key': 0,
  },
};
