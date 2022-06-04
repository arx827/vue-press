# 命令行接口

<NpmBadge package="@vuepress/cli" />

VuePress 命令行接口是由 [@vuepress/cli](https://www.npmjs.com/package/@vuepress/cli) 包提供的。它包含在 [vuepress](https://www.npmjs.com/package/vuepress) 包之中，當然你也可以單獨安裝它。

執行 `vuepress --help` 來獲取下列幫助信息：

```bash
Usage:
  $ vuepress <command> [options]

Commands:
  dev [sourceDir]    Start development server
  build [sourceDir]  Build to static site
  info               Display environment information

For more info, run any command with the `--help` flag:
  $ vuepress dev --help
  $ vuepress build --help
  $ vuepress info --help

Options:
  -v, --version  Display version number 
  -h, --help     Display this message 
```

::: tip
VuePress 使用了 [debug](https://www.npmjs.com/package/debug) 模塊。

設置環境變數 `DEBUG=vuepress*` 可以啟用調試日誌。
:::

## dev

啟動一個開發服務器，在本地開發你的 VuePress 站點。

```bash
Usage:
  $ vuepress dev [sourceDir]

Options:
  -c, --config <config>  Set path to config file 
  -p, --port <port>      Use specified port (default: 8080) 
  -t, --temp <temp>      Set the directory of the temporary files 
  --host <host>          Use specified host (default: 0.0.0.0) 
  --cache <cache>        Set the directory of the cache files 
  --clean-temp           Clean the temporary files before dev 
  --clean-cache          Clean the cache files before dev 
  --open                 Open browser when ready 
  --debug                Enable debug mode 
  --no-watch             Disable watching page and config files (default: true)
  -v, --version          Display version number 
  -h, --help             Display this message
```

::: tip
通過命令行設置的配置項，會覆蓋你配置文件中的同名配置項。
:::

## build

將你的 VuePress 站點構建成静態文件，以便你進行後續[部署](../guide/deployment.md)。

```bash
Usage:
  $ vuepress build [sourceDir]

Options:
  -c, --config <config>  Set path to config file 
  -d, --dest <dest>      Set the directory build output (default: .vuepress/dist) 
  -t, --temp <temp>      Set the directory of the temporary files 
  --cache <cache>        Set the directory of the cache files 
  --clean-temp           Clean the temporary files before build 
  --clean-cache          Clean the cache files before build 
  --debug                Enable debug mode 
  -v, --version          Display version number 
  -h, --help             Display this message
```

::: tip
通過命令行設置的配置項，會覆蓋你配置文件中的同名配置項。
:::

## info

輸出當前系統和依賴相關的信息。

在你想要檢查你的環境，或者提交 Issue 時候，可以使用該命令。
