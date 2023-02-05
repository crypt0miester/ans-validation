// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import nodeResolve from '@rollup/plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from '@rollup/plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
import json from '@rollup/plugin-json';
import strip from '@rollup/plugin-strip';

const pkg = require('./package.json');

const libraryName = 'ans-validation';

/**
 * Include all of the dependencies here to exclude all node modules from the build
 * Make sure to also include node libraries you're using e.g. 'crypto'
 */

// const external = [...Object.keys(pkg.dependencies || {})];
const external = ['lodash', 'utf8', 'url'];
const outputGlobals = {};


export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ans-validation',
      // the proper extensions will be added
      fileName: 'ans-validation',
      formats: ['cjs', 'umd', 'es'],
    },
    output: [
      {
        file: pkg.main,
        name: libraryName,
        format: 'umd',
        globals: outputGlobals,
        sourcemap: true,
      },
      { file: pkg.module, format: 'es', globals: outputGlobals, sourcemap: true },
    ],
    rollupOptions: {
      input: `src/index.ts`,
    
      // exclude all node modules
      external,
    
      watch: {
        include: 'src/**',
      },
      plugins: [
        builtins(),
        nodeResolve({ mainFields: ['module', 'jsnext:main', 'main', 'browser'] }),
        commonjs({
          exclude: ['node_modules/rollup-plugin-node-globals/**'],
          namedExports: {
            './node_modules/punycode/punycode.js': ['toUnicode'],
            './node_modules/rollup-plugin-node-builtins/src/es6/url.js': ['Url'],
            './node_modules/xregexp/lib/index.js': ['OuterXRegExp'],
          },
        }),
        globals(),
        json(),
        // Compile TypeScript files
        typescript({
          //useTsconfigDeclarationDir: true,
          tsconfig: './tsconfig-build.json',
          //verbosity: 3,
        }),
        // Resolve source maps to the original source
        sourceMaps(),
        strip({
          include: ['**/*.ts']
        })
      ],
    }
      },
  },
)

