module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'off',
    'react/no-unknown-property': [
      'error',
      {
        ignore: [
          'intensity',
          'position',
          'rotation',
          'castShadow',
          'shadow-mapSize',
          'groundColor',
          'object',
          'angle',
          'penumbra',
          'position-y',
          'rotation-y',
          'args',
          'attach',
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['tailwind.config.js', 'postcss.config.js', 'vite.config.js'],
      env: { node: true },
    },
  ],
};
