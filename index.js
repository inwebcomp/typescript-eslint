module.exports = {
    parserOptions: {
        "parser": "@typescript-eslint/parser",
    },

    rules: {
        "no-console": "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",

        // Vue
        "vue/html-indent": ["error", 4, {"baseIndent": 1}],
        "vue/script-indent": ["error", 4, {"baseIndent": 1}],
        "vue/multi-word-component-names": "off",

        // Typescript
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-empty-function": ["warn"],

        // General
        "semi": ["error", "never"],
        "comma-dangle": ["error", "always-multiline"],
        "object-curly-spacing": ["warn", "always", {
            "arraysInObjects": false,
        }],
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
