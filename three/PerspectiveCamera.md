# 透视摄像机（PerspectiveCamera）

## 重要的概念

在three.js开发中，有三个非常重要的概念，场景（Scene）、摄像机（Camera）、渲染器（WebGLRenderer）
- 场景（Scene）：用于放置三维物体的
- 摄像机（Camera）：用于观察场景，相当于观察三维物体的眼睛
- 渲染器（WebGLRenderer）：用于把场景、摄像机渲染到浏览器中

示例代码
```javascript
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
camera.position.z = 5;
function animate() {
  requestAnimationFrame( animate );
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render( scene, camera );
}
animate();
```

## PerspectiveCamera参数

透视摄像机是摄像机的其中一种，这一投影模式被用来模拟人眼所看到的景象，它是3D场景的渲染中使用得最普遍的投影模式。

- fov — 摄像机视锥体垂直视野角度
- aspect — 摄像机视锥体长宽比
- near — 摄像机视锥体近端面
- far — 摄像机视锥体远端面

fov越大看到的视野越大，fov越小看到的视野也就越小，这就像小眼睛和大眼睛看到的范围是不同的。

aspect是跟renderer.setSize()保持一致的，这样不会对观察的三维物体进行拉伸。假设renderer.setSize()设置的是宽一些的长方形，那么当aspect比例为1的时候，就会把物体横向拉宽，为了保持一致aspect也要宽高等比设置，这样效果就可以非常好的适配了。

near就是最近能看到的物体在什么位置，far就是最远能看到的物体在什么位置。

![PerspectiveCamera](/three/imgs/PerspectiveCamera/1.png)

```javascript
camera.position.z = 5;
```

默认相机在0点位置，可以通过z轴进行改变相机的位置，z轴为垂直于平面方向。

threejs采用的是右手坐标系
- x轴水平方向: 向右为正
- y轴垂直方向: 向上为正
- z轴内外方向(垂直于xy平面): 向外为正

![coordinate-system](/three/imgs/PerspectiveCamera/2.png)