function foodTemplate(index){
    return `        <section id="food_template_section">
    <div class="food_card">
        <img src="./assets/img/Rectangle 10-1.png" class="food_img">
        <div>
        <h3>${foods[index].name}</h3>
        <p>${foods[index].description}</p>
    </div>
        <div class="buy_area">
        <p>${foods[index].price}</p>
        <button class="buy">Add to basket</button>
    </div>
    </div>
</section>
    `
}