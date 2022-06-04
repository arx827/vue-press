import { defaultTheme, defineUserConfig } from 'vuepress';

import { head, navbar, sidebar } from './configs';

export default defineUserConfig({
  base: '/vue-press/',
  lang: 'zh-TW',
  title: 'VuePress',
  description: 'Vue 驅動的靜態網站生成器',
  head,
  theme: defaultTheme({
    logo: '/images/hero.png',
    docsDir: 'docs',
    navbar,
    sidebar,
  }),
})