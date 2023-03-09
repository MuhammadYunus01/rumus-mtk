const persegiPanjang = (panjang,lebar) => {
    const luas = panjang*lebar
    return luas
}

const jajarGenjang = (alas,tinggi) => {
    const luas = alas*tinggi
    return luas
}

const segitiga = (alas,tinggi) => {
    const luas = alas*tinggi/2
    return luas
}

const panjang = prompt("masukkan panjang","satuan panjang");
const lebar = prompt("masukkan lebar", "satuan panjang");
const alas = prompt("masukkan alas", "satuan panjang");
const tinggi = prompt("masukkan tinggi", "satuan panjang");


const luasPersegiPanjang = (persegiPanjang(panjang,lebar));
const luasJajarGenjang = (jajarGenjang(alas,tinggi));
const luasSegitiga = (segitiga(alas,tinggi));

console.log(`luas persegi panjang : ${luasPersegiPanjang}`);
console.log(`luas jajar genjang : ${luasJajarGenjang}`);
console.log(`luas segitiga : ${luasSegitiga}`);