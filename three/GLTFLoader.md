# GLTFLoader

用于载入 glTF 2.0 资源的加载器。

```javascript
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
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

const controls = new OrbitControls(camera, renderer.domElement)
controls.addEventListener('change', function () {
  renderer.render(scene, camera)
})

camera.position.z = 100

const gltfLoader = new GLTFLoader()
gltfLoader.load('/model/city.glb', (gltf) => {
  const group = gltf.scene

  const box = new THREE.Box3().setFromObject(group)
  const center = box.getCenter(new THREE.Vector3())

  group.position.x += group.position.x - center.x
  group.position.y += group.position.y - center.y
  group.position.z += group.position.z - center.z

  scene.add(group)

  renderer.render(scene, camera)
})
```

> Box3()表示三维空间中的一个轴对齐包围盒，可以通过getCenter()得到中心点坐标。

![GLTFLoader](/three/imgs/GLTFLoader/1.png)