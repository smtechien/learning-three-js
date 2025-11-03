import { PerspectiveCamera } from "https://cdn.skypack.dev/three@0.132.2";

function createCamera() {
  const camera = new PerspectiveCamera(
    35, // fov
    1, // aspect ratio
    0.1, // near clipping plane
    100, // far clipping plane
  );

  camera.position.set(0, 0, 10);

  return camera;
}

export { createCamera };
