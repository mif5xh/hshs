import { menuArray } from './scripts/arrays.js'





  let html = ''
  menuArray.forEach((array)=> {
    html += `<div class="menu">
    <div class="emoji-div">${array.emoji}</div>
    <div class="details">
      <h2>${array.name}</h2>
      <h4>${array.ingredients}</h4>
      <h4>$${array.price}</h4>
    </div>
    <button class="add-btn js-increment" data-product-id="${array.id}">+</button>
  </div>
`
  })
  

document.getElementById('container').innerHTML = html

document.addEventListener('click', (e)=> {
  if (e.target.dataset.productId){
    handleClick(e.target.dataset.productId)
  }
  
})

let orders = []
function handleClick (param) {
  let matchingOne;
  menuArray.forEach((array)=> {
    if (param == array.id){
      matchingOne = array
    }
  })
  if (!orders.includes(matchingOne)){
    orders.push(matchingOne)
  } else{

  }
  let orderHTML = ''
  orders.forEach((order)=> {
    orderHTML += `<div class="selected selection-${order.id}">
    <div class="items">
      <span class="meal">${order.name}</span>
      <button class="delete-btn">remove</button>
    </div>
      <p class="cost">$${order.price}</p>
  </div>`
  })
  document.getElementById('footer').innerHTML = orderHTML
}




 


      

  


