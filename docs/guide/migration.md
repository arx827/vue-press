# 從 v1 遷移

::: warning
VuePress v1 的插件和主題與 VuePress v2 不兼容。你需要將它們升級到與 v2 對應的版本。
:::

VuePress v2 的一些主要改動和優化：

- VuePress v2 現在使用 Vue 3 ，因此你要保證你的組件和其他客戶端文件是適用於 Vue 3 的。
- VuePress v2 是使用 TypeScript 開發的，因此它現在提供了更好的類型支持。我們強烈推薦你使用 TypeScript 來開發插件和主題。 VuePress 配置文件也同樣支持 TypeScript ，你可以直接使用 `.vuepress/config.ts` 。
- VuePress v2 支持使用 Webpack 和 Vite 作為打包工具。現在默認的打包工具是 Vite ，但你仍然可以選擇使用 Webpack 。你甚至可以在開發模式使用 Vite 來獲取更好的開發體驗，而在構建模式使用 Webpack 來獲取更好的瀏覽器兼容性。

VuePress v2 的核心思想和流程是和 v1 一致的，但 v2 API 經過了重新設計，更加標準化。因此在將現有的 v1 項目遷移至 v2 時，你很可能會遇到一些 Breaking Changes 。本指南將幫助你將 v1 的站點 / 插件 / 主題遷移至 v2 。

- 如果你是一個普通用戶，你需要閱讀 [給用戶](#給用戶) 的指南。
- 如果你是一個插件作者，你需要閱讀 [給插件作者](#給插件作者) 的指南。
- 如果你是一個主題作者，你需要閱讀 [給主題作者](#給主題作者) 的指南。

## 給用戶

### 用戶配置變更

  #### theme

  不再支持通過字符串使用主題。需要直接引入主題。

  ```diff
  - module.exports = {
  -   theme: '@vuepress/theme-default',
  -   themeConfig: {
  -     // 默認主題配置
  -   },
  - }

  + const { defaultTheme } = require('@vuepress/theme-default')
  + module.exports = {
  +   theme: defaultTheme({
  +     // 默認主題配置
  +   })
  + }
  ```

#### themeConfig

移除。直接向主題傳入配置。

#### plugins

不再支持通過字符串使用插件。需要直接引入插件。

```diff
- module.exports = {
-   plugins: [
-     [
-       '@vuepress/plugin-google-analytics',
-       {
-         id: 'G-XXXXXXXXXX',
-       },
-     ],
-   ],
- }

+ const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics')
+ module.exports = {
+   plugins: [
+     googleAnalyticsPlugin({
+         id: 'G-XXXXXXXXXX',
+     }),
+   ],
+ }
```

#### shouldPrefetch

默認值從 `() => true` 更改為 `true` 。

#### extraWatchFiles

移除。

你可以手動在 [onWatched](../reference/plugin-api.md#onwatched) Hook 中監聽文件變化。

#### patterns

重命名為 `pagePatterns` 。

#### markdown.lineNumbers

移動至 [markdown.code.lineNumbers](../reference/config.md#markdown-code-linenumbers) 。

默認值從 `false` 更改為 `true` 。

#### markdown.pageSuffix

移除。

#### markdown.externalLinks

移動至 [markdown.links.externalAttrs](../reference/config.md#markdown-links) 。

#### markdown.toc

有改動。

參考 [配置 > markdown.toc](../reference/config.md#markdown-toc)

#### markdown.plugins

移除。

在 [extendsMarkdown](../reference/plugin-api.md#extendsmarkdown) Hook 中使用 markdown-it 插件。

#### markdown.extendMarkdown

移除。

使用 [extendsMarkdown](../reference/plugin-api.md#extendsmarkdown) Hook 。

#### markdown.extractHeaders

有修改。

參考 [配置 > markdown.extractHeaders](../reference/config.md#markdown-extractheaders)

#### Webpack 相關配置

所有 Webpack 相關的配置都移動至 `@vuepress/bundler-webpack` 的配置項中，包括：

- `postcss`
- `stylus`
- `scss`
- `sass`
- `less`
- `chainWebpack`
- `configureWebpack`
- `evergreen`：默認值從 `false` 更改為 `true`

```diff
- module.exports = {
-   sass: { /* ... */ },
- }

+ const { webpackBundler } = require('@vuepress/bundler-webpack')
+ module.exports = {
+   bundler: webpackBundler({
+     sass: { /* ... */ },
+   }),
+ }
```

請參考 [Guide > Bundler](./bundler.md) 。

### Frontmatter 變更

#### meta

移除。

改為使用 [head](../reference/frontmatter.md#head) 。例如：

```yaml
head:
  - - meta
    - name: foo
      content: bar
  - - link
    - rel: canonical
      href: foobar
  - - script
    - {}
    - console.log('hello from frontmatter');
```

和以下結構相同：

```js
// .vuepress/config.js
module.exports = {
  // ...
  head: [
    ['meta', { name: 'foo', content: 'bar' }],
    ['link', { rel: 'canonical', href: 'foobar' }],
    ['script', {}, `console.log('hello from frontmatter');`],
  ],
  // ...
}
```

### 永久鏈接 Patterns 變更

- `:i_month`：移除
- `:i_day`：移除
- `:minutes`：移除（v1 文檔中未列出）
- `:seconds`：移除（v1 文檔中未列出）
- `:regular`：重命名為 `:raw`

參考 [Frontmatter > permalinkPattern](../reference/frontmatter.md#permalinkpattern) 。

### 調色板系統變更

VuePress v1 的 Stylus 調色板系統 （即 `styles/palette.styl` 和 `styles/index.styl`） 不再由 VuePress Core 默認提供支持。

調色板系統提取到了 [@vuepress/plugin-palette](../reference/plugin/palette.md) 當中。

主題作者可以使用自己的方式來為用戶提供自定義樣式的能力，而不必被限制在 Stylus 當中。

如果你使用的是默認主題，那麼調色板系統仍然存在，但改為使用 SASS ，並且大部分變量都遷移為 CSS 變量。參考 [默認主題 > 樣式](../reference/default-theme/styles.md) 。

### 約定文件變更

#### .vuepress/enhanceApp.js

重命名為 `.vuepress/client.{js,ts}` ，使用方法也有改動。

參考 [深入 > Cookbook > 客戶端配置的使用方法](../advanced/cookbook/usage-of-client-config.md) 。

#### .vuepress/components/

在該目錄下的文件不會被自動註冊為 Vue 組件。

你需要使用 [@vuepress/plugin-register-components](../reference/plugin/register-components.md) ，或者在 `.vuepress/client.{js,ts}` 中手動註冊你的組件。

#### .vuepress/theme/

即使該目錄存在，也不會被隱式默認當作本地主題目錄。

你需要在 [theme](../reference/config.md#theme) 配置項中顯式引入並使用本地主題。

### Markdown 插槽變更

Markdown 插槽不再被支持。

### CLI 變更

#### eject 命令

移除。

#### cache 選項

- `-c, --cache [cache]`：修改為 `--cache <cache>` ，意味著 `-c` 不再是 `cache` 選項的縮寫，並且 `cache` 選項的值不再是可選的。
- `--no-cache`：重命名為 `--clean-cache` 。

### 默認主題變更

#### 內置組件

- `<CodeGroup />` 和 `<CodeBlock />` 重命名為 `<CodeGroup />` 和 `<CodeGroupItem />`
- `<Badge />`
  - `$badgeErrorColor` 調色板變量重命名為 `$badgeDangerColor`
  - `type` Prop 現在只接受 `tip` 、 `warning` 和 `danger`

#### 調色板系統

默認主題的調色板系統遷移為 SASS 和 CSS 變量。

參考 [默認主題 > 樣式](../reference/default-theme/styles.md) 。

#### 主題配置

默認主題的配置有大量變更。

參考 [默認主題 > 配置](../reference/default-theme/config.md) 。

### 官方插件變更

參考 [官方插件](../reference/plugin/README.md) 。

### 社區主題和插件

v1 的主題和插件和 v2 並不兼容。

請確保你在使用的主題和插件已經支持 v2 ，並前往它們各自的文檔查看遷移指南。

## 給插件作者

一些主要的 Breaking Changes ：

- 你不能再在你的插件中使用其他插件了，這避免了很多由於插件嵌套引發的問題。如果你的插件依賴於別的插件，你可以在文檔中列出他們，並讓用戶手動引入。或者，你也可以向用戶提供一個插件數組以方便使用。
- 大部分 v1 Hook 都在 v2 中存在等效的 Hook 或實現方式。唯一的例外是 `extendsCli` ，它被移除了。
- Webpack 相關的 Hook 都被移除了，因為 VuePress Core 已經和 Webpack 解耦了。

你可以參考 [深入 > 開發插件](../advanced/plugin.md) 來了解如何開發一個 v2 插件。

### 插件 API 變更

- `plugins`：移除
- `ready`：重命名為 `onPrepared`
- `updated`：重命名為 `onWatched`
- `generated`：重命名為 `onGenerated`
- `additionalPages`：移除，改為在 `onInitialized` Hook 中使用 `app.pages.push(createPage())`
- `clientDynamicModules`：移除，改為在 `onPrepared` Hook 中使用 `app.writeTemp()`
- `enhanceAppFiles`：移除，使用 `clientConfigFile` Hook
- `globalUIComponents`：移除，使用 `clientConfigFile` Hook
- `clientRootMixin`：移除，使用 `clientConfigFile` Hook
- `extendMarkdown`：重命名為 `extendsMarkdown`
- `chainMarkdown`：移除
- `extendPageData`：重命名為 `extendsPage`
- `extendsCli`：移除
- `configureWebpack`：移除
- `chainWebpack`：移除
- `beforeDevServer`：移除
- `afterDevServer`：移除

參考 [插件 API](../reference/plugin-api.md) 。

## 給主題作者

請先瀏覽 [插件 API 變更](#插件-api-變更) 和 [主題 API 變更](#主題-api-變更)。

雖然我們不允許在插件中使用其他插件了，但是你仍然可以在你的主題中使用插件。

一些主要的 Breaking Changes ：

- 所謂的 **主題目錄結構約定** 不再存在。
  - `theme/enhanceApp.js` 文件不會被隱式作為 Client App Enhance 文件。你需要在 `clientConfigFile` Hook 中顯式指定它。
  - `theme/global-components/` 目錄下的文件不會被自動註冊為 Vue 組件。你需要使用 [@vuepress/plugin-register-components](../reference/plugin/register-components.md) ，或者在 `clientConfigFile` 中手動註冊組件。
  - `theme/layouts/` 目錄下的文件不會被自動註冊為佈局組件。你需要通過 `layouts` 配置項來顯式指定。
  - `theme/templates/` 目錄下的文件不會被自動用作 dev / ssr 的模板。你需要通過 `templateBuild` 和 `templateDev` 配置項來顯式指定。
  - 你始終需要提供一個合法的 JS 入口文件，不要再使用 `"main": "layouts/Layout.vue"` 作為主題入口。
- `themeConfig` 已經從用戶配置和站點數據中移除。如果你想要像 v1 一樣通過 `this.$site.themeConfig` 來訪問 `themeConfig` ，我們現在建議使用 [@vuepress/plugin-theme-data](../reference/plugin/theme-data.md) 插件和它提供的 Composition API `useThemeData` 。
- Stylus 不再是默認的 CSS 預處理器，並且 Stylus 調色板系統不再被默認支持。如果你仍然想要使用和 v1 類似的調色板系統，可以使用 [@vuepress/plugin-palette](../reference/plugin/palette.md) 。
- 由 Prism.js 提供的 Markdown 代碼塊的語法高亮不再被默認支持。你可以選擇使用 [@vuepress/plugin-prismjs](../reference/plugin/prismjs.md) 或 [@vuepress/plugin-shiki](../reference/plugin/shiki.md) ，或者用你自己的方式實現語法高亮。
- 考虑到可擴展性， `this.$site.pages` 不再可用。

你可以參考 [深入 > 開發主題](../advanced/theme.md) 來了解如何開發一個 v2 主題。

### 主題 API 變更

#### layouts

現在你需要手動設置佈局目錄或佈局組件。

參考 [主題 API > layouts](../reference/theme-api.md#layouts) 。

#### extend

重命名為 `extends` 。

你仍然可以通過 `extends: parentTheme()` 來繼承一個父主題，這將會繼承其插件和佈局等。

你可以參考 [默認主題 > 繼承](../reference/default-theme/extending.md) 來了解如何繼承默認主題。

`@theme` 和 `@parent-theme` 別名默認被移除了，但你仍然可以使用類似的方式來開發一個可繼承的主題，參考 [深入 > Cookbook > 開發一個可繼承的主題](../advanced/cookbook/making-a-theme-extendable.md) 。
