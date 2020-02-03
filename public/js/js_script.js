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

var menu = [burger1, burger2, burger3]

let i = 0;
for (i; i < menu.length; i++) {

    var h = document.createElement("H3");
    //var n = document.createTextElement(menu[i].name);
    //h.appendChild(n);
    h.innerHTML = menu[i].name;
    document.getElementById("test").appendChild(h);

    var image = document.createElement("img");
    image.setAttribute("src", menu[i].imgpath);
    image.setAttribute("alt", menu[i].name);
    image.setAttribute("title", menu[i].name);
    image.setAttribute("width", 200);
    document.getElementById("test").appendChild(image);

    var list = document.createElement("ul");

    var kcal = document.createElement("li");
    var text = document.createTextNode(menu[i].kcal + " kCal");
    kcal.appendChild(text);
    list.appendChild(kcal);

    var allergy = document.createElement("section");
    allergy.setAttribute("class", "allergy");


    if (menu[i].gluten) {
        //burgerParagraph.innerHTML = burgerParagraph.innerHTML + " Contains gluten ";
        var gluten = document.createElement("li");
        text = document.createTextNode("Contains gluten");
        gluten.appendChild(text);
        allergy.appendChild(gluten);
    }

    if (menu[i].lactose) {
        //burgerParagraph.innerHTML = burgerParagraph.innerHTML + " Contains lactose ";
        var lactose = document.createElement("li");
        text = document.createTextNode("Contains lactose");
        lactose.appendChild(text);
        allergy.appendChild(lactose);
    }

    list.appendChild(allergy);

    document.getElementById("test").appendChild(list);
}
