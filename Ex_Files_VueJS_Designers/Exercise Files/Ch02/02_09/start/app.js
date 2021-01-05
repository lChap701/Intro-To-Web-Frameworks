(function() {
  "use strict";

  var ProductCustomizer = new Vue({
    el: "#vue-root",
    data: {
      sizes: window.Inventory.allSizes,
      selectedSize: 9,
      colors: window.Inventory.allColors
    },
    computed: {
      sizeClass: function() {
        return "product-size--" + this.selectedSize.toString().replace(".", "_");
      }
    },
    methods: {
      updateColorsBySize: function(evt) {
        this.colors = window.Inventory.bySize[evt.target.value];
      }
    }
  });
})();
