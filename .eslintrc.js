/* eslint-disable prettier/prettier */
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "unused-imports"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "react-app",
    "plugin:prettier/recommended",
  ],
  rules: {
    "unused-imports/no-unused-imports": "error",
    // add your custom rules here
  },
};
