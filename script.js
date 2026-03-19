function render() {
  foodRender();
  pizzaRender();
  saladRender();
}

let buyButton = document.getElementById('buy_items');
buyButton.disabled = true;

function foodRender() {
  let contentRef = document.getElementById("menu");
  contentRef.innerHTML = "";
  for (let index = 0; index < 4; index++) {
    contentRef.innerHTML += foodTemplate(index);
  }
}

function pizzaRender() {
  let contentRef = document.getElementById("pizza_menu");
  contentRef.innerHTML = "";
  for (let index = 4; index < 8; index++) {
    contentRef.innerHTML += foodTemplate(index);
  }
}

function saladRender() {
  let contentRef = document.getElementById("salad_menu");
  contentRef.innerHTML = "";
  for (let index = 8; index < 12; index++) {
    contentRef.innerHTML += foodTemplate(index);
  }
}

function addtoBasket(index, button) {
  let itemRef = document.getElementById("item-basket");
  
  if (button.innerText === "Added") {
    let existingItem = document.getElementById(`item-${index}`);
    addItem(index, existingItem);
  } else {
    itemRef.innerHTML += itemTemplate(index);
    button.innerText = "Added";
  }
  buyButton.disabled = false;

  totalcalculate();
}

function addItem(index, button) {
  let parent = button.parentElement;
  let counter = parent.querySelector(".food_counter");
  let amount = parseInt(counter.innerHTML) + 1;
  counter.innerText = amount;

  let priceRef = parent.querySelector(".item_price");

  let price = foods[index].price;

  let newPrice = price * amount;
  priceRef.innerText = newPrice.toFixed(2) + "€";

  totalcalculate();
}

function renderBasket() {
  let itemRef = document.getElementById("item-basket");
  itemRef.innerHTML = "";

  for (let index = 0; index < basket.length; index++) {
    itemRef.innerHTML += itemTemplate(basket[index]);
  }
}

function clearBasket() {
  let basket = document.getElementById('basket');


  let buttons = document.querySelectorAll(".buy");
  buttons.forEach((element) => {
    element.innerHTML = "Add to basket";
    element.disabled = false;
  });
  document.getElementById("my_modal").showModal();
  renderBasket();
  totalcalculate();
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

  totalcalculate();
}

function deleteItem(index, button) {
  let buttons = document.querySelectorAll(".buy");

  button.closest(".item").remove();
  buttons[index].innerText = "Add to basket";
  buttons[index].disabled = false;
}

function openBasket() {
  document.getElementById("basket_wrapper").classList.toggle("closed_basket");
  document.body.classList.toggle("no-scroll");
}

function activeBasket() {
  let basketRef = document.getElementById("item-basket");

  if (basketRef.innerText !== "") {
    document.getElementById("mobile_basket").classList.toggle("active_basket");
  }
}

function totalcalculate() {
  let total = 0;
  let priceElements = document.querySelectorAll(".item_price");

  for (let index = 0; index < priceElements.length; index++) {
    let price = parseFloat(priceElements[index].innerText);
    total += price;
  }
  document.getElementById("total_number").innerHTML = total.toFixed(2) + "€";
}
