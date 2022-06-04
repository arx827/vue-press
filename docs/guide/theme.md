# 主題

VuePress 主題為你提供了佈局、樣式和其他功能，幫助你專注於 Markdown 內容的寫作。

## 默認主題

VuePress 有一個開箱即用的默認主題，正使用在你當前正在瀏覽的文檔網站上。

如果你不指定要使用的主題，那麼就會自動使用默認主題。

為了配置默認主題，你需要在你的配置文件中通過 [theme](../reference/config.md#theme) 配置項來使用它：

```js
const { defaultTheme } = require('vuepress')

module.exports = {
  theme: defaultTheme({
    // 默認主題配置
    navbar: [
      {
        text: '首頁',
        link: '/',
      },
    ],
  }),
}
```

默認主題為文檔網站提供了基礎且實用的功能，你可以前往 [默認主題配置參考](../reference/default-theme/config.md) 獲取全部的配置列表。

然而，你可能覺得默認主題不夠出色，又或者你不想搭建一個文檔網站，而是一個其他類型的網站，比如博客。此時，你可以嘗試使用社區主題或者創建本地主題。

## 社區主題

社區用戶創建了很多主題，並將它们發佈到了 [NPM](https://www.npmjs.com/search?q=keywords:vuepress-theme) 上。查看主題本身的文檔可以獲取更詳细的指引。

## 本地主題

如果你想要使用自己的自定義主題，但是又不想發佈它，你可以創建一個本地主題。前往 [深入 > 開發主題](../advanced/theme.md) 學習如何開發你自己的主題。
