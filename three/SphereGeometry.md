# SphereGeometry

球缓冲几何体，一个用于生成球体的类。

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

const geometry = new THREE.SphereGeometry(1, 32, 16)
const material = new THREE.MeshPhongMaterial({
  color: 0xffff00,
  wireframe: true,  // 线框
})
const sphere = new THREE.Mesh(geometry, material)
scene.add(sphere)

const color = 0xffffff
const intensity = 3
const light = new THREE.DirectionalLight(color, intensity)
light.position.set(-1, 2, 4)
scene.add(light)

camera.position.z = 5
function animate() {
  requestAnimationFrame(animate)
  sphere.rotation.x += 0.01
  sphere.rotation.y += 0.01
  renderer.render(scene, camera)
}
animate()
```

SphereGeometry(radius : Float, widthSegments : Integer, heightSegments : Integer, phiStart : Float, phiLength : Float, thetaStart : Float, thetaLength : Float)
- radius — 球体半径，默认为1。
- widthSegments — 水平分段数（沿着经线分段），最小值为3，默认值为32。
- heightSegments — 垂直分段数（沿着纬线分段），最小值为2，默认值为16。
- phiStart — 指定水平（经线）起始角度，默认值为0。。
- phiLength — 指定水平（经线）扫描角度的大小，默认值为 Math.PI * 2。
- thetaStart — 指定垂直（纬线）起始角度，默认值为0。
- thetaLength — 指定垂直（纬线）扫描角度大小，默认值为 Math.PI。

![SphereGeometry](/three/imgs/SphereGeometry/1.png)