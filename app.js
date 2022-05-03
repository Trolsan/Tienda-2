
products.map(element=>{console.log(element.name)})

const selectProducts = document.getElementById ('select-products')

window.addEventListener('load',loadSelect)

const main = document.getElementById('main-market')

selectProducts

function elementSelected(event){
    
}

function loadSelect() {
    products.map(element =>{

        const opt = document.createElement('option')
        opt.textContent = element.name
        opt.value = element.name
        select.appendChild(opt)

    })
    
}


// function createCard(nameProduct, imgProduct, priceProduct){
//     const card = document.createElement('div')
//     const imgCard = document.createElement('img')
//     const title = document.createElement('h3')
//     const price = document.createElement('p')
//     imgCard.setAttribute('src',imgProduct)
//     imgCard.setAttribute('alt',nameProduct)
//     title.textContent = nameProduct
//     price.textContent = priceProduct
//     card.appendChild(imgCard)
//     card.appendChild(title)
//     card.appendChild(price)
//     main.appendChild(card)
//     card.classList.add("carddPrueba")
// }
