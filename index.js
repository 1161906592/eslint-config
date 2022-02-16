module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["import", "react"],
  rules: {
    // eslint
    eqeqeq: ["error", "always"],
    "prefer-template": "error",
    "dot-notation": "error",

    // prettier
    "prettier/prettier": "warn",

    // jsx
    "react/jsx-curly-brace-presence": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-uses-vars": "error",
    "react/no-string-refs": "error",
    "react/jsx-key": "error",
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-target-blank": "error",
    "react/no-unescaped-entities": "error",
    "react/no-array-index-key": "error",
    "react/self-closing-comp": "error",

    // import
    "import/first": "error",
    "import/no-duplicates": "error",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
        pathGroups: [
          {
            pattern: "vue",
            group: "external",
            position: "before",
          },
          {
            pattern: "@vue/**",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["type"],
      },
    ],
  },
};
