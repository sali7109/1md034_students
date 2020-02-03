function menuItem(name, kcal, gluten, lactose, imgpath) {
    this.name = name;
    this.kcal = kcal;
    this.gluten = gluten;
    this.lactose = lactose;
    this.imgpath = imgpath;

    this.info = function() {
        return this.name + " " + this.kcal + " kCal ";
    }
}

let burger1 = new menuItem("Double Cheese Burger", 440, true, true, "./img/burger1.jpg")
let burger2 = new menuItem("Crispy Halloumi Burger", 430, true, true, "./img/burger2.jpg")
let burger3 = new menuItem("Mushroom Bean Burger", 400, false, false, "./img/burger3.jpg")
let burger4 = new menuItem("A new burger", 440, false, true, "")
let burger5 = new menuItem("Another new burger", 440, true, false, "")

var menu = [burger1, burger2, burger3, burger4, burger5]

let i = 0;
for (i; i < menu.length; i++) {
	var burgerParagraph = document.createElement("p");
	burgerParagraph.innerHTML = menu[i].info();

  if (menu[i].gluten) {
    burgerParagraph.innerHTML = burgerParagraph.innerHTML + " Contains gluten ";
  }

  if (menu[i].lactose) {
    burgerParagraph.innerHTML = burgerParagraph.innerHTML + " Contains lactose ";
  }

	document.getElementById("myID").appendChild(burgerParagraph);


}

console.log(burger1.info());
console.log(burger2.info());
console.log(burger3.info());
console.log(burger4.info());
console.log(burger5.info());
