const KULLANICILAR = ["Ayşe", "Melih", "Hakan", "Ecem"];

const YENI_KULLANICILAR = KULLANICILAR.map(kullanici => kullanici.toLowerCase());
console.log(YENI_KULLANICILAR);

const KULLANICI_OBJELERI = KULLANICILAR.map(item => ({
    kullaniciAdi: item,
    kisaAd: `${item[0]}.`,
    yeniAd: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
}));

console.log(KULLANICI_OBJELERI);
