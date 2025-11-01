// import classes
import {
  BoxBufferGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "https://cdn.skypack.dev/three@0.132.2";

// get a reference to the container element that will hold our scene
const container = document.querySelector("#scene-container");

// create scene
const scene = new Scene();

// set scene's background color
scene.background = new Color("skyblue");

// construct a camera using PerspectiveCamera
const fov = 35; // field of view
const aspect = container.clientWidth / container.clientHeight; // aspect  ratio
const near = 0.1; // near clipping plane
const far = 100; // far clipping plane

const camera = new PerspectiveCamera(fov, aspect, near, far);

// every object is initially created at (0,0,0)
// move the camera back so we can view the scene
camera.position.set(0, 0, 10);

// create a geometry
const geometry = new BoxBufferGeometry(2, 2, 2);

// craete a default (white) basic material
const material = new MeshBasicMaterial();

// craete a mesh containing the geometry and material
const cube = new Mesh(geometry, material);

// add the mesh to the scene
scene.add(cube);

// create the renderer
const renderer = new WebGLRenderer();

// set the renderer to the same size as our container element
renderer.setSize(container.clientWidth, container.clientHeight);

// set the pixeel ratio so that our scene will look good on HiDPI displays
renderer.setPixelRatio(window.devicePixelRatio);

// add the automatically created <canvas> element to the page
container.append(renderer.domElement);

// render, or 'create a still image', of the scene
renderer.render(scene, camera);
