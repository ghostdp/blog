# GridHelper

坐标格辅助对象，坐标格实际上是 2 维线数组。

GridHelper( size : number, divisions : Number, colorCenterLine : Color, colorGrid : Color )
- size -- 坐标格尺寸. 默认为 10.
- divisions -- 坐标格细分次数. 默认为 10.
- colorCenterLine -- 中线颜色. 值可以为 Color 类型, 16进制 和 CSS 颜色名. 默认为 0x444444
- colorGrid -- 坐标格网格线颜色. 值可以为 Color 类型, 16进制 和 CSS 颜色名. 默认为 0x888888

```javascript
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

const grid = new THREE.GridHelper(20, 10, 0xff0000, 0xffffff)
grid.material.opacity = 0.4
grid.material.transparent = true
grid.rotation.x = 0.5
cube.add(grid)

const controls = new OrbitControls(camera, renderer.domElement)
controls.addEventListener('change', function () {
  renderer.render(scene, camera)
})

camera.position.z = 20
renderer.render(scene, camera)
```

![Fog](/three/imgs/GridHelper/1.png)