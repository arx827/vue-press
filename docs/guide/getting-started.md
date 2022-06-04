# 快速上手

## 依賴環境

- [Node.js v14+](https://nodejs.org/)
- [Yarn v1 classic](https://classic.yarnpkg.com/zh-Hans/) （可選）

::: tip
- 使用 [pnpm](https://pnpm.io/zh/) 時，你可能需要安裝 `vue` 和 `@vuepress/client` 作為 peer-dependencies ，即 `pnpm add -D vue @vuepress/client@next` 。
- 使用 [yarn 2](https://yarnpkg.com/) 時，你需要在 [`.yarnrc.yml`](https://yarnpkg.com/configuration/yarnrc#nodeLinker) 文件中設置 `nodeLinker: 'node-modules'` 。
:::

## 手動安裝

這一章節會幫助你從頭搭建一個簡單的 VuePress 文檔網站。如果你想在一個現有項目中使用 VuePress 管理文檔，從步驟 3 開始。

- **步驟1**: 創建並進入一個新目錄

```bash
mkdir vuepress-starter
cd vuepress-starter
```

- **步驟2**: 初始化項目

<CodeGroup>
  <CodeGroupItem title="NPM" active>

  ```bash
  git init
  npm init
  ```

  </CodeGroupItem>
  <CodeGroupItem title="YARN">

  ```bash
  git init
  yarn init
  ```

  </CodeGroupItem>
</CodeGroup>


- **步驟3**: 將 VuePress 安裝為本地依賴

<CodeGroup>
  <CodeGroupItem title="NPM" active>

  ```bash
  npm install -D vuepress@next
  ```

  </CodeGroupItem>
  <CodeGroupItem title="YARN">

  ```bash
  yarn add -D vuepress@next
  ```

  </CodeGroupItem>
</CodeGroup>

- **步驟4**: 在 `package.json` 中添加一些 [scripts](https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts)

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

- **步驟5**: 將默認的臨時目錄和緩存目錄添加到 `.gitignore` 文件中

```bash
echo 'node_modules' >> .gitignore
echo '.temp' >> .gitignore
echo '.cache' >> .gitignore
```

- **步驟6**: 創建你的第一篇文檔

```bash
mkdir docs
echo '# Hello VuePress' > docs/README.md
```

- **步驟7**: 在本地啟動服務器來開發你的文檔網站

<CodeGroup>
  <CodeGroupItem title="NPM" active>

  ```bash
  npm run docs:dev
  ```

  </CodeGroupItem>
  <CodeGroupItem title="YARN">

  ```bash
  yarn docs:dev
  ```

  </CodeGroupItem>
</CodeGroup>

VuePress 會在 [http://localhost:8080](http://localhost:8080) 啟動一個熱重載的開發服務器。當你修改你的 Markdown 文件時，瀏覽器中的内容也會自動更新。

現在，你應該已經有了一個簡單可用的 VuePress 文檔網站。接下来，了解一下 VuePress [配置](./configuration.md) 相關的內容。