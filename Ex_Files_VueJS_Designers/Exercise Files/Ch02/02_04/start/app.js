(function() {
  "use strict";

  var ProductCustomizer = new Vue({
    el: "#vue-root",
    data: {
      sizes: window.Inventory.allSizes
    }
  });
})();
