# 介紹

VuePress 是一個以 Markdown 為中心的靜態網站生成器。你可以使用 [Markdown](https://zh.wikipedia.org/wiki/Markdown) 來寫內容（如文檔、博客等），然後 VuePress 會幫助你生成一個靜態網站來展示它們。

VuePress 誕生的初衷是為了支持 Vue.js 及其子項目的文檔需求，但是現在它已經在幫助用戶創建他們的大量文檔、博客和其他靜態網站。

## 它是如何工作的？

一個 VuePress 站點本質上是一個由 [Vue](https://vuejs.org/) 和 [Vue Router](https://router.vuejs.org) 驅動的單頁面應用 (SPA)。

路由會根據你的 Markdown 文件的相對路徑來自動生成。每個 Markdown 文件都通過 [markdown-it](https://github.com/markdown-it/markdown-it) 編譯為 HTML ，然後將其作為 Vue 組件的模板。因此，你可以在 Markdown 文件中直接使用 Vue 語法，便於嵌入一些動態內容。

在開發過程中，我們啟動一個常規的開發服務器 (dev-server) ，並將 VuePress 站點作為一個常規的 SPA。如果你以前使用過 Vue 的話，你在使用時會感受到非常熟悉的開發體驗。

在構建過程中，我們會為 VuePress 站點創建一個服務器渲染 (SSR) 的版本，然後通過虛擬訪問每一條路徑來渲染對應的 HTML 。這種作法的靈感來源於 [Nuxt](https://nuxtjs.org/) 的 `nuxt generate` 命令，以及其他的一些項目，比如 [Gatsby](https://www.gatsbyjs.org/)。

## 為什麼不是 ...?

### Nuxt

Nuxt 是一套出色的 Vue SSR 框架， VuePress 能做的事情，Nuxt 實際上也同樣能夠勝任。但 Nuxt 是為構建應用程序而生的，而 VuePress 則更為輕量化並且專注在以內容為中心的靜態網站上。

### VitePress

VitePress 是 VuePress 的孿生兄弟，它同樣由 Vue.js 團隊創建和維護。 VitePress 甚至比 VuePress 要更輕更快，但它在靈活性和可配置性上作出了一些讓步，比如它不支援插件系統。當然，如果你沒有進階的定製化需求， VitePress 已經足夠支持你將你的內容部署到線上。

這個比喻可能不是很洽當，但是你可以把 VuePress 和 VitePress 的關係看作 Laravel 和 Lumen 。

### Docsify / Docute

這兩個項目同樣都是基於 Vue，然而它們都是完全的運行時驅動，因此對 SEO 不夠友好。如果你並不關注 SEO，同時也不想安裝大量依賴，它們仍然是非常好的選擇！

### Hexo

Hexo 一直接驅動着 Vue 2.x 的文檔。Hexo 最大的問題在於他的主題系統太過於靜態以及過度地依賴純字符串，而我們十分希望能夠好好地利用 Vue 來處理我們的佈局和交互。同時，Hexo 在配置 Markdown 渲染方面的靈活性也不是最佳的。

### GitBook

過去我們的子項目文檔一直都在使用 GitBook 。 GitBook 最大的問題在於當文件很多時，每次編譯後的重新加載時間長得令人無法忍受。它的默認主題導航結構也比較有限制性，並且，主題系統也不是 Vue 驅動的。GitBook 背後的團隊如今也更專注於將其打造為一個商業產品而不是開源工具。
