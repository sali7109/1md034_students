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
/* JS
var menu = [burger1, burger2, burger3]

var wrapper = document.createElement("wrapper");
wrapper.setAttribute("class", "wrapper");

let i = 0;
for (i; i < menu.length; i++) {
    var box = document.createElement("box");

    if (i == 0) {
        box.setAttribute("class", "box a");
    }
    else if (i == 1) {
        box.setAttribute("class", "box b");
    }
    else {
        box.setAttribute("class", "box c");
    }

    var h = document.createElement("H3");
    h.innerHTML = menu[i].name;
    box.appendChild(h);

    var image = document.createElement("img");
    image.setAttribute("src", menu[i].imgpath);
    image.setAttribute("alt", menu[i].name);
    image.setAttribute("title", menu[i].name);
    image.setAttribute("height", 200);
    box.appendChild(image);

    var list = document.createElement("ul");

    var kcal = document.createElement("li");
    var text = document.createTextNode(menu[i].kcal + " kCal");
    kcal.appendChild(text);
    list.appendChild(kcal);

    var allergy = document.createElement("section");
    allergy.setAttribute("class", "allergy");


    if (menu[i].gluten) {
        var gluten = document.createElement("li");
        text = document.createTextNode("Contains gluten");
        gluten.appendChild(text);
        allergy.appendChild(gluten);
    }

    if (menu[i].lactose) {
        var lactose = document.createElement("li");
        text = document.createTextNode("Contains lactose");
        lactose.appendChild(text);
        allergy.appendChild(lactose);
    }

    list.appendChild(allergy);

    box.appendChild(list);
    wrapper.appendChild(box);
}
document.getElementById("burgers").appendChild(wrapper);
*/
