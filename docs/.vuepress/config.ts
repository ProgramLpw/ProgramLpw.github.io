import { resolve } from 'path'
import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config'
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'
import plugins from "./config/plugins";             // 插件配置
import head from "./config/head";                   // 头部配置
import themeConfig from "./config/themeConfig";     // 主题配置
import htmlModules from './config/htmlModules'       // 自定义插入的html块


export default defineConfig4CustomTheme<VdoingThemeConfig>({
  theme: 'vdoing', // 使用npm主题包
  // theme: resolve(__dirname, '../../vdoing'), // 使用本地主题包
  // base: '/', // 格式：'/<仓库名>/'， 默认'/'
  locales: {
    '/': {
      lang: 'zh-CN',
      title: "Power's Blog",
      description: 'Power 个人博客,全栈学习与总结.分享技术,记录生活',
    }
  },

  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.ts',
    '.vuepress/config/head.ts',
    '.vuepress/config/htmlModules.ts',
    '.vuepress/config/plugins.ts',
    '.vuepress/config/themeConfig.ts',
  ],

  head,
  themeConfig,
  plugins,
  // htmlModules,
})
