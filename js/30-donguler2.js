const LOREM_LIST = ['ipsum','remi','dolor','amet',' consecteturv','ladipisicingl', 'elit']

//let counter
//for ( ; counter < 1 0; counter++) {
//    console. log ( counter)
//    if (counter === 5) {break}
//}

//let counter
//for ( ; counter < 10; counter++) {
//    console. log ( counter)
//    if (counter === 5) {continue}
//}

const UL_DOM = document.querySelector('#userList')
let index = 0

for ( ; index < LOREM_LIST.length; index++) {
    if (LOREM_LIST[index] == "dolor") {break}
    let LI_DOM = document.createElement('li')
    LI_DOM.innerHTML = LOREM_LIST[index]
    UL_DOM.appendChild(LI.DOM)
}