import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import prettierConfig from 'eslint-config-prettier';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
      rules: {
    // Disable the base rule as it can report incorrect errors
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": "error",
    //todo: delete if needed
    "@typescript-eslint/explicit-function-return-type": "error",
    //todo: delete if needed
    "@typescript-eslint/explicit-module-boundary-types": "error",
        // Disable the base rule as it can report incorrect errors
    "max-params": "off",
    "@typescript-eslint/max-params": ["error", { "max": 3 }],
        "@typescript-eslint/member-ordering": [
      "error",
      { "default": ["signature", "constructor", "method", "field"] },
            {
        "default": {
          "order": 'natural',
        },
      },
    ],
        // Disable the base rule as it can report incorrect errors
    "no-magic-numbers": "off",
    "@typescript-eslint/no-magic-numbers": ["error", {
      "ignore": [1],
      "ignoreArrayIndexes": true,
      "ignoreDefaultValues": true,
      "ignoreClassFieldInitialValues": true,
      "ignoreReadonlyClassProperties": true,
      "ignoreEnums": true,
      "ignoreNumericLiteralTypes": true,
      "ignoreTypeIndexes": true
    }],
    "@typescript-eslint/no-unnecessary-parameter-property-assignment": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
        // Disable the base rule as it can report incorrect errors
    "no-unused-private-class-members": "off",
    "@typescript-eslint/no-unused-private-class-members": "error",
        // Disable the base rule as it can report incorrect errors
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/no-useless-empty-export": "error",
    "@typescript-eslint/prefer-enum-initializers": "error",
    "@typescript-eslint/prefer-readonly": "error",
    "@typescript-eslint/strict-boolean-expressions": "error",
      "@typescript-eslint/naming-convention": [
    "error",
    {
      "selector": "enum",
      "format": ["PascalCase"],
    },
          // 1. Базовое правило: для всех переменных разрешены camelCase и UPPER_CASE
      {
        selector: "variable",
        modifiers: ["const"],
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
      },
      // 2. Основное правило: требовать UPPER_CASE для const на верхнем уровне
      {
        selector: "variable",
        modifiers: ["const", "global"],
        format: ["UPPER_CASE"],
      },
  ]
  },
    languageOptions: {
      globals: globals.browser,
          parserOptions: {
      projectService: true,
    },
    },
  },
  prettierConfig,
])
