module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "google", "prettier"],
  plugins: ["prettier"],
  parser: "babel-eslint",
  rules: {
    quotes: ["error", "double"],
    indent: ["error", 2],
  },
};
