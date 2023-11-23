// Menü öğelerini içeren dizi
const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: "Fish cake ile servis edilen baharatlı pirinç kekleri."
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: "Sebzelerle servis edilen tavuklu noodle çorbası. İsteğe bağlı olarak yumurta eklenebilir."
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:"https://media.istockphoto.com/id/1168154855/tr/foto%C4%9Fraf/dan-dan-noodles-tuzlu-ve-baharatl%C4%B1-sichuan-eri%C5%9Fte-tabakta-k%C4%B1yma-closeup-ile-servis-edilir.jpg?s=2048x2048&w=is&k=20&c=POcWmQeO6sCk3Ud6izQzIEZCGAXDWfWnSMflxklebCg=",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

// HTML içinde menü öğelerini gösterecek olan liste bölümü
const list = document.getElementById('list');

// Tüm menü öğelerini yükle
window.addEventListener('DOMContentLoaded', function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

// Menü öğelerini HTML içine yerleştir
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `
      <div class="menu-item col-md-6 col-lg-4">
        <div class="card">
          <img src="${item.img}" class="card-img-top" alt="${item.title}">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.desc}</p>
            <p class="card-price">$${item.price}</p>
          </div>
        </div>
      </div>`;
  });

  displayMenu = displayMenu.join('');
  list.innerHTML = displayMenu;
}

// Kategori filtreleme butonlarını göster
function displayMenuButtons() {
  const categories = menu.reduce(function (values, item) {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }

    return values;
  }, ['Tümü']);

  const btnContainer = document.querySelector('.btn-container');
  const categoryBtns = categories.map(function (category) {
    return `<button type="button" class="btn btn-outline-dark btn-item" data-id="${category}">${category}</button>`;
  }).join('');

  btnContainer.innerHTML = categoryBtns;

  const filterBtns = document.querySelectorAll('.btn-item');

  // Kategori butonlarına filtreleme işlevi ekle
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (item) {
        if (item.category === category) {
          return item;
        }
      });

      if (category === 'Tümü') {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}