import { readdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import eslint from '@eslint/js';
import perfectionist from 'eslint-plugin-perfectionist';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const baseDir = join(_dirname, 'src');
const internalDirectories = readdirSync(baseDir, {
  withFileTypes: true,
}).flatMap((dirent) => (dirent.isDirectory() ? dirent.name : []));

export default [
  eslint.configs.recommended,
  perfectionist.configs['recommended-natural'],
  { ignores: ['build', 'coverage', 'deprecated'] },
  {
    rules: {
      eqeqeq: 'error',
      'perfectionist/sort-imports': [
        'error',
        {
          customGroups: {
            value: {
              react: ['^react$', '^react-.+'],
            },
          },
          groups: [
            'react',
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'object',
            'unknown',
          ],
          internalPattern: [`^(${internalDirectories.join('|')})(/|$)`],
          sortSideEffects: true,
        },
      ],
      'perfectionist/sort-interfaces': 'off',
      'perfectionist/sort-jsx-props': 'off',
      'perfectionist/sort-modules': 'off',
      'perfectionist/sort-objects': 'off',
    },
  },
];
