module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', process.cwd() + '/src']],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['import', 'import-alias', 'react'],
  rules: {
    // eslint
    eqeqeq: ['error', 'always'],
    'prefer-template': 'error',
    'dot-notation': 'error',
    'no-plusplus': 'error',
    'spaced-comment': ['error', 'always'],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'block',
          'block-like',
          'export',
          'multiline-expression',
          'multiline-const',
          'multiline-let',
          'multiline-var',
          'return',
        ],
      },
      {
        blankLine: 'always',
        prev: [
          'block',
          'block-like',
          'export',
          'multiline-expression',
          'multiline-const',
          'multiline-let',
          'multiline-var',
          'directive',
        ],
        next: '*',
      },
    ],

    // prettier
    'prettier/prettier': 'warn',

    // jsx
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-string-refs': 'error',
    'react/jsx-key': 'error',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-boolean-value': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-array-index-key': 'error',
    'react/self-closing-comp': 'error',

    // import
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/newline-after-import': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'index', 'object', 'type', 'sibling'],
        pathGroups: [
          {
            pattern: 'vue',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'vue-*',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@vue/**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'before',
          }
        ],
        pathGroupsExcludedImportTypes: ['type'],
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: false
        },
      },
    ],

    // impprt-alias
    'import-alias/import-alias': [
      'error',
      {
        relativeDepth: 0,
        aliases: [
          { alias: '@', matcher: '^src' },
        ],
      },
    ],
  },
  overrides: [
    {
      files: '*.vue',
      extends: ['plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
    },
  ],
};
