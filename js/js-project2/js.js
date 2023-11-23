document.addEventListener("DOMContentLoaded", function () {
    const ulDOM = document.getElementById("list");
    var hazirList = [
      "3 Litre Su İç",
      "Ödevleri Yap",
      "En Az 3 Saat Kodlama Yap",
      "Yemek Yap",
      "50 Sayfa Kitap Oku"
    ];
    let x = localStorage.getItem("listItem") ? JSON.parse(localStorage.getItem("listItem")) : [];
  
    // Liste oluştur
    function renderList() {
      ulDOM.innerHTML = "";
      x.forEach(function (item) {
        var liDOM = document.createElement("li");
        liDOM.textContent = item;
        ulDOM.appendChild(liDOM);
        addCloseButton(liDOM);
      });
    }
  
    // Hazır liste var mı kontrol et
    if (x.length === 0) {
      hazirList.forEach(function (item) {
        x.push(item);
      });
      renderList();
    } else {
      renderList();
    }
  
    // Yeni eleman ekle
    function newElement() {
      var inputDOM = document.getElementById("task").value.trim();
      if (inputDOM && inputDOM !== "") {
        x.push(inputDOM);
        localStorage.setItem("listItem", JSON.stringify(x));
        renderList();
        $('#liveToast1').toast('show');
        document.getElementById("task").value = "";
      } else {
        $('#liveToast2').toast('show');
      }
    }
  
    // Liste elemanlarına çarpı butonu ekle
    function addCloseButton(li) {
      var span = document.createElement("span");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);
  
      span.onclick = function (event) {
        var div = this.parentElement;
        div.style.display = "none";
        x.splice(x.indexOf(div.textContent), 1);
        localStorage.setItem("listItem", JSON.stringify(x));
      };
    }
  
    // Liste elemanlarına click event ekle
    ulDOM.addEventListener("click", function (event) {
      var target = event.target;
      if (target.tagName === "LI") {
        target.classList.toggle("checked");
      }
    });
  
    // Ekle butonuna click event ekle
    document.getElementById("liveToastBtn").addEventListener("click", newElement);
  });
  