function foodTemplate(index) {
  return `<section id="food_template_section">
    <div class="food_card">
    <div class="food_info">
        <img src="./assets/img/${
          foods[index].img
        }" class="food_img" alt="Food image">
        <div>
        <h3>${foods[index].name}</h3>
        <p class="food_description">${foods[index].description}</p>
        </div>
    </div>
        <div class="buy_area">
        <p class="item_price">${foods[index].price.toFixed(2) + "€"}</p>
        <button class="add" onclick="addtoBasket(${index}, this)">Add to basket</button>
    </div>
    </div>
</section>
    `;
}

function itemTemplate(index) {
  return `<div class="item" data-object-number="${index}">
    <h4>${foods[index].name}</h4>
    <section class="basket_numbers">
    <img src="./assets/icons/delete.svg" class="delete" onclick="deleteItem(${index}, this)">
    <img src="./assets/icons/minus.svg" class="food_card_icon" onclick="removeItem(${index}, this)">
    <p class="food_counter">1</p>
    <img src="./assets/icons/plus.svg" class="food_card_icon" onclick="addItem(${index}, this)">
    <p class="item_price" >${foods[index].price.toFixed(2) + "€"}</p>
    </section>
   </div> 
    `;
}

function calculatorTemplate() {
  return `<h3>Subtotal: <span id="subtotal_number" class="orange"></span></h3>
  <h3>Delivery Fee: <span class="orange">4,99€</span></h3>
   <h3 class="total">Total: <span class="total_number orange"></span></h3> 
   <button id="buy_items"  onclick="clearBasket()">Buy now <span class="total_number"></span></button>  `;
}
