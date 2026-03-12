function render() {
  foodRender()
  pizzaRender()
}

function foodRender(){
  let contentRef = document.getElementById("menu");
  contentRef.innerHTML += "";
  for (let index = 0; index < 4; index++) {
    contentRef.innerHTML += foodTemplate(index);
  }
}

function pizzaRender() {
  let contentRef = document.getElementById("pizza_menu");
  contentRef.innerHTML += "";
  for (let index = 4; index < 8; index++) {
    contentRef.innerHTML += pizzaTemplate(index);
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

function addItem(index){
  let counter = document.querySelectorAll('.food_counter');
  counter[index].innerHTML++;
}

function removeItem(index){
  let counter = document.querySelectorAll('.food_counter');
  counter[index].innerHTML--;
}

