let greeting = document.querySelector("#greeting")
greeting.addEventListener("click", domclick)

function domclick() {
    console.log("etkinlik denetlendi")
    this.style.color == "red" ? this.style.color == "black" : this.style.color == "red"
}