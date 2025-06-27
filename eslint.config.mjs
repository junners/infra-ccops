import { includeIgnoreFile } from '@eslint/compat';
import oclif from 'eslint-config-oclif';
import prettier from 'eslint-config-prettier';
import { globalIgnores } from 'eslint/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

const gitignorePath = path.resolve(dirname, '.gitignore');

export default [includeIgnoreFile(gitignorePath), globalIgnores(['coverage']), ...oclif, prettier];
