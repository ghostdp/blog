# CircleGeometry

圆形缓冲几何体，它由围绕着一个中心点的三角分段的数量所构造，由给定的半径来延展。

```javascript
const geometry = new THREE.CircleGeometry(1, 32, 0, 2*Math.PI)
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 })
const circle = new THREE.Mesh(geometry, material)
scene.add(circle)
```

CircleGeometry(radius : Float, segments : Integer, thetaStart : Float, thetaLength : Float)
- radius — 圆形的半径，默认值为1
- segments — 分段（三角面）的数量，最小值为3，默认值为8。
- thetaStart — 第一个分段的起始角度，默认为0。（three o'clock position）
- thetaLength — 圆形扇区的中心角，通常被称为“θ”（西塔）。默认值是2*Pi，这使其成为一个完整的圆。

![CircleGeometry](/three/imgs/CircleGeometry/1.png)

