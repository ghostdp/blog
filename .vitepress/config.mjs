import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: "/blog/",
  lang: "zh-Hans",
  title: "前端博客",
  description: "blog of 可乐666",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Vue.js', link: '/vue/index' },
      { text: 'Three.js', link: '/three/index' }
    ],
    outline: {
      label: '页面导航'
    },
    sidebar: {
      '/vue': [
        {
          text: '集合列表',
          items: [
            { text: 'unplugin-auto-import', link: '/vue/unplugin-auto-import' },
            { text: 'vite-plugin-vue-devtools', link: '/vue/vite-plugin-vue-devtools' }
          ]
        }
      ],
      '/three': [
        {
          text: '集合列表',
          items: [
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ghostdp' }
    ]
  }
})
