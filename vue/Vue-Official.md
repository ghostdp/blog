# Vue - Official

Vue 官方语言工具 2.0 这个版本将 VS Code 插件名称从 Volar Language Features (Volar)改为了 Vue - Official，同时 TypeScript Vue Plugin 扩展也被弃用了。

三大点改进

1. 支持 Vue3.4 新特性

```vue
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
const msg = 'You did it!'
</script>
<template>
<HelloWorld :msg />
</template>
```

2. 支持拖拽导入组件

通过鼠标左键拖拽组件到编码区，然后再按下shift键，可以自动导入组件和模块地址。

3. TypeScript Vue Plugin 扩展弃用

TypeScript Vue Plugin（也就是此前的 Volar ts 版本）被弃用。现在所有功能都被合并入 Vue - Official 了。