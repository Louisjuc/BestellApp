function render() {
  foodRender()
  pizzaRender()
  saladRender()
}

function foodRender(){
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

  button.innerText = "Added";
  if (button.innerText === "Added") {
    button.disabled = true;
  }
}

function clearBasket(){
  let clearRef = document.getElementById("item-basket");
  clearRef.innerHTML = "";

  let buttons = document.querySelectorAll(".buy");

  buttons.forEach(button => {
    button.innerText = "Add to basket";
    button.disabled = false;
  });

}

function addItem(index, button){
  let counter = button.parentElement.querySelector('.food_counter');
  counter.innerText = parseInt(counter.innerText) + 1;
}

function removeItem(index, button){
  let counter = button.parentElement.querySelector('.food_counter');
  counter.innerText = parseInt(counter.innerText) - 1;
}


