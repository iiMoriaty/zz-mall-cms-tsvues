module.exports = {
  // plugins: [
  //   [
  //     'import',
  //     {
  //       libraryName: 'element-plus',
  //       customStyleName: (name) => {
  //         return `element-plus/theme-chalk/${name}.css`
  //       }
  //     }
  //   ]
  // ],
  presets: [
    '@vue/cli-plugin-babel/preset',
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript'
  ]
}
