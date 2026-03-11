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
        <p>${foods[index].price}</p>
        <button class="buy">Add to basket</button>
    </div>
    </div>
</section>
    `
}