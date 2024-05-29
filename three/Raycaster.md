# 光线投射交互操作

可以利用光线投影实现点击交互行为。

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

  const geometry2 = new THREE.BoxGeometry(1, 1, 1)
  const material2 = new THREE.MeshBasicMaterial({ color: 0x0000ff })
  const cube2 = new THREE.Mesh(geometry2, material2)
  scene.add(cube2)
  cube2.position.x = 2

  const geometry3 = new THREE.BoxGeometry(1, 1, 1)
  const material3 = new THREE.MeshBasicMaterial({ color: 0x00ffff })
  const cube3 = new THREE.Mesh(geometry3, material3)
  scene.add(cube3)
  cube3.position.x = -2

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.addEventListener('change', function () {
    renderer.render(scene, camera)
  })
  const raycaster = new THREE.Raycaster()
  const mouse = new THREE.Vector2()
  renderer.domElement.addEventListener('click', function(e){
    mouse.x = (e.pageX / window.innerWidth) * 2 - 1
    mouse.y = -(e.pageY / window.innerHeight) * 2 + 1
    raycaster.setFromCamera(mouse, camera)
    const intersects = raycaster.intersectObjects([cube, cube2, cube3])
    if(intersects.length > 0) {
      if(intersects[0].object._isSelect) {
        intersects[0].object.material.color.set(intersects[0].object._originColor)
      }
      else {
        intersects[0].object._originColor = intersects[0].object.material.color.getHex()
        intersects[0].object.material.color.set(0xff0000)
      }
      intersects[0].object._isSelect = !intersects[0].object._isSelect
    }
    renderer.render(scene, camera)
  }) 
  camera.position.z = 5
```

这里页面对应的鼠标坐标要转换成threejs中的坐标方式（-1, 1坐标系，页面中心点的坐标系为0，0）
```javascript
mouse.x = (e.pageX / window.innerWidth) * 2 - 1
mouse.y = -(e.pageY / window.innerHeight) * 2 + 1
```

![Raycaster](/three/imgs/Raycaster/1.png)