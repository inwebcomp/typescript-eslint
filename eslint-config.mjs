export default {
    root: true,

    env: {
        node: true,
    },

    parserOptions: {
        "parser": "@typescript-eslint/parser",
    },

    rules: {
        "no-console": "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "semi": ["error", "never"],
        "vue/html-indent": ["error", 4, {"baseIndent": 1}],
        "vue/script-indent": ["error", 4, {"baseIndent": 1}],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-var-requires": "off",
        "comma-dangle": ["error", "always-multiline"],
        "vue/multi-word-component-names": "off",
    },

    ignorePatterns: ["/node_modules/*", "node_modules/*"],

    "extends": [
        "plugin:@typescript-eslint/recommended",
        "@vue/typescript/recommended",
        "@vue/eslint-config-typescript/recommended",
        "plugin:vue/vue3-recommended",
    ],

    plugins: [
        "@typescript-eslint",
    ],
}
