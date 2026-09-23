import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import {importX} from 'eslint-plugin-import-x';
import vitest from '@vitest/eslint-plugin'
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  {
    ignores: [
      'dist',
      'build',
      '__mocks__',
      '.react-router',
      'node_modules',
      'coverage',
      '.github',
      '.husky',
      '.vscode',
      '.output',
      'out',
      '*.config.ts',
      '*.config.js',
    ]
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    plugins: {
      'import-x': importX,
    },

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },

    rules: {
      ...vitest.configs.recommended.rules,
      'semi': ['error', 'always'],
      'no-extra-semi': 'error',
      'no-unreachable': 'error',
      'no-constant-condition': 'warn',

      'no-unused-vars': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports'
        }
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ],

      'no-console': 'error',

      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: 'return'
        }
      ],
      'import-x/order': [
        'warn',
        {
          'newlines-between': 'always',
          groups: [
            'builtin',
            'internal',
            'external',
            'parent',
            'sibling',
            'index',
            'type'
          ],
          pathGroupsExcludedImportTypes: ['type'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          }
        }
      ],

      'import-x/no-default-export': 'error',

      'no-restricted-syntax': [
        'error',

        {
          selector: 'ExportAllDeclaration',
          message: 'Barrel files (export * from ...) are not allowed.'
        },

        {
          selector: 'ExportNamedDeclaration[source]',
          message: 'Re-exports are not allowed (no barrels).'
        }
      ]
    }
  },

  {
    files: ['**/*.tsx'],
    plugins: {
      'jsx-a11y': jsxA11y
    },
    rules: {
      ...jsxA11y.flatConfigs.recommended.rules
    }
  },

  {
    files: ['**/*.test.ts', '**/*.test.tsx', '**/*.spec.ts', '**/*.spec.tsx'],
    languageOptions: {
      globals: {
        ...jest.environments.globals.jest
      }
    },
    plugins: {
      'vitest': vitest
    },
    rules: {
      ...jest.configs['flat/recommended'].rules,
      'jest/expect-expect': 'error',
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',

      'no-restricted-syntax': [
        'error',
        {
          selector: 'TSAsExpression[typeAnnotation.typeName.name="Mock"]',
          message: 'Use jest.mocked() instead of type casting with "as jest.Mock".'
        }
      ]
    }
  },

  {
    files: ['app/**/*.tsx', 'app/**/*.ts'],
    rules: {
      'import-x/no-default-export': 'off'
    }
  },

  {
    files: ['**/index.ts', '**/index.js'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'Program',
          message: 'Index barrel files are not allowed.'
        }
      ]
    }
  }
];