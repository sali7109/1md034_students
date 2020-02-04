function menuItem(name, kcal, gluten, lactose, imgpath, box) {
    this.name = name;
    this.kcal = kcal;
    this.gluten = gluten;
    this.lactose = lactose;
    this.imgpath = imgpath;
    this.box = box;

    this.info = function() {
        return this.name + " " + this.kcal + " kCal ";
    }
}

let burger1 = new menuItem("Double Cheese Burger", 440, true, true, "./img/burger1.jpg", "box a")
let burger2 = new menuItem("Crispy Halloumi Burger", 430, true, true, "./img/burger2.jpg", "box b")
let burger3 = new menuItem("Mushroom Bean Burger", 400, false, false, "./img/burger3.jpg", "box c")
let burger4 = new menuItem("A new burger", 440, false, true, "", "")
let burger5 = new menuItem("Another new burger", 440, true, false, "", "")

var menu = [burger1, burger2, burger3]

const vm = new Vue({
  el: '#vuewrapper',
  data: {
  	menu: menu,
  }
})
