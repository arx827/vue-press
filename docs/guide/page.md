# 頁面

VuePress 是以 Markdown 為中心的。你項目中的每一個 Markdown 文件都是一個單獨的頁面。

## 路由

默認情况下，頁面的路由路徑是根據你的 Markdown 文件的相對路徑決定的。

假設這是你的 Markdown 文件所處的目錄結構：

```
└─ docs
   ├─ guide
   │  ├─ getting-started.md
   │  └─ README.md
   ├─ contributing.md
   └─ README.md
```

將 `docs` 目錄作為你的 [sourceDir](../reference/cli.md) ，例如你在運行 `vuepress dev docs` 命令。此時，你的 Markdown 文件對應的路由路徑為：

|      相對路徑      |       路由路徑        |
|--------------------|----------------------|
| `/README.md`       | `/`                  |
| `/index.md`        | `/`                  |
| `/contributing.md` | `/contributing.html` |
| `/guide/README.md` | `/guide/`            |
| `/guide/page.md`   | `/guide/page.html`   |

::: tip
默認配置下， `README.md` 和 `index.md` 都會被轉換成 `index.html` ，並且其對應的路由路徑都是由斜杠結尾的。然而，如果你想同時保留這兩個文件，就可能會造成衝突。

在這種情况下，你可以設置 [pagePatterns](../reference/config.md#pagepatterns) 來避免某個文件被 VuePress 處理，例如使用 `['**/*.md', '!**/README.md', '!.vuepress', '!node_modules']` 來排除所有的 `README.md` 文件。
:::

## Frontmatter

Markdown 文件可以包含一個 [YAML](https://yaml.org/) Frontmatter 。Frontmatter 必須在 Markdown 文件的頂部，並且被包裹在一對三短劃線中間。下面是一個基本的示例：

```md
---
lang: zh-CN
title: 頁面的標題
description: 頁面的描述
---
```

你肯定注意到 Frontmatter 中的字段和[配置文件](./configuration.md#config-file)中的[站點配置](./configuration.md#站點配置)十分類似。你可以通過 Frontmatter 來覆蓋當前頁面的 `lang`, `title`, `description` 等屬性。因此，你可以把 Frontmatter 當作頁面級作用域的配置。

同樣的，VuePress 有一些內置支持的 Frontmatter 字段，而你使用的主題也可能有它自己的特殊 Frontmatter 。

::: tip
前往 [Frontmatter 參考](../reference/config.md) 查看 VuePress 支持的 Frontmatter 配置。

前往 [默認主題 > Frontmatter 參考](../reference/default-theme/frontmatter.md) 查看默認主題的 Frontmatter 配置。
:::

## 內容

頁面的主要內容是使用 Markdown 書寫的。VuePress 首先會將 Markdown 轉換為 HTML ，然後將 HTML 作為 Vue 單文件組件的 `<template>` 。

借助 [markdown-it](https://github.com/markdown-it/markdown-it) 和 Vue 模板語法的能力，基礎的 Markdown 可以得到很多的擴展功能。接下來，前往 [Markdown](./markdown.md) 章節來了解 VuePress 中 Markdown 的擴展功能。
