# 画线

如何绘制线段，使用LineBasicMaterial 或者 LineDashedMaterial这两种材质，基础线和虚线。

定义好材质之后，我们需要一个带有一些顶点的geometry（几何体）。

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
const points = [
  new THREE.Vector3(-1, 0, 0), 
  new THREE.Vector3(0, 1, 0),
  new THREE.Vector3(1, 0, 0)
]
const geometry = new THREE.BufferGeometry().setFromPoints(points)
const material = new THREE.LineDashedMaterial({color: 0xffff00})
const line = new THREE.Line(geometry, material)
scene.add(line)
camera.position.z = 5
function animate() {
  requestAnimationFrame(animate)
  line.rotation.x += 0.01
  line.rotation.y += 0.01
  renderer.render(scene, camera)
}
animate()
```

![line](/three/imgs/line/1.png)