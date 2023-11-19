let user = {userName:"sbcakiroglu", isActive: true} 
console.log(user)
localStorage.setItem('userInfo', JSONstringify(user) )

let userInfo = localStorage.setItem('userInfo')
userInfo = JSON.parse(userInfo)
console.log(userInfo)