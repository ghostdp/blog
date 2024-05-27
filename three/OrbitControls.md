# 轨道控制器

OrbitControls可以使得相机围绕目标进行轨道运动。可以通过拖拽鼠标改动物体位置。

```javascript
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
...
const controls = new OrbitControls(camera, renderer.domElement)
controls.addEventListener('change', function() {
  renderer.render(scene, camera)
})
```
> 注：只要`renderer.render(scene, camera)`重新触发就可以改变位置。

也可以通过添加坐标轴辅助器，红色代表 X 轴，绿色代表 Y 轴，蓝色代表 Z 轴。
```javascript
const axesHelper = new THREE.AxesHelper(3)
scene.add(axesHelper)
```

![OrbitControls](/three/imgs/OrbitControls/1.png)