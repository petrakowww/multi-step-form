import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';

export default defineConfig([
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        languageOptions: { globals: globals.browser },
    },
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        plugins: { js, prettier },
        extends: ['js/recommended'],
    },
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    { ignores: ['node_modules', 'dist', 'build', 'public'] },
    {
        rules: {
            'react/react-in-jsx-scope': 'off',
            'prettier/prettier': [
                'warn',
                {
                    endOfLine: 'auto',
                },
            ],
        },
    },
]);
