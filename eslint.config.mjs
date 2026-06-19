import tsPlugin from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'
import perfectionist from 'eslint-plugin-perfectionist';

export default [
    perfectionist.configs['recommended-natural'],
    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parser: parser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                ecmaVersion: 'latest',
                project: './tsconfig.json',
                sourceType: 'module',
            }
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
        },
        rules: {
            '@typescript-eslint/no-redundant-type-constituents': 'error'
        }
    },
    {
        rules: {
            'perfectionist/sort-imports': 'error',
            'perfectionist/sort-interfaces': ['error'],
            'perfectionist/sort-objects': ['error', {
                type: 'alphabetical',
            }],
        },
    },
    {
        rules: {
            'curly': ['error', 'all'],
            'max-depth': ['error', 3],
            'max-nested-callbacks': ['error', 3],
            'no-console': ['error', { allow: ['error'] }],
            'no-restricted-syntax': [
                'error',
                {
                    message: 'Using a ternary operator for field initialization is prohibited.',
                    selector: 'Property > ConditionalExpression',
                },
            ],
        },
    }
];
