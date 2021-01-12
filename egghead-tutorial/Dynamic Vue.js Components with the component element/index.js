var dinoEdit = {
    template: "#dino-edit",
    props: ["name", "initialQuantity"],
    data: function () {
        this.$emit("increment", this.initialQuantity);
        return {
            quantity: this.initialQuantity
        }
    },
    methods: {
        increment: function () {
            this.quantity += 1;
            this.$emit("increment", 1);
        }
    }
};
var dinoShow = {
    template: "#dino-show",
    props: ["name", "diet"]
}

var card = new Vue({
    el: "#card",
    data: {
        title: "Dinosaurs",
        currentView: "dino-show",
        items: [
            { text: "Tyrannosaurus", quantity: 5, diet: "Carnivore" },
            { text: "Triceratops", quantity: 4, diet: "Herbivore" },
            { text: "Stegosaurus", quantity: 6, diet: "Herbivore" }
        ],
        total: 0
    },
    methods: {
        toggle: function () {
            this.currentView = this.currentView == "dino-show" ? "dino-edit" : "dino-show";
        }
    },
    computed: {
        toggleLabel: function () {
            return this.currentView == "dino-show" ? "Edit" : "Show";
        }
    },
    components: {
        "dino-edit": dinoEdit,
        "dino-show": dinoShow
    }
});