//Dohvatiti "shopping-card" element
const ikona = document.getElementById('shopping-card');
ikona.addEventListener('click',()=> {

    const sideMenu=document.getElementById('shopping-side-menu');
    sideMenu.classList.toggle('active');

    //Zad:Provjerit da li "sideMenu" ima klasu 'active'
    //ako nema klasu dodaj mu je,ako ima izbrisi

    //imaKlasu je ili true ili false    
    /*let imaKlasu=sideMenu.classList.contains('active');
    if(imaKlasu){
        sideMenu.classList.remove('active');
    } else{
        sideMenu.classList.add('active');
    } */
});
var count = 0;
const shopCount = document.querySelector('#shopping-count');
shopCount.innerHTML=count;
function incrementCount(){
count++;
shopCount.innerHTML=count;
}
//poziv fcije
//incrementCount();

let cardButtons= document.querySelectorAll('article .pizza-button');
for (let i = 0; i < cardButtons.length; i++){
    const button = cardButtons[i];
button.addEventListener('click', handleButtonClick);
}

function handleButtonClick(e){
incrementCount();
   let clickedButton = e.currentTarget;
   // console.log(clickedButton);
   let pizzaCard = clickedButton.parentElement;
   let pizzaName = pizzaCard.querySelector('h3').textContent;
   // console.log(pizzaName);
   let pizzaPrice = pizzaCard.querySelector('span em').textContent;
   // console.log(pizzaPrice);
   // ako zelimo bez "kn" ispisat
   let onlyPrice = pizzaPrice.split(' ')[0];
   // console.log(onlyPrice);
   let pizzaData = {
    ime: pizzaName,
    cijena: onlyPrice,
   };
   createNewShopItem(pizzaData);
}

function createNewShopItem(podaci){}
