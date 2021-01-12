var card = new Vue({
    el: "#card",
    data: {
        title: "Style Bindings",
        isRounded: false,   // doesn't work
        sizeToggle: false,  // doesn't work
        disabled: false,
        backgroundColor: "#CCCCCC",
        fontColor: "#000000",
        range: 50
    },
    computed: {
        styles: function () {
            return {
                color: this.fontColor,
                background: this.backgroundColor,
                "margin-left": this.range + "%"
            }
            
        }
    }
});