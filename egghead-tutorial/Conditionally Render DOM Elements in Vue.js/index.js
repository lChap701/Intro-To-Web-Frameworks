var card = new Vue({
    el: "#card",
    data: {
        title: "Dinosaurs",
        buttonText: "Add Button",
        dinos: [
            { name: "Tyrannosaurus", quantity: 4 },
            { name: "Velociraptor", quantity: 3 }
        ],
        input: "",
    },
    methods: {
        addItem: function () {            
            // Adds a dinosaur to the list when an dino has been entered
            if (this.input !== "") {
                this.dinos.push({
                    name: this.input,
                    quantity: 1
                })
                this.input = "";
            }
        },
        removeItem: function (index) {
            document.getElementsByClassName("extinct")[index].parentElement.remove();
        }
    }
});