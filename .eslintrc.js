module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "prettier/prettier": "error",
  },
  env: {
    node: true,
    browser: true,
    es2020: true,
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      rules: {},
    },
  ],
};
