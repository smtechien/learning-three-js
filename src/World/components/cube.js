import {
  BoxBufferGeometry,
  Mesh,
  MeshStandardMaterial,
  MathUtils,
} from "https://cdn.skypack.dev/three@0.132.2";

function createCube() {
  const geometry = new BoxBufferGeometry(2, 2, 2);
  const material = new MeshStandardMaterial({ color: "purple" });

  const cube = new Mesh(geometry, material);

  // expereminte medium, menambahkan cubeB / meshB
  const geometryB = new BoxBufferGeometry(1, 1, 1);
  const materialB = new MeshStandardMaterial({ color: "red" });
  const cubeB = new Mesh(geometryB, materialB);

  cube.add(cubeB);

  cube.rotation.x = MathUtils.degToRad(20);
  cube.rotation.y = MathUtils.degToRad(20);

  cubeB.position.set(0, 0.9, 0);
  cubeB.rotation.x = MathUtils.degToRad(20);

  return cube;
}

export { createCube };
