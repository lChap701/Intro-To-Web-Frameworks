var app = new Vue({
    el: "#app",
    data: {
        total: 0,
        amount: 0   // changed so it can be converted
    },
    methods: {
        addDinos: function () {            
            this.total += parseInt(this.amount);    // converts string to an integer
        }
    }
});