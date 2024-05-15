# 带有光照的方块

通过添加光源可以实现光照的效果，光源有很多种，这里使用的是平行光（DirectionalLight）。

能够接收光源的材质也是有要求的，这里使用的材质是镜面高光、表面光泽（MeshPhongMaterial）。

```javascript
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

const color = 0xffffff
const intensity = 3 // 强度
const light = new THREE.DirectionalLight(color, intensity)
light.position.set(-1, 2, 4)
scene.add(light)

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshPhongMaterial({ color: 0xff0000 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 5

function animate() {
  requestAnimationFrame(animate)
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  renderer.render(scene, camera)
}
animate()
```
