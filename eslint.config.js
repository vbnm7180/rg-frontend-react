import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
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
      // functions
      'default-param-last': 'off', // Disable the base rule as it can report incorrect errors
      '@typescript-eslint/default-param-last': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      'max-params': 'off', // Disable the base rule as it can report incorrect errors
      '@typescript-eslint/max-params': ['error', { max: 3 }],
      '@typescript-eslint/no-confusing-void-expression': [
        'error',
        {
          ignoreArrowShorthand: true,
        },
      ],

      // classes
      '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',
      'no-unused-private-class-members': 'off', // Disable the base rule as it can report incorrect errors
      '@typescript-eslint/no-unused-private-class-members': 'error',
      '@typescript-eslint/prefer-readonly': 'error',

      //enums
      '@typescript-eslint/no-unnecessary-qualifier': 'error',
      '@typescript-eslint/prefer-enum-initializers': 'error',

      // naming
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'enum',
          format: ['PascalCase'],
        },
        {
          selector: 'variable',
          modifiers: ['const'],
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        },
        {
          selector: 'variable',
          modifiers: ['const', 'global'],
          format: ['UPPER_CASE'],
        },
      ],

      // ordering
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: {
            order: 'natural',
            memberTypes: ['signature', 'constructor', 'method', 'field'],
          },
        },
      ],

      // others
      'no-magic-numbers': 'off', // Disable the base rule as it can report incorrect errors
      '@typescript-eslint/no-magic-numbers': [
        'error',
        {
          ignore: [1],
          ignoreArrayIndexes: true,
          ignoreDefaultValues: true,
          ignoreClassFieldInitialValues: true,
          ignoreReadonlyClassProperties: true,
          ignoreEnums: true,
          ignoreNumericLiteralTypes: true,
          ignoreTypeIndexes: true,
        },
      ],
      'no-use-before-define': 'off', // Disable the base rule as it can report incorrect errors
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/no-useless-empty-export': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'error',
    },
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        projectService: true,
      },
    },
  },
  prettierConfig,
]);
