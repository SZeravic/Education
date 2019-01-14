/* Dodati referencu na klik na "shopping-card" ikonu
  kojom se dodaje klasa 'active' "shopping-card-menu" elementu */
const ikona = document.getElementById('shopping-card');
ikona.addEventListener('click', () => {
  const sideMenu = document.getElementById('shopping-side-menu');
  sideMenu.classList.toggle('active');
});

// Funkcija koja će postaviti broj pokraj ikone košarice ovisno o tome šta je u košarici
function setShopIconCount() {
  const countCircle = document.getElementById('shopping-count');
  let totalCount = 0;
  // Prvo dohvati sve 'shopping-item'-e iz košarice
  const itemsInShop = document.querySelectorAll(
    '#shopping-side-menu .shopping-item'
  );
  for (let i = 0; i < itemsInShop.length; i++) {
    const itemInShop = itemsInShop[i];
    // Za svakog dohvati količinu
    const itemCount = itemInShop.querySelector('.amount-box p').textContent;
    totalCount += parseInt(itemCount);
  }
  // Zapiši dobiveni 'count' u žuti krug pokraj ikone košarice
  countCircle.textContent = totalCount;
}

// Dohvatiti listu svih <button> elemenata unutar <article> elemenata
const buttonList = document.querySelectorAll('article button.pizza-button');
// Dodati referencu na klik na svaki dohvaćeni "button"
for (let i = 0; i < buttonList.length; i++) {
  const button = buttonList[i];
  // Referenca na funkciju "handleButtonClick" koja automatski šalje "event" parametar
  button.addEventListener('click', handleButtonClick);

}


/* Funkcija koja prepoznaje koji se "button" kliknuo,
  i kupi informacije iz te kartice (naziv pizze i cijenu) */
function handleButtonClick(e) {
  // Dohvati "button" koji je kliknut
  const clickedButton = e.currentTarget;

  // Pronađi njegovog roditelja preko kojeg ćemo prikupiti naziv i cijenu pizze
  const pizzaCard = clickedButton.parentElement;
  const pizzaName = pizzaCard.querySelector('h3').textContent;
  const pizzaPrice = pizzaCard.querySelector('span > em').textContent;

  /* "pizzaPrice" je zapravo string npr. "24,00 kn", pa je potrebno uzeti samo prvi dio,
    tj. riješiti se ovog "kn" dijela koristeći split() */
  const onlyPrice = pizzaPrice.split(' ')[0];

  /* Kreirati objekt sa svim podacima za pizzu i proslijediti ga fukciji "createNewShopItem()"
    koja će "iscrtati" element u "shopping-side-menu"-u */
  const pizzaData = {
    name: pizzaName,
    price: onlyPrice
  };
  var PizzaID = pizzaName.toLowerCase();
  // Kreiraj novi element u shopping košarici
  var GetPizza = document.getElementById(pizzaName.toLowerCase());
  if(GetPizza)
  {
    let amountText = GetPizza.querySelector('.amount-box > p');
    let amountValue = Number(amountText.textContent);
    amountText.textContent = amountValue + 1;
  }
  else{
     createNewShopItem(pizzaData);
  }

  // Pozovi funkciju koja će ponovno izračunati broj pokraj ikone košarice
  setShopIconCount();
  calculateTotalPrice();
}



function createNewShopItem(pData) {
  /* 1. način pristupa:
    Prvo se kreira HTML element (tag) koji želimo (u ovom slučaju <div>), 
    zatim mu dodajemo atribute i na kraju "append"-amo sadržaj koji želimo */
  const shopItem = document.createElement('div');
  shopItem.setAttribute('class', 'shopping-item'); // shopItem.classList.add('shopping-item');
  shopItem.setAttribute('id', pData.name.toLowerCase());
  const shopItemHeading = document.createElement('h3');
  shopItemHeading.textContent = pData.name;
  shopItem.appendChild(shopItemHeading);
  const shopItemDelete = document.createElement('i');
  shopItemDelete.setAttribute('class', 'fas fa-times close');
  shopItem.appendChild(shopItemDelete);
  shopItemDelete.addEventListener('click', removeShopItem);

  /* 2. način pristupa: (da ne kreiramo svaki element pojedinačno) 
    Kreiramo dugi HTML string i njega postavimo kao "innerHTML" njegovog roditelja */
  const shopItemDescription = document.createElement('div');
  shopItemDescription.setAttribute('class', 'description');
  const descriptionInnerHTML = `
    <div class="cijena">
      <small>Cijena:</small>
      <p>${pData.price}</p>
    </div>
    <div class="kolicina"> 
      <small>Količina:</small>
      <div class="amount-box">
        <button class="minus"><i class="fas fa-minus"></i></button>
        <p>1</p>
        <button class="plus"><i class="fas fa-plus"></i></button>
      </div>
    </div>`; // Template Literals
  shopItemDescription.innerHTML = descriptionInnerHTML;
  shopItem.appendChild(shopItemDescription);

  // Pozvati funkciju koja će "append"-ati novi element u "shopping" listu
  addNewItemToShopList(shopItem);

  const plusList = document.querySelectorAll('button.plus');
  for (let i = 0; i < plusList.length; i++) {
    const button_plus = plusList[i];
    button_plus.addEventListener('click', handlePlusButtonClick);
  }

  const minusList = document.querySelectorAll('button.minus');
  for (let i = 0; i < minusList.length; i++) {
    const button_minus = minusList[i];
    button_minus.addEventListener('click', handleMinusButtonClick);
  }
  
}

function addNewItemToShopList(newItem) {
  const shopSideMenu = document.getElementById('side-menu-items');
  shopSideMenu.appendChild(newItem);
}

function removeShopItem(e){
  const clickedButton = e.currentTarget;
  const obtain_item = clickedButton.parentElement;
  obtain_item.remove();
  calculateTotalPrice();
  setShopIconCount();
}


function calculateTotalPrice(){
  var total = 0;
  var obtain_items = document.querySelectorAll('#shopping-side-menu .shopping-item');

  for (let i = 0; i < obtain_items.length; i++) {
    const item = obtain_items[i];
    const counter = item.querySelector('.amount-box p').textContent;
    const price = item.querySelector('.cijena p').textContent;
    total += parseFloat(counter) * parseFloat(price);
  }

  var txt = document.querySelector('.total-price em');
  txt.textContent = total.toFixed(2);
  
}

function handlePlusButtonClick(e){
  console.log('plus');
  const clickedButton = e.currentTarget;
  const plus_item = clickedButton.parentElement;
  let plusText = plus_item.querySelector('.amount-box > p');
  let plusCounter = Number(plusText.textContent);
  plusText.textContent = plusCounter + 1;
  setShopIconCount();
  calculateTotalPrice();
}

function handleMinusButtonClick(e){
  console.log('minus');
  const clickedButton = e.currentTarget;
  const minus_item = clickedButton.parentElement;
  let minusText = minus_item.querySelector('.amount-box > p');
  let minusCounter = Number(minusText.textContent);
  minusText.textContent = minusCounter - 1;
  if(minusText.textContent < 1)
  {
    minusText.textContent = 1;
  }
  setShopIconCount();
  calculateTotalPrice();
}
