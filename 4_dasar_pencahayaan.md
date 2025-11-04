# Dasar Pencahayaan

Pencahayaan _(lighting)_ dalam three.js dapat menerapkan
_physical based rendering_ yang mana merupakan teknik
rendering memanfaatkan fisika dunia nyata untuk menghitung
bagaimana permukaan suatu objek bereaksi pada cahaya.

Pada three.js PBR dapat dilakukan dengan memanfaatkan material
dan menambahkan sumber cahaya.

Pada three.js ada beberapa tipe cahaya salah duanya adalah

- `DirectionalLight`
- `PointLight`
- `RectAreaLight`
- `SpotLight`

Sebelum menambahkan pencahyaan, ada aiknnya untuk memastikan
bahwa three.js menghitung intensitas pencahayaan tepat secara
fisik. Berbeda dengan PBR, tujuan _physically correct lighting_
adalah menghitung bagaimana pudarnya cahaya dari sumer cahaya
menggunakan _real-world physics equations_.

```javascript
renderer.physicallyCorrectLights = true;
```

Hal yang perlu diperhatikan lainnya adalah bagaimana ukuran
scene yang akan kita gunakan. Untuk memudahkan perhitungan,
anggap 1 unit dalam three.js sebagai 1 meter. Hal ini akan
memudahkan untuk mengatur objek dan bagaimana akurat cahaya
terhadap objek.

Dalam menggunakan light, pastikan sumber cahaya diposisikan
dengan benar. Untuk memposisikannya bisa dengan

```javascript
light.position.set(x, y, z);
```

Material dasar yang dapat bereaksi terhadap cahaya adalah
`MeshStandardMaterial`.

Untuk rotasi objek mesh dapat dilakukan dengan fungsi
`rotation.set`.
