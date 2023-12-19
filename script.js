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

const geometry = new THREE.BoxGeometry( 2.5, 2.5, 2.5);
const material = new THREE.MeshLambertMaterial( { color: 0xffffff} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const light = new THREE.PointLight(0x00ff00, 100000)
light.position.set(0,20,0)
scene.add(light)

const ambientLight = new THREE.AmbientLight(0xaaaaaa)
scene.add(ambientLight)

loader.load("./bloxy-cola.gtlf",function(gltf){
    scene.add(gltf.scene);
});

camera.position.z = 6;
controls.update()

function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.05;
    cube.rotation.y += 0.05;
    controls.update()
    renderer.render( scene, camera );
}
animate();