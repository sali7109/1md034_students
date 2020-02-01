function menuItem(name, kcal, gluten, lactose, imgpath) {
    this.name = name;
    this.kcal = kcal;
    this.gluten = gluten;
    this.lactose = lactose;
    this.imgpath = imgpath;

    this.info = function() {
        return this.name + " " + this.kcal + "kCal";
    }
}

let burger1 = new menuItem("Double Cheese Burger", 440, "gluten", "lactose", "./img/burger1.jpg")
let burger2 = new menuItem("Crispy Halloumi Burger", 430, "gluten", "lactose", "./img/burger2.jpg")
let burger3 = new menuItem("Mushroom Bean Burger", 400, "gluten free", "lactose free", "./img/burger3.jpg")
let burger4 = new menuItem("A new burger", 440, "gluten", "lactose", "")
let burger5 = new menuItem("Another new burger", 440, "gluten", "lactose", "")

console.log(burger1.info());
console.log(burger2.info());
console.log(burger3.info());
console.log(burger4.info());
console.log(burger5.info());
