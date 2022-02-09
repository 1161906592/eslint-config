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
  plugins: ["import"],
  rules: {
    // eslint
    eqeqeq: ["error", "always"],
    "prefer-template": "error",

    // prettier
    "prettier/prettier": "warn",

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
