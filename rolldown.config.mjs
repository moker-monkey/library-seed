import { defineConfig } from 'rolldown'

export default defineConfig([
  {
    input: 'src/main.ts',
    output: {
      format: 'esm',
      dir: 'dist/typescript',
    },
  },
  {
    input: 'src/main.ts',
    output: {
      format: 'iife',
      dir: 'dist/browser',
    },
  },
  {
    input: 'src/main.ts',
    output: {
      format: 'commonjs',
      dir: 'dist/node',
    },
  },
])