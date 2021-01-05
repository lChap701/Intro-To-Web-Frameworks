(function () {
  "use strict";

  // Components
  // Note: They should always be defined before instances
  Vue.component("directory-filters", {
    template: "<form action='' id='directory-filters'><p>Insert filers here</p></form>",
  });

  Vue.component("directory-people", {
    template: "<p>Insert people here</p>",
  });

  // Instance
  var Directory = new Vue({
    el: "#directory-root", // parent element
    data: {
      people: window.LMDirectory.people
    }
  });
})();
