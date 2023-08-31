//let h2 = document.getElementsByTagName('h2')

let title = document.getElementById('title')
title.innerHTML = "Değişen Bilgi"
console.log(title.innerHTML)

let link = document.querySelector("ul#list>li>a")
link.innerHTML += " değişti"
link.style.color = "red"
link.classList.add('btn')