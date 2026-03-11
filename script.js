function render(){
    let contentRef = document.getElementById("menu");
    contentRef.innerHTML += "";
    for (let index = 0; index < foods.length; index++) {
      contentRef.innerHTML += foodTemplate(index);
    }
}