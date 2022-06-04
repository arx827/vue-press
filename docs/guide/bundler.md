# 打包工具

VuePress 一直以來都在使用 [Webpack](https://webpack.js.org/) 作為打包工具來進行網站的開發和構建。從 VuePress v2 開始，我們還支持使用其他的打包工具，並且現在使用 [Vite](https://vitejs.dev/) 作為默認的打包工具。當然，你仍然可以選擇使用 Webpack 。 

## 選擇一個打包工具

在使用 [vuepress](https://www.npmjs.com/package/vuepress) 包時，會自動安裝和使用 Vite 打包工具。

如果你想改為使用 Webpack 打包工具，那麼你可以切換為 [vuepress-webpack](https://www.npmjs.com/package/vuepress-webpack) 包：

<CodeGroup>
  <CodeGroupItem title="NPM" active>

  ```bash
  npm uninstall vuepress
  npm install -D vuepress-webpack@next
  ```

  </CodeGroupItem>
  <CodeGroupItem title="YARN">

  ```bash
  yarn remove vuepress
  yarn add -D vuepress-webpack@next
  ```

  </CodeGroupItem>
</CodeGroup>

## 配置打包工具

一般情況下，你不要任何額外配置就可以使用打包工具，因為我們已经幫你配置好了它們。

通過 [bundler](../reference/config.md#bundler) 配置項，你可以對打包工具進行進階配置：

```js
const { viteBundler } = require('vuepress')
// const { webpackBundler } = require('vuepress-webpack')

module.exports = {
  bundler: viteBundler({
    vuePluginOptions: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag === 'center',
        },
      },
    },
  }),
}
```

你可以參考 [打包工具 > Vite](../reference/bundler/vite.md) 和 [打包工具 > Webpack](../reference/bundler/webpack.md) 來查看對應打包工具的所有配置項。
