# 创建一个方块

## 方块到场景

```javascript
// 创建几何体
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
// 创建材质
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 })
// 根据几何体和材质创建物体
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
// 将物体添加到场景中
scene.add(cube)
```
一个能在场景中渲染的物体，需要一个几何体（BoxGeometry创建一个方块几何体）和一个材质（MeshBasicMaterial创建一个基础材质）。

## 方块的操作
```javascript
// 位置
cube.position.z += 0.01
// 也可以直接改变位置
cube.position.set(0, 0, 5)

// 缩放
cube.scale.x = 3
// 等价
cube.scale.set(3, 1, 1)

// 旋转
cube.rotation.x = -Math.PI/2
// 等价（XYZ表示旋转顺序的字符串）
cube.rotation.set(-Math.PI/2, 0, 0, "XZY")
```