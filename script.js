

function render() {
  foodRender();
  pizzaRender();
  saladRender();
}

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
  itemRef.innerHTML += `${itemTemplate(index)}`;

  button.innerHTML = "Added";
  if (button.innerHTML === "Added") {
    button.disabled = true;
  }
  totalcalculate()

  document.getElementById('buy_items').disabled = false;
}

function clearBasket() {
  let clearRef = document.getElementById("item-basket");
  clearRef.innerHTML = "";

  let buttons = document.querySelectorAll(".buy");

  buttons.forEach((element) => {
    element.innerHTML = "Add to basket";
    element.disabled = false;
  });

  totalcalculate()


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

  totalcalculate()
}

function removeItem(index, button) {
  let parent = button.parentElement;

  let counter = parent.querySelector(".food_counter");

  let amount = parseInt(counter.innerHTML) - 1;
  counter.innerText = amount;

  let priceRef = parent.querySelector(".item_price");

  let price = foods[index].price;
  let newPrice = price * amount;

  priceRef.innerText = newPrice.toFixed(2) + "€";

  let buttons = document.querySelectorAll(".buy");
  if (counter.innerHTML < 1) {
    button.closest(".item").remove();
    buttons[index].innerText = "Add to basket";
    buttons[index].disabled = false;
  }

  totalcalculate()
}

function openBasket(){
  document.getElementById("basket_wrapper").classList.toggle("closed_basket");
  document.body.classList.toggle("no-scroll");
}

function activeBasket(){
  let basketRef = document.getElementById("item-basket");
  
    if (basketRef.innerText !== "") {
      document.getElementById("mobile_basket").classList.toggle("active_basket");
    }
  }

  function totalcalculate(){
    let total = 0;
    let priceElements = document.querySelectorAll(".item_price");

    for (let index = 0; index < priceElements.length; index++) {
      let price = parseFloat(priceElements[index].innerText);
      total += price;
    }

    document.getElementById('total_number').innerHTML = total.toFixed(2) + "€";
  }

  document.getElementById('buy_items').disabled = true;