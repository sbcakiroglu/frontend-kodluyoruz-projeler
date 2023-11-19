const myName = prompt("Lütfen isminizi giriniz:");
const nameElement = document.querySelector("#myName");
nameElement.innerHTML = myName ? ` ${myName}` : "";

function updateTime() {
  const tarih = new Date();
  const gun = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
  const gunName = gun[tarih.getDay()];
  const clock = document.querySelector("#myClock");
  clock.innerHTML = `${tarih.getHours()}:${tarih.getMinutes()}:${tarih.getSeconds()} ${gunName}`;
}

updateTime();
setInterval(updateTime, 1000);
