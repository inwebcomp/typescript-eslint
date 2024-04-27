module.exports = {
    parserOptions: {
        "parser": "@typescript-eslint/parser",
    },

    rules: {
        "no-console": "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",

        // Vue
        "vue/html-indent": ["error", 4],
        "vue/script-indent": ["error", 4, { "switchCase": 1 }],
        "vue/multi-word-component-names": "off",
        "vue/max-attributes-per-line": ["warn", {
            "singleline": 2,
            "multiline": 1,
        }],
        "vue/padding-line-between-blocks": ["error", "always"],
        "vue/new-line-between-multi-line-property": ["error", {
            "minLineOfMultilineProperty": 2
        }],

        "vue/block-lang": ["warn", { "script": { "lang": "ts" } }],
        "vue/block-tag-newline": ["error", { "singleline": "always", "multiline": "always" }],
        "vue/component-name-in-template-casing": ["error"],
        "vue/custom-event-name-casing": ["warn"],
        "vue/define-emits-declaration": ["warn"],
        "vue/define-props-declaration": ["error"],
        "vue/match-component-file-name": ["error", {
            "extensions": ["vue"],
            "shouldMatchCase": true,
        }],
        "vue/define-macros-order": ["warn", {
            "order": ["defineOptions", "defineProps", "defineEmits", "defineSlots"]
        }],
        "vue/no-duplicate-attr-inheritance": ["error"],
        "vue/no-empty-component-block": ["error"],
        // "vue/prefer-define-options": ["warn"],
        "vue/prefer-separate-static-class": ["warn"],
        "vue/prefer-true-attribute-shorthand": ["warn"],
        "vue/require-macro-variable-name": ["error"],
        "vue/require-typed-object-prop": ["error"],
        "vue/valid-define-options": ["error"],
        // "vue/v-on-handler-style": ["error"], // @todo Does not work properly. Check it later

        // Typescript
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-var-requires": "off",
        "no-empty-function": ["warn"],
        "@typescript-eslint/ban-ts-comment": ["off"],
        "@typescript-eslint/explicit-member-accessibility": ["warn"],
        '@typescript-eslint/consistent-type-imports': 'error',
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/type-annotation-spacing": "error",

        // General
        "semi": ["error", "never"],
        "comma-dangle": ["error", "always-multiline"],
        "object-curly-spacing": ["warn", "always", { "arraysInObjects": false }],
        "keyword-spacing": ["error", { before: true, after: true }],
        "block-spacing": ["error"],
        "arrow-spacing": ["error"],
        "template-curly-spacing": ["error"],
        "computed-property-spacing": ["error", "never"],
        "key-spacing": ["error"],
        "comma-spacing": ["error", { "before": false, "after": true }],
        "space-infix-ops": ["error"],
        "space-in-parens": ["error", "never"],
        "padding-line-between-statements": [
            "error",
            { "blankLine": "never", "prev": "block", "next": "*" },
            { "blankLine": "always", "prev": "function", "next": "*" },
            { "blankLine": "never", "prev": "block", "next": "if" },
            { "blankLine": "always", "prev": "*", "next": "return" },
            { "blankLine": "always", "prev": "function", "next": "return" },
            { "blankLine": "always", "prev": "function", "next": "function" },
            { "blankLine": "always", "prev": "*", "next": "if" },
            { "blankLine": "never", "prev": "return", "next": "*" },
        ],
        "padded-blocks": ["error", "never"],
        "func-call-spacing": ["error", "never"],
        "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
        "lines-between-class-members": ["error", "always", {
            exceptAfterSingleLine: true,
        }],
        "space-before-function-paren": ["error", {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "always"
        }],
        "space-before-blocks": ["error", "always"],
        "quotes": ["warn", "single", { avoidEscape: true, allowTemplateLiterals: true }],


        // Plugins
        "import-newlines/enforce": ["error", {
            "items": 4,
            "max-len": 120,
            "semi": false,
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
        "import-newlines",
    ],
}