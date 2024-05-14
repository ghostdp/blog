# vite-plugin-vue-devtools

## 简介

Vue DevTools 是一款旨在增强 Vue 开发者体验的工具，它提供了一些功能来帮助您更好地了解您的 Vue 应用程序。

[官网地址](https://devtools-next.vuejs.org/)

> 注：DevTools 仅与 Vue 3 兼容。如果你还在使用 Vue2，请改用 vue-devtools。

## 使用方式（Vite 插件）

1. 手动安装

```sh
npm add -D vite-plugin-vue-devtools
```

2. 或者脚手架下安装

![vite-create](/vue/imgs/vite-plugin-vue-devtools/1.png)

3. vite.config.js配置
```javascript
import { defineConfig } from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'
export default defineConfig({
  plugins: [
    VueDevTools(),
  ],
})
```

4. 功能：页面、组件、路由、资源、时间线、状态管理、关系图、编译步骤等