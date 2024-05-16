# 组合的物体

物体之间是可以互相组合的，子物体都是相对于父物体进行位移、缩放、旋转的。

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
const geometry1 = new THREE.BoxGeometry(1, 1, 1)
const material1 = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const parentCube = new THREE.Mesh(geometry1, material1)
scene.add(parentCube)
const geometry2 = new THREE.BoxGeometry(1, 1, 1)
const material2 = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const cube = new THREE.Mesh(geometry2, material2)
parentCube.add(cube)
cube.position.x = 3
camera.position.z = 5
function animate() {
  requestAnimationFrame(animate)
  parentCube.rotation.x += 0.01
  parentCube.rotation.y += 0.01
  renderer.render(scene, camera)
}
animate()
```

![Combined-objects](/three/imgs/Combined-objects/1.png)
