let mobileCounter = document.getElementById("item_counter_mobile");
let itemRef = document.getElementById("item-basket");
let basketRef = document.getElementById("basket_wrapper");
let noBasket = document.getElementById("no_items_basket");
let calcRef = document.getElementById("calculator");

function render() {
  burgerRender();
  pizzaRender();
  saladRender();
}

function renderCategory(Rendercategory, menuName) {
  let contentRef = document.getElementById(menuName);
  contentRef.innerHTML = "";

  for (let index = 0; index < foods.length; index++) {
    if (foods[index].category === Rendercategory) {
      contentRef.innerHTML += foodTemplate(index);
    }
  }
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
  let numberTotal = button.querySelector(".number_added_items");
  let existingItem = itemRef.querySelector( `.item[data-object-number="${index}"]` );
  basketRef.style.display = "block";

  if (existingItem) {
    addItem(index, existingItem);
  } else {
    itemRef.innerHTML += itemTemplate(index);
    addCalculator();
  }

  if (numberTotal === null) {
    button.innerHTML = `Added <span class="number_added_items">1</span>`;
  } else {
    let actual = parseInt(numberTotal.innerText) || 0;
    numberTotal.innerText = actual + 1;
  }

  button.classList.add("orange");

  checkEmptyBasket();
}

function addCalculator() {
  if (calcRef.innerHTML === "") {
    calcRef.innerHTML = calculatorTemplate();
  }
  subCalculate();
}

function checkEmptyBasket() {
  let itemRef = document.getElementById("item-basket");

  if (itemRef === "") {
    itemRef.innerHTML = noBasket;
  } else {
    noBasket.innerHTML = "";
  }
}

function addItem(index, element) {
  if (element.closest) {
    item = element.closest(".item");
  } else {
    item = element;
  }
  let counter = item.querySelector(".food_counter");
  let amount = parseInt(counter.innerText) + 1;
  counter.innerText = amount;
  let priceRef = item.querySelector(".item_price");
  let price = foods[index].price;
  moveButtons();

  priceRef.innerText = (price * amount).toFixed(2) + "€";

  subCalculate();
}

function moveButtons() {
  let deleteButton = item.querySelector(".delete");
  let counter = item.querySelector(".food_counter");
  let minusButton = item.querySelector(".food_card_icon_minus");

  if (counter.innerHTML > 1) {
    minusButton.style.display = "block";
    deleteButton.classList.add("delete_absolute");
  }
}

function renderBasket() {
  let itemRef = document.getElementById("item-basket");
  itemRef.innerHTML = "";

  for (let index = 0; index < itemRef.length; index++) {
    itemRef.innerHTML += itemTemplate(index);
  }
}

function clearBasket() {
  openDialog();

  basketRef.style.display = "none";
  mobileCounter.innerHTML = 0;
  renderBasket();
  openBasket();
  checkEmptyBasket();

  let buttons = document.querySelectorAll(".add");

  for (let index = 0; index < buttons.length; index++) {
    buttons[index].innerHTML = "Add to basket";
    buttons[index].classList.remove("orange");
  }
}

function openDialog() {
  let modal = document.getElementById("my_modal");
  modal.showModal();

  setTimeout(() => {
    modal.close();
  }, 3000);
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
    deleteItem(index, button);
  }

  let priceRef = parent.querySelector(".item_price");
  let price = foods[index].price;
  let newPrice = price * amount;
  priceRef.innerText = newPrice.toFixed(2) + "€";

  subCalculate();
  totalCalculate();
}

function deleteItem(index, button) {
  let buttons = document.querySelectorAll(".add");

  button.closest(".item").remove();

  buttons[index].classList.remove("orange");
  buttons[index].innerText = "Add to basket";

  subCalculate();
  totalCalculate();
}

function openBasket() {
  document.getElementById("basket_wrapper").classList.toggle("closed_basket");
  document
    .getElementById("mobile_basket")
    .classList.toggle("mobile_open_basket");
}

function subCalculate() {
  let total = 0;
  let totalItems = 0;
  let items = document.querySelectorAll(".item");

  items.forEach((item) => {
    let index = parseInt(item.getAttribute("data-object-number"));
    let count = parseInt(item.querySelector(".food_counter").innerText);
    let price = foods[index].price;
    total += price * count;
    totalItems += count;
  });
  document.getElementById("subtotal_number").innerText = total.toFixed(2) + "€";
  mobileCounter.innerHTML = totalItems;

  totalCalculate();
}

function totalCalculate() {
  let subtotalText = document.getElementById("subtotal_number").innerText;

  let subtotal = parseFloat(subtotalText);
  let deliveryCost = 4.99;
  let buyButton = document.getElementById("buy_items");

  if (subtotal === 0) {
    deliveryCost = 0;
    buyButton.disabled = true;
  } else {
    buyButton.disabled = false;
  }
  let total = subtotal + deliveryCost;

  document.querySelectorAll(".total_number").forEach((element) => {
    element.innerHTML = total.toFixed(2) + "€";
  });
}
