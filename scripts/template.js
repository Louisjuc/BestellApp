function foodTemplate(index) {
  return `        <section id="food_template_section">
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
        <button class="buy" onclick="addtoBasket(${index}, this)">Add to basket</button>
    </div>
    </div>
</section>
    `;
}

function itemTemplate(index) {
  return ` <div class="item" data-object-number="${index}">
    <h4>${foods[index].name}</h4>
    <section class="basket_numbers">
    <img src="./assets/icons/delete.svg" class="delete" onclick="deleteItem(${index}, this)">
    <p class="delete" onclick="removeItem(${index}, this)">-</p>
    <p class="food_counter">1</p>
    <p class="add_item" onclick="addItem(${index}, this)">+</p>
    <p class="item_price" >${foods[index].price.toFixed(2) + "€"}</p>
    </section>
   </div> 
    `;
}
