const main = document.getElementById('main-market');
const selectProducts = document.getElementById("select-products");
const boton = document.getElementsByClassName("button-buy")
window.addEventListener('load', loadSelect);
selectProducts.addEventListener('change', elementSelected);
boton.addEventListener('click',remove);

function remove (){
  // const boton = document.createElement("button")
  // boton.classList.remove("cardPrueba")
  console.log("FUNCIONA");
  
}


function elementSelected(event) {
  // 1. Recorrer el array
  products.map(element => {
    if (event.target.value === element.name) {
      nameProduct = element.name
      imgProduct = element.img
      priceProduct = element.price
      
    }
  })
  createCard(nameProduct, imgProduct, priceProduct)
}

function loadSelect() {
  products.map(element=>{
    const opt = document.createElement('option');
    opt.textContent = element.name;
    opt.value = element.name;
    selectProducts.appendChild(opt);
  });    
}

function createCard(nameProduct, imgProduct, priceProduct) {
  const card = document.createElement('div');
  const imgCard = document.createElement('img');
  const title = document.createElement('h3');
  const price = document.createElement("p");
  const boton = document.createElement("button-buy")
  imgCard.setAttribute('src',imgProduct);
  imgCard.setAttribute('alt',nameProduct);
  title.textContent = nameProduct;
  price.textContent = priceProduct;
  boton.textContent = "ADD CART WAIFU"
  card.appendChild(imgCard);
  card.appendChild(title);
  card.appendChild(price);
  main.appendChild(card);
  card.appendChild(boton)
  card.classList.add("card");
  boton.classList.add("btn-cart")
  boton.classList.add("button-buy")
 

  boton.addEventListener('click',compras)
  
  function compras(){
    alert("Gracias Por La Compra")
    main.removeChild(card)
    
  }

}


products.map(element => { console.log(element.name) });