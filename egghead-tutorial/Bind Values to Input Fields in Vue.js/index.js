var app = new Vue({
    el: "#app",
    data: {
        checked: false,
        chosenDino: "",
        selectedPeriods: [],
        single: "",
        message: "",
        dinos: ["Triceratops", "Velociraptor", "Tyrannosaurus"],
        periods: [
            { name: "Triassic", value: 1 },
            { name: "Jurassic", value: 2 },
            { name: "Cretaceous", value: 3 }
        ]
    }
});