function render() {
  let contentRef = document.getElementById("menu");
  contentRef.innerHTML += "";
  for (let index = 0; index < foods.length; index++) {
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

function addItem(index){
  let counter = document.querySelectorAll('.food_counter');
  counter[index].innerHTML = numberIndex++;
}