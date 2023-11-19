let userName = prompt("Kullanici Adinizi girin.")
let info = document.querySelector("#info")

//ternary kullanımı:
//kosul ? dogruysa : yanlissa

info.innerHTML = '${userName 0 ? userName : "Kullanici Bilgisi Bulunamadi."}'