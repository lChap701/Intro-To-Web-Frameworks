(function() {
  "use strict";

  Vue.component('directory-filters', {
    template: '<form action="" id="directory-filters"><p>Insert filters here</p></form>'
  });

  Vue.component('directory-people', {
    // 1st way to display people
    props: ['people'],

    // 2nd way to display people
    //prop: ["peopleList"], // translates to people-list in HTML
    
    // 3rd way to display people
    /*prop: {
      people: Array
    }*/

    // Uses the properties of the 'people' object
    template: '<div class="results"> \
      <div class="person" v-for="person in people"> \
      <h3>{{ person.name }}, {{ person.title }}</h3> \
      <p> \
      <img class="size-medium alignright" :src="person.img" :alt="person.name" width="300" height="300" sizes="(max-width: 300px) 100vw, 300px" /> \
      {{ person.bio }} \
      \
      </p> \
      </div> \
      </div>'
  });

  var Directory = new Vue({
    el: '#directory-root',
    data: {
      people: window.LMDirectory.people
    }
  });
})();
