let username = prompt("Kullanici Adinizi Giriniz:")
// eger kullanıcı bilgisi varsa ekrana yazdır 
// eger (username.lenght > 0) {console.log(username)} degilse {console.log("bilgi yok")}
// if (username.lenght > 0) {console.log(username)} else {console.log("bilgi yok")}

if (username.lenght > 0) {
    console.log('Kullanici adiniz ${username}')
} else {
    console.log("bilgi yok")
}
