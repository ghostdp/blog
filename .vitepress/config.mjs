import { defineConfig } from 'vitepress'
import { bilibiliIcon } from './icon'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: "/blog/",
  lang: 'zh-Hans',
  title: '前端博客',
  description: '彼岸5173的前端博客',
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Vue.js', link: '/vue/index', activeMatch: '/vue/' },
      { text: 'Three.js', link: '/three/index', activeMatch: '/three/' },
      { text: '收藏', link: '/collection', activeMatch: '/collection' }
    ],
    search: {
      provider: 'local',
    },
    outline: {
      label: '页面导航',
    },
    sidebar: {
      '/vue': [
        {
          text: '集合列表',
          items: [
            { text: 'unplugin-auto-import', link: '/vue/unplugin-auto-import' },
            {
              text: 'vite-plugin-vue-devtools',
              link: '/vue/vite-plugin-vue-devtools',
            },
            {
              text: 'Vue-Official',
              link: '/vue/Vue-Official'
            }
          ],
        },
      ],
      '/three': [
        {
          text: '集合列表',
          items: [
            { text: '透视摄像机', link: '/three/PerspectiveCamera' },
            { text: '创建一个方块', link: '/three/createCube' },
            { text: '画布自适应屏幕大小', link: '/three/resize' },
            { text: '给方块每个面添加不同的颜色', link: '/three/cubeColor' },
            { text: '带有光照的方块', link: '/three/cubeLight' },
            { text: '纹理贴图', link: '/three/TextureLoader' },
            { text: 'CircleGeometry', link: '/three/CircleGeometry' },
            { text: 'SphereGeometry', link: '/three/SphereGeometry' },
            { text: '组合的物体', link: '/three/Combined-objects' },
            { text: '画线', link: '/three/line' },
            { text: '轨道控制器', link: '/three/OrbitControls' },
            { text: '包围盒', link: '/three/BoxHelper' },
            { text: '雾', link: '/three/Fog' },
            { text: 'gltf模型', link: '/three/GLTFLoader' },
            { text: '天空盒', link: '/three/Skybox' },
            { text: '光线投射交互操作', link: '/three/Raycaster' },
            { text: '坐标格辅助对象', link: '/three/GridHelper' },
            { text: '正交摄像机', link: '/three/OrthographicCamera' },
            { text: '补间动画', link: '/three/Tween' }
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ghostdp' },
      {
        icon: bilibiliIcon,
        link: 'https://space.bilibili.com/441876893',
      },
    ],
  },
})
