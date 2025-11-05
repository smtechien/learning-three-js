import { DirectionalLight } from "https://cdn.skypack.dev/three@0.132.2";

function createLights() {
  const light = new DirectionalLight("white", 8);

  // pindah  posisi cahaya ke kanan, atas, dan lebih kedepan.
  light.position.set(10, 10, 10);

  // experiment light.position
  // light.position.set(0, 2, 2);

  return light;
}

export { createLights };
