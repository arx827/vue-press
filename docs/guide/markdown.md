# Markdown

在閱讀本章節之前，請確保你已經對 Markdown 有所了解。如果你還不了解 Markdown ，請先學習一些 [Markdown 教程](https://commonmark.org/help/)。

## 語法擴展

VuePress 會使用 [markdown-it](https://github.com/markdown-it/markdown-it) 來解析 Markdown 內容，因此可以借助於 markdown-it 插件來實現 [語法擴展](https://github.com/markdown-it/markdown-it#syntax-extensions) 。

本章節將會介紹 VuePress 內置支持的 Markdown 語法擴展。

你也可以通過 [markdown](../reference/config.md#markdown) 和 [extendsMarkdown](../reference/plugin-api.md#extendsmarkdown) 來配置這些內置擴展、加載更多 markdown-it 插件、實現你自己的擴展等。

### 內置

由 markdown-it 內置支持：

- [表格](https://help.github.com/articles/organizing-information-with-tables/) (GFM)
- [刪除線](https://help.github.com/articles/basic-writing-and-formatting-syntax/#styling-text) (GFM)

### 標題錨點

你可能已經注意到，當你把鼠標放在各個章節的標題上時，會顯示出一個 `#` 錨點。點擊這個 `#` 錨點，可以直接跳轉到對應章節。

::: tip
標題錨點擴展由 [markdown-it-anchor](https://github.com/valeriangalliat/markdown-it-anchor) 支持。

配置參考： [markdown.anchor](../reference/config.md#markdown-anchor)
:::

### 鏈接

在你使用 Markdown 的 [鏈接語法](https://spec.commonmark.org/0.29/#link-reference-definitions) 時， VuePress 會為你進行一些轉換。

以我們文檔的源文件為例：

```bash
└─ docs
   └─ zh
      ├─ guide
      │  ├─ getting-started.md
      │  ├─ markdown.md    # <- 我們在這裡
      │  └─ README.md
      ├─ reference
      │  └─ config.md
      └─ README.md
```

**原始 Markdown**

```md
<!-- 相對路徑 -->
[首頁](../README.md)  
[配置參考](../reference/config.md)  
[快速上手](./getting-started.md)  
<!-- 絕對路徑 -->
[指南](/guide/README.md)  
[配置參考 > markdown.links](/reference/config.md#links)  
<!-- URL -->
[GitHub](https://github.com) 
```

**轉換為**

```vue
<template>
  <RouterLink to="/">首頁</RouterLink>
  <RouterLink to="/reference/config.html">配置參考</RouterLink>
  <RouterLink to="/guide/getting-started.html">快速上手</RouterLink>
  <RouterLink to="/guide/">指南</RouterLink>
  <RouterLink to="/reference/config.html#links">配置參考 &gt; markdown.links</RouterLink>
  <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
</template>
```

**渲染為**

[首頁](../README.md)  
[配置參考](../reference/config.md)  
[快速上手](./getting-started.md)  
[指南](/guide/README.md)  
[配置參考 > markdown.links](/reference/config.md#links)  
[GitHub](https://github.com) 

**解釋**

- 內部鏈接會被轉換為 `<RouterLink>` 以便進行 SPA 導航。
- 指向 `.md` 文件的內部鏈接會被轉換為目標頁面的 [路由路徑](./page.md#路由)，並且支持絕對路徑和相對路徑。
- 外部鏈接會被添加 `target="_blank" rel="noopener noreferrer"` 屬性。

**建議**

對於指向內部 Markdown 文件的鏈接，盡可能使用相對路徑而不是絕對路徑。

- 相對路徑是指向目標文件的有效鏈接，在你的編輯器或者代碼倉庫中瀏覽源文件時也可以正確跳轉。
- 相對路徑在不同 locales 下都是一致的，這樣在翻譯你的內容時就不需要修改 locale 路徑了。

::: tip
鏈接擴展是由我們的內置插件支持的。

配置參考： [markdown.links](../reference/config.md#markdown-links)
:::

### Emoji :tada:

你可以在你的 Markdown 內容中輸入 `:EMOJICODE:` 來添加 Emoji 表情。

前往 [emoji-cheat-sheet](https://github.com/ikatyang/emoji-cheat-sheet) 來查看所有可用的 Emoji 表情和對應代碼。

**輸入**

```md
VuePress 2 已經發布 :tada: ！
```

**輸出**

VuePress 2 已經發布 :tada: ！

::: tip
Emoji 擴展由 [markdown-it-emoji](https://github.com/markdown-it/markdown-it-emoji) 支持。

配置參考： [markdown.emoji](../reference/config.md#markdown-emoji)
:::

### 目錄

如果你想要把當前頁面的目錄添加到 Markdown 內容中，你可以使用 `[[toc]]` 語法。

**輸入**

```md
[[toc]]
```

**輸出**

[[toc]]

目錄中的標題將會鏈接到對應的 [標題錨點](#標題錨點)，因此如果你禁用了標題錨點，可能會影響目錄的功能。

::: tip
目錄擴展是由我們的內置插件支持的，該擴展 Fork 並修改自  [markdown-it-toc-done-right](https://github.com/nagaozen/markdown-it-toc-done-right)。


配置參考： [markdown.toc](../reference/config.md#markdown-toc)
:::

### 代碼塊

下列代碼塊擴展是在 Node 端進行 Markdown 解析的時候實現的。這意味著代碼塊並不會在客戶端被處理。

#### 行高亮

你可以在代碼塊添加行數範圍標記，來為對應代碼行進行高亮：

**輸入**

````md
```ts{1,6-8}
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```
````

**輸出**

```ts{1,6-8}
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```

行數範圍標記的例子：

- 行數範圍： `{5-8}`
- 多個單行： `{4,7,9}`
- 組合： `{4,7-13,16,23-27,40}`

::: tip
行高亮擴展是由我們的內置插件支持的，該擴展 Fork 並修改自  [markdown-it-highlight-lines](https://github.com/egoist/markdown-it-highlight-lines)。

配置參考： [markdown.code.highlightLines](../reference/config.md#markdown-code-highlightlines)
:::

#### 行號

你肯定已經注意到在代碼塊的最左側會展示行號。這個功能是默認啟用的，你可以通過配置來禁用它。

你可以在代碼塊添加 `:line-numbers` / `:no-line-numbers` 標記來覆蓋配置項中的設置。

**輸入**

````md
```ts
// 行號默認是啟用的
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:no-line-numbers
// 行號被禁用
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```
````

**輸出**

```ts
// 行號默認是啟用的
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:no-line-numbers
// 行號被禁用
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

::: tip
行號擴展是由我們的內置插件支持的。

配置參考： [markdown.code.lineNumbers](../reference/config.md#markdown-code-linenumbers)
:::

#### 添加 v-pre

由於 [模板語法可以在 Markdown 中使用](#模板語法)，它也同樣可以在代碼塊中生效。

為了避免你的代碼塊被 Vue 編譯， VuePress 默認會在你的代碼塊添加 [v-pre](https://v3.vuejs.org/api/directives.html#v-pre) 指令。這一默認行為可以在配置中關閉。


你可以在代碼塊添加 `:v-pre` / `:no-v-pre` 標記來覆蓋配置項中的設置。

::: warning
模板語法的字符有可能會被語法高亮器解析，比如 "Mustache" 語法（即雙花括號）。因此，就像下面的例子一樣，在某些語言中 `:no-v-pre` 可能並不能生效。

如果你無論如何都想在這種語言中使用 Vue 語法，你可以嘗試禁用默認的語法高亮，然后在客戶端實現你的自定義代碼高亮。
:::

**輸入**

````md
```md
<!-- 默認情况下，這裡會被保持原樣 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```md:no-v-pre
<!-- 這裡會被 Vue 編譯 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```js:no-v-pre
// 由於 JS 代碼高亮，這裡不會被正確編譯
const onePlusTwoPlusThree = {{ 1 + 2 + 3 }}
```
````

**輸出**

```md
<!-- 默認情况下，這裡會被保持原樣 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```md:no-v-pre
<!-- 這裡會被 Vue 編譯 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

<!--
在 JS 代碼塊上使用 :no-v-pre 的話，會在使用 shiki 時遇到一些潛在的問題，所以這裡
我們實際上沒有使用 :no-v-pre ，只是作為一個錯誤用法的示例。
-->

```js
// 由於 JS 代碼高亮，這裡不會被正確編譯
const onePlusTwoPlusThree = {{ 1 + 2 + 3 }}
```

::: tip
v-pre 擴展是由我們的內置插件支持的。

配置參考： [markdown.code.vPre.block](../reference/config.md#markdown-code-vpre-block)
:::

### 導入代碼塊

你可以使用下面的語法，從文件中導入代碼塊：

```md
<!-- 最簡單的語法 -->
@[code](../foo.js)
```

如果你只想導入這個文件的一部分：

```md
<!-- 僅導入第 1 行至第 10 行 -->
@[code{1-10}](../foo.js)
```

代碼語言會根據文件擴展名進行推斷，但我們建議你顯式指定：

```md
<!-- 指定代碼語言 -->
@[code js](../foo.js)
```

實際上，`[]` 內的第二部分會被作為代碼塊標記來處理，因此在上面 [代碼塊](#代碼塊) 章節中提到的語法在這裡都可以支持：

```md
<!-- 行高亮 -->
@[code js{2,4-5}](../foo.js)
```

下面是一個複雜的例子：

- 導入 `'../foo.js'` 文件的第 3 行至第 10 行
- 指定語言為 `'js'`
- 對導入代碼的第 3 行進行高亮，即 `'../foo.js'` 文件的第 5 行
- 禁用行號

```md
@[code{3-10} js{3}:no-line-numbers](../foo.js)
```

需要注意的是，路徑别名在導入代碼語法中不會生效。你可以通過下面的配置來自行處理路徑别名：

```js
module.exports = {
  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(/^@src/, path.resolve(__dirname, 'path/to/src')),
    },
  },
}
```

```md
<!-- 會被解析至 'path/to/src/foo.js' -->
@[code](@src/foo.js)
```

::: tip
導入代碼擴展是由我們的內置插件支持的。

配置參考： [markdown.importCode](../reference/config.md#markdown-importcode)
:::

## 在 Markdown 中使用 Vue

這一章節會介紹 Vue 在 Markdown 中一些基本用法。

可以前往 [Cookbook > Markdown 和 Vue SFC](../advanced/cookbook/markdown-and-vue-sfc.md) 來了解更多內容。

### 模板語法

我們知道：

- Markdown 中允许使用 HTML。
- Vue 模板語法是和 HTML 兼容的。

這意味著， Markdown 中允许直接使用 [Vue 模板語法](https://v3.vuejs.org/guide/template-syntax.html)。

**輸入**

```md
一加一等於： {{ 1 + 1 }}

<span v-for="i in 3"> span: {{ i }} </span>
```

**輸出**

一加一等於： {{ 1 + 1 }}

<span v-for="i in 3"> span: {{ i }} </span>

### 組件

你可以在 Markdown 中直接使用 Vue 組件。

**輸入**

```md
這是默認主題內置的 `<Badge />` 組件 <Badge text="演示" />
```

**輸出**

這是默認主題內置的 `<Badge />` 組件 <Badge text="演示" />

::: tip
前往 [內置組件](../reference/components.md) 查看所有內置組件。

前往 [默認主題 > 內置組件](../reference/default-theme/components.md) 查看默認主題中的所有內置組件。
:::

## 注意事項

### 非標準的 HTML 標籤

非標準的 HTML 標籤不會被 Vue 模板編譯器識别成原生 HTML 標籤。相反，Vue 會嘗試將這些標籤解析為 Vue 組件，而顯然這些組件通常是不存在的。 例如：

- 已廢棄的 HTML 標籤，比如 [\<center>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/center) 和 [\<font>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font) 等。
- [MathML 標籤](https://developer.mozilla.org/zh-CN/docs/Web/MathML)，它們可能會被一些 markdown-it 的 LaTeX 插件用到。

如果你無論如何都要使用這些標籤的話，可以嘗試下面兩種方法之一：

- 添加一個 [v-pre](https://v3.cn.vuejs.org/api/directives.html#v-pre) 指令來跳過這個元素和它的子元素的編譯過程。注意所有的模板語法也都會失效。
- 設置 [compilerOptions.isCustomElement](https://v3.vuejs.org/api/application-config.html#compileroptions) 來告诉 Vue 模板編譯器不要嘗試作為組件來解析它們。
  - 對於 `@bundler-webpack` ，設置 [vue.compilerOptions](../reference/bundler/webpack.md#vue)
  - 對於 `@bundler-vite` ，設置 [vuePluginOptions.template.compilerOptions](../reference/bundler/vite.md#vuepluginoptions)
