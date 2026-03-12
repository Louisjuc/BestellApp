let numberIndex = 1;

function foodTemplate(index){
    return `        <section id="food_template_section">
    <div class="food_card">
    <div class="food_info">
        <img src="./assets/img/${foods[index].img}" class="food_img">
        <div>
        <h3>${foods[index].name}</h3>
        <p>${foods[index].description}</p>
        </div>
    </div>
        <div class="buy_area">
        <p>${foods[index].price.toFixed(2) + "€"}</p>
        <button class="buy" onclick="addtoBasket(${index}, this)">Add to basket</button>
    </div>
    </div>
</section>
    `
}

function itemTemplate(index){
    return ` <div class="item">
    <h4>${foods[index].name}</h4>
    <section class="basket_numbers">
    <img src="./assets/icons/delete.svg" class="delete">
    <p class="food_counter">${numberIndex}</p>
    <button class="add_item" onclick="addItem(${index})">+</button>
    <p>${foods[index].price.toFixed(2) + "€"}</p>
    </section>
   </div> 
    `
}