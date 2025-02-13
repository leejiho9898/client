module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'arrow-body-style': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/no-array-index-key': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
  },
};
