(function() {
  "use strict";

  var ProductCustomizer = new Vue({
    el: "#vue-root",
    data: {
      sizes: window.Inventory.allSizes,
      selectedSize: 9,
      colors: window.Inventory.allColors,
      selectedColor: "red"
    },
    computed: {
      sizeClass: function() {
        return "product-size--" + this.selectedSize.toString().replace(".", "_");
      },

      sizeSrc: function() {
        return "../../../assets/" + this.selectedColor + ".jpg";
      }
    },
    methods: {
      updateColorsBySize: function(evt) {
        var selectedSize = evt.target.value,
          availableColors = window.Inventory.bySize[selectedSize];

        this.colors = availableColors;

        // if the currently selected color isn't available in the new size,
        // set the selected color to the first available color
        if (availableColors.indexOf(this.selectedColor) === -1) {
          this.selectedColor = availableColors[0];
        }
      },

      updateSizesByColor: function(evt) {
        var selectedColor = evt.target.value,
          availableSizes = window.Inventory.byColor[selectedColor];

        this.sizes = availableSizes;

        // if the currently selected size isn't available in the new color,
        // set the selected size to the first available size
        if (availableSizes.indexOf(this.selectedSize) === -1) {
          this.selectedSize = availableSizes[0];
        }
      }
    }
  });
})();
