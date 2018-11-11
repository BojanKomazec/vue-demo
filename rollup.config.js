// To import .vue files
import vue from 'rollup-plugin-vue'
// To fix rollup error:
// Error: Unexpected character '�' (Note that you need plugins to import files that are not JavaScript)
// I installed:
// https://www.npmjs.com/package/rollup-plugin-img
// https://github.com/alwaysonlinetxm/rollup-plugin-img
import image from 'rollup-plugin-img'
// To copy files
import copy from 'rollup-copy-plugin'
// To allow using 'import module from "dependency"' in .js files
import resolve from 'rollup-plugin-node-resolve'
// To prevent error (in file bundle.js):
//    Uncaught ReferenceError: process is not defined
// in line:
//    productionTip: process.env.NODE_ENV !== 'production',
// https://github.com/rollup/rollup/issues/805
import replace from 'rollup-plugin-replace'

// used to allow using __dirname in js files
import nodeGlobals from 'rollup-plugin-node-globals'

export default {
  input: 'src/scripts/index.js',
  output: {
    format: 'iife',
    file: 'dist/bundle.js',
    name: 'bundle'
  },
  plugins: [
    replace({
        'process.env.NODE_ENV': JSON.stringify('development')
    }),
    vue(),
    image({
        exclude: 'node_modules/**'
    }),
    copy({
        "src/views/index.html": "dist/index.html",
    }),
    resolve(),
    nodeGlobals(),
  ]
}
