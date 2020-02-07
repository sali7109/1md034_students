'use strict';
const socket = io();

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
    orders: {},
    localOrder: {details: {x: 0, y: 0}},
    details: {x: 0, y: 0},
    lastOrder: 0,
    mapClicked: false,
    customerInfo: [],
    },

    methods: {
        markDone: function() {
            var fullName = document.getElementById("fullname").value;
            var email = document.getElementById("email").value;
            var payment = document.getElementById("payment").value;

            var radios = document.getElementsByName("gender");
            var gender;
            var i;
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
            console.log("Read " + payment);
            console.log("Read " + gender);
            console.log("Read " + burgers);

            this.buttonClicked = true;
            this.customerInfo = [fullName, email, payment, gender];
            return this.customerInfo;
        },

        getNext: function() {
          /* This function returns the next available key (order number) in
           * the orders object, it works under the assumptions that all keys
           * are integers. */

          console.log("order id " + this.lastOrder + 1);
          return this.lastOrder + 1;

        },

        addOrder: function(event) {
          console.log("details x: " + this.localOrder.details.x);
          console.log("details y: " + this.localOrder.details.y);

          socket.emit('addOrder', {
            orderId: this.getNext(),
            details: {
              x: this.localOrder.details.x - 10,
              y: this.localOrder.details.y - 10,
            },

            orderItems: this.checkedBurgers,
            customerInfo: this.customerInfo,
          });

          this.lastOrder = this.lastOrder + 1;
        },

        displayOrder: function(event) {
          /* When you click in the map, a click event object is sent as parameter
           * to the function designated in v-on:click (i.e. this one).
           * The click event object contains among other things different
           * coordinates that we need when calculating where in the map the click
           * actually happened. */

          let offset = {
            x: event.currentTarget.getBoundingClientRect().left,
            y: event.currentTarget.getBoundingClientRect().top,
          };
          this.localOrder = {
            orderId: this.getNext(),
            details: {
              x: event.clientX - 10 - offset.x,
              y: event.clientY - 10 - offset.y,
            },

            orderItems: this.checkedBurgers,
          };

          this.mapClicked = true;
        },
    }
})
