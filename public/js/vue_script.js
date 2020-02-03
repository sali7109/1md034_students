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

let burger1 = new menuItem("Double Cheese Burger", 440, "gluten", "lactose", "./img/burger1.jpg")
let burger2 = new menuItem("Crispy Halloumi Burger", 430, "gluten", "lactose", "./img/burger2.jpg")
let burger3 = new menuItem("Mushroom Bean Burger", 400, "gluten free", "lactose free", "./img/burger3.jpg")
let burger4 = new menuItem("A new burger", 440, "gluten", "lactose", "")
let burger5 = new menuItem("Another new burger", 440, "gluten", "lactose", "")

const vm = new Vue({
  el: '#myID',
  data: {
    burger1: burger1.info(),
    burger2: burger2.info(),
    burger3: burger3.info(),
    burger4: burger4.info(),
    burger5: burger5.info(),
  }
})
