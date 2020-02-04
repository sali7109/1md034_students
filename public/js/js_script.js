/*function menuItem(name, kcal, gluten, lactose, imgpath, box) {
    this.name = name;
    this.kcal = kcal;
    this.gluten = gluten;
    this.lactose = lactose;
    this.imgpath = imgpath;

    this.info = function() {
        return this.name + " " + this.kcal + " kCal ";
    }
}

let burger1 = new menuItem("Double Cheese Burger", 440, true, true, "./img/burger1.jpg", "box a")
let burger2 = new menuItem("Crispy Halloumi Burger", 430, true, true, "./img/burger2.jpg", "box b")
let burger3 = new menuItem("Mushroom Bean Burger", 400, false, false, "./img/burger3.jpg", "box c")
let burger4 = new menuItem("A New Burger", 400, true, false, "./img/burger3.jpg", "box c")
let burger5 = new menuItem("Another New Burger", 400, false, true, "./img/burger3.jpg", "box c")

var menu = [burger1, burger2, burger3, burger4, burger5]
*/
/*
let myButton = document.getElementById("button");
myButton.addEventListener("click", buttonClicked);
*/
function buttonClicked() {

    var fullName = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var street = document.getElementById("street").value;
    var house = document.getElementById("house").value;
    var payment = document.getElementById("payment").value;

    var radios = document.getElementsByName("gender");
    var gender;
    for (i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            gender = radios[i].value;
            break;
        }
    }

    console.log("Button clicked!");
    console.log("Read " + fullName);
    console.log("Read " + email);
    console.log("Read " + street);
    console.log("Read " + house);
    console.log("Read " + payment);
    console.log("Read " + gender);

    return [fullName, email, street, house, payment, gender];
}



// Generate burgers
var wrapper = document.createElement("wrapper");
wrapper.setAttribute("class", "wrapper");

let i = 0;
for (i; i < menu.length; i++) {
    var box = document.createElement("box");
    box.setAttribute("class", menu[i].box);

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
