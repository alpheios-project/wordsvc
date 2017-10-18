import resolve from 'rollup-plugin-node-resolve';
export default {
    entry: 'src/controller.js',
    plugins: [
      resolve({
        module: true, // Default: true
        jsnext: true,  // Default: false
        main: true,  // Default: true
        browser: true,  // Default: false
        namedExports: {
        }
      })
    ],
    moduleName: 'AlpheiosWordSvc',
    targets: [
      {
        dest: "dist/alpheios-wordsvc.js",
        format: "umd"
      }
    ]
};
