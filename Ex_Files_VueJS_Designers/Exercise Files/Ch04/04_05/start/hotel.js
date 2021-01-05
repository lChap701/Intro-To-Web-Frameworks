(function() {
  "use strict";

  // obvs want to update this!
  var CONFIG = {
    apiUrl: "http://localhost/reactjs/status_api",

    messageTypes: {
      management: "Management",
      dining: "Dining Services",
      ops: "Operations",
      plumbing: "Plumbing",
      pool: "Pool"
    }
  };

  Vue.component("post-status-form", {
    data: function() {
      return {
        messageTypes: CONFIG.messageTypes,

        message: "",
        type: Object.keys(CONFIG.messageTypes)[0]
      };
    },
    template: `
<div id="post-status">
<form>
              <h3>Post an Update</h3>

              <div class="field-group">
                <label for="txt-message">Message</label>
                <textarea id="txt-message" rows="2" v-model="message"></textarea>
              </div>

              <div class="field-group">
                <label for="txt-type">Type</label>
                <select id="txt-type" v-model="type">
                    <option v-for="(label, value) in messageTypes" :value="value">{{ label }}</option>
                </select>
              </div>

              <div class="field-group action">
                <input type="submit" value="Post Update">
              </div>

            </form>
</div>`
  });

  Vue.component("post-status-messages", {
    data: function() {
      return {
        messageTypes: CONFIG.messageTypes
      };
    },
    props: ["messages", "loaded"],
    template: `
       <div id="status-list">
         <ul class="messages" v-if="loaded">
            <li v-for="message in messages">
              {{ message.msg }}
              <span class="name">— {{ messageTypes[message.type] }}</span>
              <span class="time">{{ timeFormatted(message.time) }}</span>
            </li>
          </ul>
          <div class="loading" v-else>
            Loading...
            <div class="spinner">
              <div class="bounce1"></div>
              <div class="bounce2"></div>
              <div class="bounce3"></div>
            </div>
          </div>
        </div>`,
      methods: { timeFormatted: function(time) {
        var statusDate = date.parse(time, "YYYY-MM-DD, HH:mm"),
          dateFormat = "M/D/Y, h:mm A";

        return date.format(statusDate, dateFormat);
      } } });

  var StatusUpdates = new Vue({
    el: "#vue-statusmanager",
    data: {
      messages: [],
      loaded: false
    },

    created: function() {
      this.retrieveStatusMessages();
    },

    methods: {
      retrieveStatusMessages: function() {
        axios
          .get(CONFIG.apiUrl + "/get.php?delay=1")
          .then(function(response) {
            this.messages = response.data;
            this.loaded = true;
          }.bind(this))
          .catch(function(error) {
            console.log("retrieveStatusMessages failed", error.toString());
          });
      },
    }
  });
})();
