import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: "/blog/",
  title: "前端博客",
  description: "blog of 可乐666",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Vue.js', link: '/vue/index' },
      { text: 'Three.js', link: '/three/index' }
    ],

    sidebar: {
      '/vue': [
        {
          text: '集合列表',
          items: [
            { text: 'unplugin-auto-import', link: '/vue/unplugin-auto-import' }
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
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
