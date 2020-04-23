module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/recommended'
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    "linebreak-style": 0, //unix/windows line style
    "no-plusplus": ["off"],
    "quotes" : ["error", "double"],
    "camelcase" : ["error", { ignoreDestructuring: true, properties: "never" }],
    "no-unused-vars": "warn",
    "no-console": ["warn", { allow: ["info", "warn", "error"] }],
    'no-var': ['error'],
  }
}