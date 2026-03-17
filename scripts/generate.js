#!/usr/bin/env node

import { execSync } from 'node:child_process';
import { resolve, dirname } from 'node:path';

const rootDir = resolve(dirname(new URL(import.meta.url).pathname), '..');
const generatorDir = resolve(rootDir, 'generator');
const swaggerPath = resolve(rootDir, 'swagger.json');
const srcDir = resolve(rootDir, 'src');

// Install generator dependencies (if needed) and run generation with -o pointing here
execSync('pnpm install', { cwd: generatorDir, stdio: 'inherit' });
execSync(`node scripts/generate.js ${swaggerPath} -o ${srcDir}`, {
  cwd: generatorDir,
  stdio: 'inherit',
});
