let laptop1 ={
brand: "Apple",
model: "MacBook Pro",
"2kg": 2,
modelName: "MacBook Pro",
// model—name: - "MacBook Pro”,
model_name: "MacBook Prol"
}
console.log(laptop1)

console.log( laptop1.brand, laptop1 ["brand"])
console.log( laptop1.model, laptop1 ["model"] )
console.log( laptop1 ["2kg"] )

laptop1.brand = "Mac"
laptop1 ["brand"] = "Mac1"
console.log(laptop1)

laptop1.version =  "15.7.3"
console.log( laptop1)

keys = Object.keys(laptop1) 
console.log(laptop1)
console.log(Object.keys(laptop1))

keys.forEach (keyInfo => {
    console.log ( keylnfo)
    console.log ( laptop1 [keylnfo] )
} )

console. log(
    Object.values ( laptop1)
)
    
let values =  Object.values( laptop1)
values.forEach(value => {
    console.log("value:", value)
})    

let setting = {
password: 1234,
userName: 'user1'
}