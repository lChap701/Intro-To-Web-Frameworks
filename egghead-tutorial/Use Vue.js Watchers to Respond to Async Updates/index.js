var card = new Vue({
    el: "#card",
    data: {
        title: "Dinosaurs",
        input: "",
        buttonText: "Add Button",
        items: [
            { text: "Tyrannosaurus", quantity: 5 },
            { text: "Triceratops", quantity: 3 },
            { text: "Stegosaurus", quantity: 6 }
        ],
        input: ""
    },
    watch: {
        // CODE FOR debounce FUNCTION IS MISSING
        input: _.debounce(function () {
            this.buttonText = this.input !== "" ? "Add " + this.input : "Add Dinosaur";
        }, 250)
    },
    methods: {
        addItem: function () { 
            var input = document.getElementById("itemForm");
            
            // Adds a dinosaur to the list when an item has been entered
            if (input.value !== "") {
                this.items.push({
                    text: input.value
                })
                input.value = "";
            }
        },
        deleteItem: function (index) {
            this.items.splice(index, 1);
        }
        // There is no code shown in the video for manipulating quantity
    },
    computed: {
        totalDinos: function () {
            this.dinosUpdated += 1;
            var sum = 0;
            var items = this.items;

            for (var i in items) {
                sum += items[i].quantity;
            }
            return sum;
        },
        totalSpecies: function () {
            this.speciesUpdated += 1;
            return this.items.length;
        }
    }
});