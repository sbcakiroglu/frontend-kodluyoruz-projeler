
// 

let email = "sbc@gmail.com"
let firstName = "safa"
let lastName = "CAKIROGLU"

//string karakter sayisi -> length
console.log( email.length)

// ilk karakterini bulmak:
console.log( firstName[0])
console.log(firstName.charAt(0))

//buyuk harf / kucuk harf:
firstName = firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLowerCase()
console.log(firstName)

//string icinde istedigimiz bilgiyi aramak ve yerini bulmak:
console.log(email.search("@"))
console.log(email[15])

email.search('olmayan') // -1

//belli bir yere kadar olanı almak:
let DOMAIN = email.slice(email.search("@") + 1)
console.log(DOMAIN)

console.log(
    DOMAIN.slice(0, DOMAIN.indexOf('.') ) //sadece gmail kısmı
)

//bilgiyi değiştir
email = email.replace('gmail.com', 'kodluyoruz.org')
console.log(email)

//istediğim bilgi var mı:
email.includes('@') // true

//istedigim bilgiyle basladı mı? bitti mi?
console.log(
    email.endsWith('kodluyoruz.org')
)

//ilk harfler ibuyuk yapma:
firstName = "FIRST"
lastName = "LAST"
let fullName = ` ${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase}`
console.log(fullName)