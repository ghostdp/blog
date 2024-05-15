# 给方块每个面添加不同的颜色

通过创建多个材质，并在创建物体的时候，设置第二个参数为数组项即可。

```javascript
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material1 = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const material2 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const material3 = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
const material4 = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const material5 = new THREE.MeshBasicMaterial( { color: 0xff00ff } );
const material6 = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
const cube = new THREE.Mesh( geometry, [material1, material2, material3, material4, material5, material6] );
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