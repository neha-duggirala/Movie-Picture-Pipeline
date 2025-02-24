module.exports = {
  ignorePatterns: ['build/', 'dist/', 'node_modules/'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    // Customize your rules here
    'react/prop-types': process.env.FAIL_LINT ? 2 : 0,
    'react/jsx-uses-vars': 'warn',
  },
};
