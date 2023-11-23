
// 5 harften fazla olanlar ??

const PRODUCTS = ["Mic", "Cable", "Speaker", "Desktop PC", "Server" ,"Mouse" ,"Keyboard"]

const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5)
console.log(NEW_PRODUCTS)

// aktif kullanicilar ??

const USERS = [
    {fullName: "Ahmet Urgan", isActive : true},
    {fullName: "Asya Basar",  isActive: false},
    {fullName: "Aksel Durmaz", isActive: false}

]    
const ACTIVE_USERS = USERS.filter(user => isActive)
console.log(ACTIVE_USERS )