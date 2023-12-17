module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@nuxtjs/eslint-config-typescript",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    indent: [
      'error',
      2
    ],
    'no-trailing-spaces': 0,
    'keyword-spacing': 0,
    'no-unused-vars': 1,
    'no-multiple-empty-lines': 0,
    'space-before-function-paren': 0,
    'eol-last': 0,
    'vue/no-v-html': 0,
    'vue/multi-word-component-names': 0,
    'vue/no-multiple-template-root': 0
  }
}
