var card = new Vue({
    el: "#card",
    data: {
        title: "Dinosaurs",
        buttonText: "Add Button",
        items: [
            { text: "Tyrannosaurus", quantity: 5 },
            { text: "Triceratops", quantity: 3 },
            { text: "Stegosaurus", quantity: 6 }
        ],
        input: "",
      //  totalDinos: 0,    // not needed
      //  totalSpecies: 0,
        dinosUpdated: 0,
        speciesUpdated: 0
    },
    methods: {
        addItem: function () {            
            // Adds a dinosaur to the list when an item has been entered
            if (this.input !== "") {
                this.items.push({
                    text: this.input,
                    quantity: 1
                });
                this.input = "";
            }
        },
        deleteItem: function (index) {
            this.items.splice(index, 1);
        }
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