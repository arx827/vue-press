# 静態資源

## 相對路徑

你可以在你的 Markdown 內容中使用相對路徑來引用静態資源：

```md
![圖片](./image.png)
```

一般情況下，我們推薦你使用這種方式來引用圖片，因為人們通常會把圖片放在引用它的 Markdown 文件附近。

## Public 文件

你可以把一些静態資源放在 Public 目錄中，它們會被複製到最終生成的網站的根目錄下。

默認的 Public 目錄是  `.vuepress/public` ，可以通過配置來修改。

在下列這些情況中，你可能會用到它：

- 你可能需要提供一些静態資源，但是它們並不直接被你的 Markdown 文件引用，比如 favicon 和 PWA 圖標。
- 你可能想要托管一些共享的静態資源，甚至可能需要在你的網站外部引用它，比如 Logo 圖片。
- 你可能想在你的 Markdown 內容中通過絕對路徑來引入圖片。

以我們文檔的源文件為例，我們把 VuePress 的 Logo 放在了 Public 目錄下：

```bash
└─ docs
   ├─ .vuepress
   |  └─ public
   |     └─ images
   |        └─ hero.png  # <- Logo 文件
   └─ guide
      └─ assets.md       # <- 我們在這裡
```

我們可以這樣在當前頁面引用 Logo ：

**Input**

```md
![VuePress Logo](/images/hero.png)
```

**Output**

![VuePress Logo](/images/hero.png)

::: tip
配置參考： [public](../reference/config.md#public)
:::

### Base Helper

如果你的網站部署在非根路徑下，即 [base](../reference/config.md#base) 不是 `"/"` ，你需要把 `base` 添加到 Public 文件的絕對路徑前。

舉例來說，如果你想要把網站部署到 `https://foo.github.io/bar/` ，那麼應該把 `base` 設置為 `"/bar/"` ，此時你必須在 Markdown 文件中這樣引用 Public 文件：

```md
![VuePress Logo](/bar/images/hero.png)
```

顯然，一旦某一天你修改了 `base`，這樣的路徑引用將會顯得異常脆弱。這也是我們推薦你使用相對路徑來引用静態文件的原因。

為了解決這個問題，VuePress 提供了內置的一個 Helper `$withBase` ，它可以幫助你生成正確的路徑：

```md
<img :src="$withBase('/images/hero.png')" alt="VuePress Logo">
```

在 Markdown 中使用這個 Helper 會顯得有些冗長，因此它可能對主題和插件作者更有幫助。

::: tip
配置參考： [base](../reference/config.md#base)
:::

## 依賴包和路徑别名

儘管這不是常見用法，但是你可以從依賴包中引用圖片：

```bash
npm install -D package-name
```

```md
![來自依賴包的圖片](package-name/image.png)
```

在配置文件中設置的路徑别名也同樣支持：

```js
module.exports = {
  alias: {
    '@alias': path.resolve(__dirname, './path/to/some/dir'),
  },
}
```

```md
![來自路徑别名的圖片](@alias/image.png)
```

::: tip
配置參考： [alias](../reference/plugin-api.md#alias)
:::
