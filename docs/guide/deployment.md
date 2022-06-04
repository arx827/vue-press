# 部署

下述的指南基於以下條件：

- Markdown 源文件放置在你項目的 `docs` 目錄；
- 使用的是默認的構建輸出目錄 (`.vuepress/dist`) ；
- 使用 [Yarn classic](https://classic.yarnpkg.com/zh-Hans/) 作為包管理器，當然也可以使用 NPM 。
- VuePress 作為項目依賴安裝，並在 `package.json` 中配置了如下腳本：

```json
{
  "scripts": {
    "docs:build": "vuepress build docs"
  }
}
```

## GitHub Pages

1. 設置正確的 [base](../reference/config.md#base) 選項。

    如果你準備發布到 `https://<USERNAME>.github.io/` ，你可以省略這一步，因為 `base` 默認就是 `"/"` 。

    如果你準備發布到 `https://<USERNAME>.github.io/<REPO>/` ，也就是說你的倉庫地址是 `https://github.com/<USERNAME>/<REPO>` ，則將 `base` 設置為 `"/<REPO>/"`。

2. 選擇你想要使用的 CI 工具。這裡我們以 [GitHub Actions](https://github.com/features/actions) 為例。

    創建 `.github/workflows/docs.yml` 文件來配置工作流。

::: details 點擊展開配置樣例
```yaml
name: docs

on:
  # 每當 push 到 main 分支時觸發部署
  push:
    branches: [main]
  # 手動觸發部署
  workflow_dispatch:

jobs:
  docs:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
        with:
          # “最近更新時間” 等 git 日誌相關信息，需要拉取全部提交紀錄
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v1
        with:
          # 選擇要使用的 node 版本
          node-version: '14'

      # 緩存 node_modules
      - name: Cache dependencies
        uses: actions/cache@v2
        id: yarn-cache
        with:
          path: |
            **/node_modules
          key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
          restore-keys: |
            ${{ runner.os }}-yarn-

      # 如果緩存沒有命中，安裝依賴
      - name: Install dependencies
        if: steps.yarn-cache.outputs.cache-hit != 'true'
        run: yarn --frozen-lockfile

      # 運行構建腳本
      - name: Build VuePress site
        run: yarn docs:build

      # 查看 workflow 的文檔來獲取更多信息
      # @see https://github.com/crazy-max/ghaction-github-pages
      - name: Deploy to GitHub Pages
        uses: crazy-max/ghaction-github-pages@v2
        with:
          # 部署到 gh-pages 分支
          target_branch: gh-pages
          # 部署目錄為 VuePress 的默認輸出目錄
          build_dir: docs/.vuepress/dist
        env:
          # @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
:::


::: tip
請參考 [GitHub Pages 官方指南](https://pages.github.com/) 來獲取更多信息。
:::

## GitLab Pages

1. 設置正確的 [base](../reference/config.md#base) 選項。

    如果你準備發布到 `https://<USERNAME>.gitlab.io/` ，你可以省略這一步，因此 `base` 默認就是 `"/"` 。

    如果你準備發布到 `https://<USERNAME>.gitlab.io/<REPO>/` ，也就是說你的倉庫地址是 `https://gitlab.com/<USERNAME>/<REPO>` ，則將 `base` 設置為 `"/<REPO>/"`。

2. 創建 `.gitlab-ci.yml` 文件來配置 [GitLab CI](https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/) 工作流。

::: details 點擊展開配置樣例
```yaml
# 選擇你要使用的 docker 鏡像
image: node:14-buster

pages:
  # 每當 push 到 main 分支時觸發部署
  only:
  - main

  # 緩存 node_modules
  cache:
    paths:
    - node_modules/

  # 安裝依賴並運行構建腳本
  script:
  - yarn --frozen-lockfile
  - yarn docs:build --dest public

  artifacts:
    paths:
    - public
```
:::

::: tip
請參考 [GitLab Pages 官方指南](https://docs.gitlab.com/ce/user/project/pages/#getting-started) 來獲取更多信息。
:::

## Google Firebase

1. 請確保你已經安裝了 [firebase-tools](https://www.npmjs.com/package/firebase-tools)。

2. 在你項目的根目錄下創建 `firebase.json` 和 `.firebaserc`，並包含以下内容：

`firebase.json`:

```json
{
  "hosting": {
    "public": "./docs/.vuepress/dist",
    "ignore": []
  }
}
```

`.firebaserc`:

```json
{
  "projects": {
    "default": "<YOUR_FIREBASE_ID>"
  }
}
```

3. 在執行了 `yarn docs:build` 或 `npm run docs:build` 後, 使用 `firebase deploy` 指令來部署。

::: tip
請參考 [Firebase CLI 官方指南](https://firebase.google.com/docs/cli) 來獲取更多信息。
:::

## Heroku

1. 首先安裝 [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)；

2. [在這裡](https://signup.heroku.com) 註冊一個 Heroku 帳號；

3. 運行 `heroku login` 並填寫你的 Heroku 認證信息：

```bash
heroku login
```

4. 在你的項目根目錄中，創建一個名為 `static.json` 的文件，並包含下述内容：

`static.json`:

```json
{
  "root": "./docs/.vuepress/dist"
}
```

這裡是你項目的配置，請參考 [heroku-buildpack-static](https://github.com/heroku/heroku-buildpack-static) 來獲取更多信息。

## Layer0

請查看 [Layer0 Documentation > Framework Guides > VuePress](https://docs.layer0.co/guides/vuepress) 。

## Netlify

1. 前往 [Netlify](https://netlify.com) ，從 GitHub 創建一個新項目，並進行如下配置：

    - **Build Command:** `yarn docs:build`
    - **Publish directory:** `docs/.vuepress/dist`

2. 設置 [Environment variables](https://docs.netlify.com/configure-builds/environment-variables) 來選擇 Node 版本：

    - `NODE_VERSION`: 14

3. 點擊 deploy 按钮。

## Vercel

1. 前往 [Vercel](https://vercel.com) ，從 GitHub 創建一個新項目，並進行如下配置：

    - **FRAMEWORK PRESET:** `Other`
    - **BUILD COMMAND:** `yarn docs:build` 
    - **OUTPUT DIRECTORY:** `docs/.vuepress/dist`

2. 點擊 deploy 按钮。

<!-- 下列平台是中文文檔特有的，放在最下方 -->

## 雲開發 CloudBase

[雲開發 CloudBase](https://cloudbase.net/?site=vuepress) 是一個雲原生一體化的 Serverless 雲平台，支持静態網站、容器等多種托管能力，並提供簡便的部署工具 [CloudBase Framework](https://cloudbase.net/framework.html?site=vuepress) 來一鍵部署應用。

1. 全局安裝 CloudBase CLI ：

```bash
npm install -g @cloudbase/cli
```

2. 在項目根目錄運行以下命令一鍵部署 VuePress 應用，在部署之前可以先 [開通環境](https://console.cloud.tencent.com/tcb/env/index?tdl_anchor=ad&tdl_site=vuejs)：

```bash
cloudbase init --without-template
cloudbase framework:deploy
```

  CloudBase CLI 首先會跳轉到控制台進行登錄授權，然後將會交互式進行確認。

  確認信息後會立即進行部署，部署完成後，可以獲得一個自動 SSL，CDN 加速的網站應用，你也可以搭配使用 GitHub Action 來持續部署 GitHub 上的 VuePress 應用。

  也可以使用 `cloudbase init --template vuepress` 快速創建和部署一個新的 VuePress 應用。

::: tip
更多详细信息請查看 CloudBase Framework 的[部署項目示例](https://github.com/TencentCloudBase/cloudbase-framework?site=vuepress#%E9%A1%B9%E7%9B%AE%E7%A4%BA%E4%BE%8B)
:::

## 21 雲盒子

請查看 [21 雲盒子 - 部署一個 VuePress 静態網頁](https://www.21yunbox.com/docs/#/deploy-vuepress)。
