---
home: true
lang: zh-TW
title: 首頁
heroImage: /images/hero.png
actions:
  - text: 快速上手
    link: /guide/getting-started.html
    type: primary
  - text: 項目簡介
    link: /guide/
    type: secondary

features:
- title: 簡潔至上
  details: 以 Markdown 為中心的項目結構，以最少的配置幫助你專注於寫作。
- title: Vue驅動
  details: 享受Vue 的開發體驗，可以在Markdown 中使用Vue 組件，又可以使用Vue 來開發自定義主題。
- title: 高性能
  details: VuePress 會為每個頁面預渲染生成靜態的HTML，同時，每個頁面被加載的時候，將作為SPA 運行。
- title: 主題
  details: 提供了一個開箱即用的默認主題。你也可以挑選一個社區主題，或者創建一個你自己的主題。
- title: 插件
  details: 靈活的插件API，使得插件可以為你的站點提供許多即插即用的功能。
- title: 打包工具
  details: 默認的打包工具是Vite ，也同樣支持Webpack 。選一個你喜歡的來使用吧！
footer: MIT Licensed | Copyright © 2018-present
---

### 像數 1, 2, 3 一樣容易

<CodeGroup>
  <CodeGroupItem title="YARN" active>

  ```bash
  # 在你的項目中安裝
  yarn add -D vuepress@next

  # 新建一個 markdown 文件
  echo '# Hello VuePress' > README.md

  # 開始寫作
  yarn vuepress dev

  # 構建靜態文件
  yarn vuepress build
  ```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

  ```bash
  # 在你的項目中安裝
  npm install -D vuepress@next

  # 新建一個 markdown 文件
  echo '# Hello VuePress' > README.md

  # 開始寫作
  npx vuepress dev

  # 構建靜態文件
  npx vuepress build
  ```

  </CodeGroupItem>
</CodeGroup>


```md
<!-- 默认情况下，这里会被保持原样 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```md:no-v-pre
<!-- 这里会被 Vue 编译 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```js:no-v-pre
// 由于 JS 代码高亮，这里不会被正确编译
const onePlusTwoPlusThree = {{ 1 + 2 + 3 }}
```