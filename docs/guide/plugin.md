# 插件

借助於 [插件 API](../reference/plugin-api.md) ， VuePress 插件可以為你提供各種不同的功能。

## 社區插件

社區用戶創建了很多插件，並將它們發佈到了 [NPM](https://www.npmjs.com/search?q=keywords:vuepress-plugin) 上。 VuePress 團隊也在 [@vuepress](https://www.npmjs.com/search?q=%40vuepress%20keywords%3Aplugin) Scope 下維護了一些官方插件。查看插件本身的文檔可以獲取更詳細的指引。

一般而言，你需要將插件放入到 [plugins](../reference/config.md#plugins) 配置項中來使用它。舉例來說，你可以使用 [@vuepress/plugin-google-analytics](../reference/plugin/google-analytics.md) 來使用 Google Analytics ：

```js
const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics')

module.exports = {
  plugins: [
    googleAnalyticsPlugin({
      id: 'G-XXXXXXXXXX'
    }),
  ],
}
```

::: tip
大部分插件只能使用一次，如果同一個插件被多次使用，那麼只有最後一次會生效。

然而，部分插件是可以被多次使用的（例如 [@vuepress/plugin-container](../reference/plugin/container.md)），你應該查看插件本身的文檔來獲取詳細指引。
:::

## 本地插件

如果你想要使用自己的插件，但是又不想發佈它，你可以創建一個本地插件。

我們推薦你直接將 [配置文件](./configuration.md#配置文件) 作為插件使用，因為 [幾乎所有的插件 API 都可以在配置文件中使用](../reference/config.md#插件-api)，這在絕大多數場景下都更為方便。

但是如果你在配置文件中要做的事情太多了，你可以考慮將它們提取到單獨的插件中，然後在你的配置文件中使用它們：

```js
const myPlugin = require('./path/to/my-plugin.js')

module.exports = {
  plugins: [
    myPlugin(),
  ],
}
```

前往 [深入 > 開發插件](../advanced/plugin.md) 學習如何開發你自己的插件。
