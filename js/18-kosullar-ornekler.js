let examGradee = prompt("puani girin.")
let textInfo;

if(examGradee >= 0 && examGradee <= 100) {
    if(examGradee >= 90) {
        textInfo = "AA"
    } else if(examGradee >= "85") {
        textInfo = "BA"
    } else if(examGradee >= "80") {
        textInfo = "BB"
    } else if(examGradee >= "75") {
        textInfo = "CB"
    } else if(examGradee >= "70") {
        textInfo = "CC"
    } else if(examGradee >= "65") {
        textInfo = "DC"
    } else if(examGradee >= "60") {
        textInfo = "DD"
    } else if(examGradee >= "50") {
        textInfo = "FD"
    } else if(examGradee < "50") {
        textInfo = "FF"
    } 
} else {
    textInfo = "Bilgielr dogtu değil."
}

let info = document.querySelector("#info")
info.innerHTML = '${textInfo} -> ${examGrade}'