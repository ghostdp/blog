# 包围盒
BoxHelper用于图形化地展示对象世界轴心对齐的包围盒的辅助对象。
```javascript
const geometry = new THREE.SphereGeometry( 1, 32, 32 )
const material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true })
const sphere = new THREE.Mesh(geometry, material)
const box = new THREE.BoxHelper(sphere, 0x0000ff)
scene.add(sphere)
scene.add(box)
```
![BoxHelper](/three/imgs/BoxHelper/1.png)