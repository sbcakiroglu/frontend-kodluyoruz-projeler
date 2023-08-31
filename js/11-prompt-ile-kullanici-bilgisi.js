let fullName = prompt("Lutfen Adinizi Girin")

let greeting = document.querySelector("#greeting")

greeting.innerHTML = `${greeting.innerHTML} <small style ="color:red">${fullName}</small>`