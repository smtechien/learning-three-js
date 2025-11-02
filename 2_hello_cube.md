# My First Three JS App - Hello, Cube

Di sini saya membuat aplikasi three.js pertama saya.
Sangat sederhana, hanya menampilkan satu sisi kubus.

Untuk mencapainya diperlukan minimal 6 tahapan, yang mana
tahapan ini juga merupakan tahapan paling minim untuk membangun
three.js app. Berikut ini tahapannya :

## 1. Persiapan Hal-hal dasar

Yang dipersiapkan adalah mengimport kelas atau objek yang dibutuhkan.
Seperti Canvas, PersperctiveCamera, Mesh, MeshBasicMaterial, dll.
Selain itu, pada tahap ini juga, referensi container dari file HTML
diinisalisasi untuk dapat diakses dan dimanfaatkan sesuai kebutuhan.

## 2. Membuat Scene

Scene merupakan ruang untuk segala yang kita dapat lihat.
Ruang untuk semua objek 3D hidup. Di three.js untuk membuat
scene hanya dengan memanggil objek Scene. Constructornya tidak
memerlukan parameter apapun.

```javascript
import { Scene } from "three";

const scene = new Scene();
```

Scene mendefinisikan ruang dengan sistem kordinat yang disebut
World Space. World space merupakan sebuah sistem kordinat kartesian
3D. Dimana terdapat koordinat untuk X, Y, dan Z, yang membentuk ruang
tiga dimensi.

Setiap objek akan ditaruh pada titik tengah dari scene (0,0,0) yang
disebut juga sebagai origin dari sistem kordinat ini.

## 3. Membuat Kamera

Kamera berfungsi untuk menjadi mata bagaimana ruang 3D tersebut
kita tampilkan atau kita proyeksikan. Ada beberapa jenis kamera
yang bisa dimanfaatkan di three.js, seperti PersperctiveCamera,
OthographicCamera, dll.

Pada proyek ini, yang digunakan adalah PersperctiveCamera.
Di mana kamera ini mirip dengan kamera pada dunia nyata dan
mengggunakan konsep dan terminologi serupa seperti field of view
dan aspect ratio.

Untuk membuat kamera dibutuhkan setidaknya 4 parameter, yaitu

1. field of view
2. aspect ratio
3. near clipping plane
4. far clipping plane

```javascript
import { PersperctiveCamera } from "three";

const fov = 35;
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1;
const far = 100;

const camera = new PersperctiveCamera(fov, aspect, near, far);
```

Melalui empat parameter tersebut, kita bisa membentuk viewing frustrum.

Setelah membentuk kamera, kamera secara otomatis akan ditaruh pada
origin. Begitu juga objek lainnya. Jika tidak diatur posisinya, semua
objek akan saling tindih. Untuk memposisikan kamera bisa dilakukan
dengan dua cara yaitu dengan memberikan nilainya sekaligus, atau
mengatur koordinatnya satu per satu.

```javascript
cameera.position.set(0, 0, 10); // (x, y, z)
```

```javascript
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 10;
```

## 4. Membuat Objek Tampak

Pada tutorial ini objek dibentuk menggunakan Mesh.
Mesh akan dibentuk menjadi kubus sederhana. Mesh dibuat
dengan dua parameter yaitu geometry dan material.

1. Geomeetry mendefinisikan bentuk dari Mesh.
2. Material mendefinisikan properti dari permukaan Mesh.

Di sini, mesh dibentuk menjadi kubus menggunakan BoxBufferGeometry.
BoxBufferGeometry dapat menerima enam parameter, tetapi pada contoh
cukup menggunakan tiga parameter yang menentukan lebar, tingggi,
dan kedalaman saja, sedangkan tiga parameter lainnya dibiarkan
kosong agar menggunakan nilai defaultnya.

```javascript
const geometry = new BoxBufferGeometry(2, 2, 2);
```

Material yang digunakan adalah `MeshBasicMaterial` yang merupakan
materail paling cepat dan sederhana yang tersedia di three.js.
Material ini mengabaikan cahaya dan warna, sehingga tanpa ada
pencahayaan, objek tetep dapat ditampilkan.

Di bawah ini kode untuk membentuk material tersebut secara default.

```javascript
const material = new MeshBasicMaterial();
```

Tahap selanjutnya adalah memanfaatkan geometry dan material yang
telah didefinisikan tersebut untuk membuat kubus. Tidak lupa
juga untuk menambahkannya ke objek scene.

```javascript
const cube = new Mesh(geometry, material);
// add the mesh to the scene
scene.add(cube);
```

## 5. Membuat Renderer

Renderer bertugas untuk menggambarkan apa yang dilihat oleh kamera
ke dalam tag canvas agar tampil di halaman web yang kita buat.
WebGLRenderer digunakan pada tutorial ini.

```javascript
const renderer = new WebGLRenderer();
// set renderer's size
renderer.setSize(container.clientWidth, container.clientHeight);
// set the device pixel ratio
renderer.setPixelRatio(window.devicePixelRatio);
```

Pada kode di atas, ada tambahan berupa setSize dan setPixelRatio.
setSize berguna untuk menentuka ukuran renderer, ini disesuaikan
dengan ukuran scene sehingga objek tampil dengan tepat sesuai
posisi di scene yang telah disusun. Sedangkan, setPixelRatio
bertujuan untuk memberitahu renderer rasio piksel dari layar
perangkat yang menampilkannya. Hal ini untuk memastikan
objek ditampilkan dengan kualitas yang baik, pada layar apapun.

Hasil dari proses render scene tersebut akan disimpan secara otomatis
dalam tag `<canvas>` dan disimpan di `renderer.domElement`.
Untuk menampilkan hasil render tersebut kita perlu menambahkannya
ke halaman web melalui container.

```javascript
container.append(renderer.domElement);
```

## 6. Merender Scene

Tahap terakhir adalah merender scene, hal ini dapat dilakukan
dengan kode berikut.

```javascript
renderer.render(scene, camera);
```
