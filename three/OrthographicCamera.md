# 正交摄像机（OrthographicCamera）

无论物体距离镜头远近，最终渲染出的大小不变。

```javascript
// 透视
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
// 正交
const aspect = window.innerWidth / window.innerHeight
const size = 32 // 你可以根据需要调整这个值
const camera = new THREE.OrthographicCamera(
  -size, // left
  size, // right
  size / aspect, // top
  -size / aspect, // bottom
  0.1, // near (通常设置为一个较小的值)
  1000 // far (与透视相机中的far相似，但不影响物体大小)
)
```

透视效果如下：
![PerspectiveCamera](/three/imgs/OrthographicCamera/1.png)

正交效果如下：
![OrthographicCamera](/three/imgs/OrthographicCamera/2.png)