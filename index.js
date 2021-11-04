const base = require("./lib/base.js");
const next = require("./lib/next.js");
const react = require("./lib/react.js");
const prettier = require("./lib/prettier.js");

module.exports = {
  extends: ["airbnb", "airbnb/hooks", "plugin:prettier/recommended"],
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    ...base,
    ...next,
    ...react,
    ...prettier,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
