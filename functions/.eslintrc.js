module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "google", "prettier"],
  plugins: ["prettier"],
  rules: {
    quotes: ["error", "double"],
    indent: ["error", 2],
  },
};
