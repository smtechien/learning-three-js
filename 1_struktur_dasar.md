# Struktur Dasar Aplikasi Three.js

Aplikasi three.js secara sederhana dapat ditampilkan melalui file html biasa
dan tentu dengan bantuan module javascript three.js.

Hal paling utama adalah menyediakan container untuk meload grafik
three js pada file html. Di [https://discoverthreejs.com/book/first-steps/app-structure/]
dicontohkan untuk menggunakan tag div seperti contoh berikut.

```html
<div id="scene-container"></div>
```

Tutorial ini menyarankan untuk menggunakan warna background serupa
dengan model yang dimuat. Hal ini disebabkan saat model sedang dimuat
container akan ditampilkan kosong sebagaimana biasanya, jika warnanya
berbeda dengan scene yang ditampilkan model, perpindahan saat model
belum dan sudah dimuat akan terlalu tampak atau tidak smooth.
