# unplugin-auto-import

## 简介

按需自动导入 Vite、Webpack、Rspack、Rollup 和 esbuild 的 API。支持 TypeScript。由 unplugin 提供支持。

[github地址](https://github.com/unplugin/unplugin-auto-import)

without

```vue
import { computed, ref } from 'vue'
const count = ref(0)
const doubled = computed(() => count.value * 2)
```

with 
```vue
const count = ref(0)
const doubled = computed(() => count.value * 2)
```

## Vue的使用方式（基于Vite操作）

1. 安装
```cmd
npm i -D unplugin-auto-import
```

2. vite.config.js配置
```javascript
import AutoImport from 'unplugin-auto-import/vite'
export default defineConfig({
  AutoImport({
      imports: ['vue', 'vue-router']
    })
})
```

3. 解决ESLint的报错
```javascript{5-7}
import AutoImport from 'unplugin-auto-import/vite'
export default defineConfig({
  AutoImport({
      imports: ['vue', 'vue-router'],
      eslintrc: {
        enabled: true
      }
    })
})
```

```javascript
// .eslintrc.cjs
module.exports = {
  extends: [
    './.eslintrc-auto-import.json'
  ]
}
```