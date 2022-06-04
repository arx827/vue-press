# 配置

## 配置文件

如果沒有任何配置，你的 VuePress 站點僅有一些最基礎的功能。為了更好地自定義你的網站，讓我們首先在你的文檔目錄下創建一個 `.vuepress` 目錄，所有 VuePress 相關的文件都將會被放在這裡。你的項目結構可能是這樣：

```
├─ docs
│  ├─ .vuepress
│  │  └─ config.js
│  └─ README.md
├─ .gitignore
└─ package.json
```

VuePress 站點的基本配置文件是 `.vuepress/config.js` ，但也同樣支持 TypeScript 配置文件。你可以使用 `.vuepress/config.ts` 來得到更好的類型提示。

具體而言，我們對於配置文件的路徑有著約定（按照優先順序）：

- 當前工作目錄 `cwd` 下：
  - `vuepress.config.ts`
  - `vuepress.config.js`
  - `vuepress.config.cjs`
- 源文件目錄 `sourceDir` 下：
  - `.vuepress/config.ts`
  - `.vuepress/config.js`
  - `.vuepress/config.cjs`

你也可以通過 [命令行接口](./cli.md) 的 `--config` 選項來指定配置文件：

```sh
vuepress dev docs --config my-config.js
```

一個基礎的配置文件是這樣的：

<CodeGroup>
  <CodeGroupItem title="JS" active>

  ```js
  module.exports = {
    lang: 'zh-CN',
    title: '你好， VuePress ！',
    description: '這是我的第一個 VuePress 站點',
  }
  ```

  </CodeGroupItem>

  <CodeGroupItem title="TS">

  ```ts
  import { defineUserConfig } from 'vuepress'

  export default defineUserConfig({
    lang: 'zh-CN',
    title: '你好， VuePress ！',
    description: '這是我的第一個 VuePress 站點',
  })
  ```

  </CodeGroupItem>
</CodeGroup>

::: tip
前往 [配置參考](../reference/config.md) 查看所有 VuePress 配置。
:::

## 客戶端配置文件

在大多數情况下，配置文件已經足夠幫助你配置好你的 VuePress 站點。不過，有些時候用戶們可能希望直接添加一些客戶端代碼。 VuePress 通過客戶端配置文件來支持這種需求：

```
├─ docs
│  ├─ .vuepress
│  │  ├─ client.js   <--- 客戶端配置文件
│  │  └─ config.js   <--- 配置文件
│  └─ README.md
├─ .gitignore
└─ package.json
```

同樣的，我們也有關於客戶端配置文件的路徑約定（按照優先順序）：

- 當前工作目錄 `cwd` 下：
  - `vuepress.client.ts`
  - `vuepress.client.js`
  - `vuepress.client.mjs`
- 源文件目錄 `sourceDir` 下：
  - `.vuepress/client.ts`
  - `.vuepress/client.js`
  - `.vuepress/client.mjs`

需要注意的是，客戶端配置文件需要使用 ESM 格式：

```ts
import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {},
  setup() {},
  rootComponents: [],
})
```

::: tip
和配置文件不同，客戶端配置文件不能通過命令行接口的選項來指定。

可以前往 [深入 > Cookbook > 客戶端配置的使用方法](../advanced/cookbook/usage-of-client-config.md) 來了解更多訊息。
:::
