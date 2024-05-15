# 画布自适应屏幕大小

默认情况下，当改变浏览器大小的时候，画布并不会跟着进行自适应。

一般情况下，浏览器在改变大小的时候，都会触发JavaScript的resize事件。

```javascript
// 监听画面变化，更新渲染画面
window.addEventListener("resize", () => {
  // 更新摄像头
  camera.aspect = window.innerWidth / window.innerHeight;
  // 更新摄像机的投影矩阵
  camera.updateProjectionMatrix();
  
  // 更新渲染器
  renderer.setSize(window.innerWidth, window.innerHeight);
});
```