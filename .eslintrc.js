module.exports = {
    env: {
        browser: true
      },
    plugins: ["vue"],
    extends: [
      // add more generic rulesets here, such as:
      'eslint:recommended',
      'plugin:vue/recommended'
    ],
    rules: {
      // override/add rules settings here, such as:
      // 'vue/no-unused-vars': 'error'
    },
    //useEslintrc : false,
    parser: 'vue-eslint-parser',
    parserOptions: { 
        ecmaVersion: 2016,
        "sourceType": "module",
        "ecmaFeatures": {
            "impliedStrict": true
        }
     }
  }