# Tween

补间动画，指定起始点和结束掉，自动区间补全动画。

```javascript
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { Tween, Easing } from 'three/examples/jsm/libs/tween.module.js'
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
cube.position.x = -2

const tween = new Tween(cube.position)
tween.to({ x: 2 }, 2000)
tween.repeat(Infinity)
tween.yoyo(true)
tween.easing(Easing.Quadratic.InOut)
tween.delay(100)
tween.start()

const controls = new OrbitControls(camera, renderer.domElement)

camera.position.z = 5

function animate() {
  requestAnimationFrame(animate)
  tween.update()
  renderer.render(scene, camera)
}
animate()
```
