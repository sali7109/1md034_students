const vm = new Vue({
  el: '#vuewrapper',
  data: {
    food: food,
    fullname: "",
    email: "",
    street: "",
    house: "",
    payment: "",
    gender: "",
    buttonClicked: false,
    checkedBurgers: [],
    },

    methods: {
        markDone: function() {
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

            var checks = document.getElementsByName("checkbox")
            var burgers = [];
            for (i = 0; i < checks.length; i++) {
                if (checks[i].checked) {
                    burgers.push(checks[i].value);
                }
            }

            console.log("Button clicked!");
            console.log("Read " + fullName);
            console.log("Read " + email);
            console.log("Read " + street);
            console.log("Read " + house);
            console.log("Read " + payment);
            console.log("Read " + gender);
            console.log("Read " + burgers);

            this.buttonClicked = true;

            return [fullName, email, street, house, payment, gender];
        }
    }
})
