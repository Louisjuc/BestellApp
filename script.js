function render() {
  burgerRender();
  pizzaRender();
  saladRender();
}

let mobileCounter = document.getElementById('item_counter_mobile');

let buyButton = document.getElementById('buy_items');
buyButton.disabled = true;

function renderCategory(Rendercategory, menuName) {
  let contentRef = document.getElementById(menuName);
  contentRef.innerHTML = "";

  foods.forEach((food, Itemindex) => {
    if (food.category === Rendercategory) {
      contentRef.innerHTML += foodTemplate(Itemindex);
    }
  });
}

function pizzaRender() {
  renderCategory("pizza", "pizza_menu");
}

function saladRender() {
  renderCategory("salad", "salad_menu");
}

function burgerRender() {
  renderCategory("burger", "burger_menu");
}

function addtoBasket(index, button) {
  let itemRef = document.getElementById("item-basket");
  let existingItem = itemRef.querySelector(`.item[data-object-number="${index}"]`);
  if (existingItem) {
    addItem(index, existingItem);
  } else {
    itemRef.innerHTML += itemTemplate(index);
  }
  buyButton.disabled = false;
  subCalculate()
}

function addItem(index, element) {

  if (element.closest) {
    item = element.closest('.item');
  } else {
    item = element;
  }

let counter = item.querySelector(".food_counter");
  let amount = parseInt(counter.innerText) + 1;
  counter.innerText = amount;

  let priceRef = item.querySelector(".item_price");
  let price = foods[index].price;
  priceRef.innerText = (price * amount).toFixed(2) + "€";

  subCalculate()
}

function renderBasket() {
  let itemRef = document.getElementById("item-basket");
  itemRef.innerHTML = "";

  for (let index = 0; index < basket.length; index++) {
    itemRef.innerHTML += itemTemplate(basket[index]);
  }
}

function clearBasket() {
  let buttons = document.querySelectorAll(".buy");
  buttons.forEach((element) => {
    element.innerHTML = "Add to basket";
    element.disabled = false;
  });
  let modal = document.getElementById("my_modal");
  modal.showModal();

  setTimeout(() => {
    modal.close();
  }, 3000);
  
  renderBasket();
  subCalculate();
  totalCalculate();
  buyButton.disabled = true;
}

function closeDialog() {
  document.getElementById("my_modal").close();
}

function removeItem(index, button) {
  let parent = button.parentElement;
  let counter = parent.querySelector(".food_counter");
  let amount = parseInt(counter.innerHTML) - 1;
  counter.innerText = amount;

  if (counter.innerHTML < 1) {
    deleteItem(index, button)
  }

  let priceRef = parent.querySelector(".item_price");
  let price = foods[index].price;
  let newPrice = price * amount;
  priceRef.innerText = newPrice.toFixed(2) + "€";

  subCalculate()
  totalCalculate();
}

function deleteItem(index, button) {
  let buttons = document.querySelectorAll(".buy");

  button.closest(".item").remove();
  buttons[index].innerText = "Add to basket";
  buttons[index].disabled = false;
  subCalculate();
  totalCalculate();
}

function openBasket() {
  document.getElementById("basket_wrapper").classList.toggle("closed_basket");
  document.getElementById("mobile_basket").classList.toggle("mobile_open_basket");
}

function subCalculate() {
  let total = 0;
  let totalItems = 0;
  let items = document.querySelectorAll(".item");

  items.forEach(item => {
    let index = parseInt(item.getAttribute("data-object-number")); 
    let count = parseInt(item.querySelector(".food_counter").innerText);
    let price = foods[index].price; 
    total += price * count;
    totalItems += count; 
  });
  document.getElementById("subtotal_number").innerText = total.toFixed(2) + "€";
  mobileCounter.textContent = totalItems;

  totalCalculate();
}

function totalCalculate() {
  let subtotalText = document.getElementById("subtotal_number").innerText;
  
  let subtotal = parseFloat(subtotalText);
  let deliveryCost = 4.99;

  if (subtotal === 0) {
    deliveryCost = 0;
  }

  let total = subtotal + deliveryCost;

  document.querySelectorAll(".total_number").forEach((element) => {
  element.innerHTML =  total.toFixed(2) + "€";  
  }); 
}
