let items = [15, 25, 35, 45]
console.log("items - ilk hali:", items)

// sona eleman ekleme
items.push(50)
console.log("50:", items)

//array basına eleman ekleme
items.unshift(5)
console.log("5:", items)

//array sondaki ogeyi cikarma
let lastItem = items.pop()
console.log("lastItem:", lastItem, "items:", items)

// array abstaki ogeyi cikarma
let firstItem = items.shift()
console.log("firsItem:", firsItem, "items:", items)

// Ar ray icinde Ar ray:
let femaleUsers = ["Ayşe", "Hülya", "Merve"]
let maleUsers = ["Ahmet", "Mehmet", "Veli"]

items.unshift(femaleUsers)
items.push(maleUsers)
console.log(items)

console.log ( items. length)
console.log ( items[0].length)// Array icindeki istedigimiz Ar ray' in length bilgisini aldik
console.log(items[0][0]) // Ayse bilgisine ulaş tik : )

// Ar ray icerisinden oge ayirmak splice(pos, i tem?)
let newItems = items.splice(2, 4)
console.log("newItems", newItems)
console.items("items", items )

// Ar ray Kopyalamak
let copyItems = items
console.log( items)

copyItems.pop()
console.log( items)
console.log( "copyItems" ,copyItems )
console.log("items", items)
