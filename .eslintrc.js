module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    // "react-app",
    "eslint:recommended"
  ],
  "globals": {},
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
    "flowtype",
    "react-hooks"
  ],
  "rules": {
    "no-unused-vars": "off",
    "semi": [2, "never"],
    "arrow-spacing": [2, { "before": true, "after": true }],
    "func-call-spacing": [2, "never"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-debugger": process.env.NODE_ENV === 'production' ? 2 : 0
  }
};