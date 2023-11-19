let firstName = "Lorem"

function greetings(firstName = "", lastName = "") {
        console.log('merhaba ${firstName}')
        console.log('merhaba ${firstName} ${lastName}')
}
console.log(firstName)
greetings()
greetings("Parametre")

function greetings2(firstName = "", lastName = "") {
    let info = 'merhaba ${firstName} ${lastName}'
    return info
}

let greetingsInfo = greetings2("Ad","Soyad")
console.log(greetingsInfo)

function domIdWriteInfo(id,info) {
    let domObject= document.querySelector('#${id}')
    domObject.innerHTML = info
}
