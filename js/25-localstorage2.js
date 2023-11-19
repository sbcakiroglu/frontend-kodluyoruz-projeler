let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter') ) : 0 
let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)

function cliclkEvent() {
    this.Id == "increase" ? counterDOM.innerHTML = counter +=1 : counter -=1
    localStorage.setItem('counter', counter)
    counterDOM.innerHTML = counter
}