let counter = 0
let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)

function cliclkEvent() {
    console.log(this.Id)
    if (this.Id == "increase") {
        counterDOM.innerHTML = counter +=1

    } else {
        counterDOM.innerHTML = counter -=1
    }
}