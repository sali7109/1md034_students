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

            console.log("Button clicked!");
            console.log("Read " + fullName);
            console.log("Read " + email);
            console.log("Read " + street);
            console.log("Read " + house);
            console.log("Read " + payment);
            console.log("Read " + gender);

            /*var text = document.createTextNode(fullName);
            document.getElementById("sentOrder").appendChild(text);*/
            this.buttonClicked = true;

            return [fullName, email, street, house, payment, gender];
        }
    }
})
/*
const vm2 = new Vue({
      el: '#orders',
        methods: {
            markDone: function() {
                var fullName = document.getElementById("fullname").value;
                var email = document.getElementById("email").value;
                var street = document.getElementById("street").value;
                var house = document.getElementById("house").value;

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
                console.log("Read " + gender);

                return [fullName, email, street, house, gender];
            }
        }
})*/
