let settings ={
    userName: "loremlpsum" ,
    password: "BadPassword" ,
    isActive: false,
    ip: "127.0.0.1",
    serverName:"kodluyoruz.org"
}

let  {userName: user, password, isActive, ip:serverIP, serverName} = settings

console.log(user, password, isActive, serverIP, serverName)
console.log (settings)
console.log(user)

//let {userName:userName2, password:password2, isActive:isActive2, ...newSettingsY}= settings

console.log(userName2, password2, isActive2, newSettings)

let  settings2 = {...settings}
settings2.userName = "Degisen Bilgi"
console.log ("settings1", settings)
console.log ("settings2", settings2)

let score =[100, 200, 300, 400]
let [score1, score2, otherScore] = score
console.log(score1, score2, otherScore)

let copy0fScore = [...score]
console.log ( copy0fScore)