module.exports = {
  extends: [
    "eslint:recommended"
  ],
  env: {
    es6: true,
    node: true,
  },
  root: true,
  rules: {
    "eqeqeq": "warn",
    "no-console": "warn",
    "no-unused-vars": ["error", {vars: "all", args: "none", ignoreRestSiblings: false}],
    "no-var": "error",
    "prefer-const": "error",
    "valid-jsdoc": "warn",
  }
};
