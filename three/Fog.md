# 雾

Fog（线性雾），雾的密度是随着距离线性增大的。

FogExp2（指数雾），它可以在相机附近提供清晰的视野，且距离相机越远，雾的浓度随着指数增长越快。

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

const geometry = new THREE.BoxGeometry(1, 1, 50)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

const controls = new OrbitControls(camera, renderer.domElement)
controls.addEventListener('change', function () {
  renderer.render(scene, camera)
})
const axesHelper = new THREE.AxesHelper(3)
scene.add(axesHelper)

scene.fog = new THREE.Fog(0x999999, 0.1, 30)
// scene.fog = new THREE.FogExp2(0x999999, 0.2)

scene.background = new THREE.Color(0x999999)

camera.position.z = 5

function animate() {
  // requestAnimationFrame( animate );

  cube.rotation.x += 0.01
  cube.rotation.y += 0.01

  renderer.render(scene, camera)
}

animate()
```

> 注：scene.background可以设置场景的背景色，且背景总是首先被渲染的。

![Fog](/three/imgs/Fog/1.png)