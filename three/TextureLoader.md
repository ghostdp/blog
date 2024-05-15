# 纹理贴图

材质采用贴图方式，利用TextureLoader调用它的load方法，同时传入图像的URL，并将材质的map属性设置为该方法的返回值。

```javascript
// 注：Vue中的assets资源需要模块化引入，如果资源在public下可直接使用URL
import header from './assets/header.png'
const loader = new THREE.TextureLoader()
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({
  map: loader.load(header)
})
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)
```

![TextureLoader](/three/imgs/TextureLoader/1.png)