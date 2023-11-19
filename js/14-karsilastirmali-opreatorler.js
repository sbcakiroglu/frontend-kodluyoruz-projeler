let price = "100"
let user = "guest"

// == eşitse demek
console.log("== :",orice == 1)
console.log("== :",orice == 100)

// === hem değeri hem de türü eşitse
console.log("== :",orice === 1)
console.log("== :",orice === 100)

// != eşit değilse
console.log(orice != "hakan")

// < küçükse
console.log("price < 100",orice < 100)

// küçük eşitse
console.log("price <= 100",orice <= 100)

// büyükse >
console.log("price > 200",orice > 200)

// büyük veya eşitse
console.log("price >= 100",orice >= 100)

// && ve
price = 0
console.log(price > 0 && user != "guest")

// || veya
console.log(price < 100 || user != "guest")

// ! değil(tersi)
console.log( !(orice < 100 && user != "guest") )