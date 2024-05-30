<template>
  <VPTeamPage>
    <VPTeamPageTitle>
      <template #title>🎨 收藏 🙌</template>
      <template #lead>收集一些有用的网站，主要以前端为主！</template>
    </VPTeamPageTitle>
    <VPTeamMembers size="small" :members="members" />
  </VPTeamPage>
</template>

<script setup>
import { VPTeamPage, VPTeamPageTitle, VPTeamMembers } from 'vitepress/theme'
import { linkIcon } from '../icon'
const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/74656938?v=4',
    name: '前端历史',
    title: 'The history of Frontend',
    links: [
      { icon: linkIcon, link: 'https://frontendhistory.com/' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/119253150?s=200&v=4',
    name: 'TresJS',
    title: '将 Three 带到了 Vue 生态系统中',
    links: [
      { icon: linkIcon, link: 'https://docs.tresjs.org/zh/' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/49552305?s=200&v=4',
    name: 'javascript.info',
    title: '现代 JavaScript 教程',
    links: [
      { icon: linkIcon, link: 'https://zh.javascript.info/' }
    ]
  }
]
</script>

<style scoped>
</style>
