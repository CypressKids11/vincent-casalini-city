import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const renderer = new THREE.WebGL1Renderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const loader = new GLTFLoader();

const controls = new OrbitControls( camera, renderer.domElement );

loader.load("./city.glb",function(gltf){
    scene.add(gltf.scene);
});

const light1 = new THREE.PointLight(0x00ff00, 10000000)
light1.position.set(0,69420,0)
scene.add(light1)

const light = new THREE.AmbientLight(0xffffff);
scene.add(light);
camera.position.z = 5;
controls.update();

function animate() {
    requestAnimationFrame( animate );
    controls.update()
    renderer.render( scene, camera );
}
animate();