(function() {
  "use strict";

  // obvs want to update this!
  var CONFIG = {
    apiUrl: "http://localhost/status_api",

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
    template:
      '<div id="post-status"> \
          <form @submit="postUpdate"> \
              <h3>Post an Update</h3> \
              <div class="field-group"> \
                <label for="txt-message">Message</label> \
                <textarea id="txt-message" rows="2" v-model="message"></textarea> \
              </div> \
              <div class="field-group"> \
                <label for="txt-type">Type</label> \
                <select id="txt-type" v-model="type"> \
                    <option v-for="(label, value) in messageTypes" :value="value">{{ label }}</option> \
                </select> \
              </div> \
              <div class="field-group action"> \
                <input type="submit" value="Post Update"> \
              </div> \
            </form> \
        </div>',
    methods: {
      postUpdate: function(evt) {
        evt.preventDefault();

        var newStatus = {
          msg: this.message,
          type: this.type,
          time: date.format(new Date(), "YYYY-MM-DD, HH:mm")
        };

        axios.post(CONFIG.apiUrl + "/post.php", newStatus).then(
          function(response) {
            if (response.data.success) {
              // Message received by the API - update our UI
              this.$emit("add-message", newStatus);
            }
          }.bind(this)
        );
      }
    }
  });

  Vue.component("post-status-messages", {
    data: function() {
      return {
        messageTypes: CONFIG.messageTypes
      };
    },
    props: ["messages", "loaded"],
    template:
      '<div id="status-list"> \
          <ul class="messages" v-if="loaded"> \
            <li v-for="message in messages"> \
              {{ message.msg }} \
              <span class="name">— {{ messageTypes[message.type] }}</span> \
              <span class="time">{{ timeFormatted(message.time) }}</span> \
            </li> \
          </ul> \
          <vue-simple-spinner message="Loading…" :line-size="5" text-fg-color="white" v-else></vue-simple-spinner> \
        </div>',
    methods: {
      timeFormatted: function(time) {
        var statusDate = date.parse(time, "YYYY-MM-DD, HH:mm"),
          dateFormat = "M/D/Y, h:mm A";

        return date.format(statusDate, dateFormat);
      }
    }
  });

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
          .get(CONFIG.apiUrl + "/get.php?delay=3")
          .then(
            function(response) {
              this.messages = response.data;
              this.loaded = true;
            }.bind(this)
          )
          .catch(function(error) {
            console.error("retrieveStatusMessages failed", error.toString());
          });
      },

      addMessage: function(newStatus) {
        // this.retrieveStatusMessages();
        this.messages.push(newStatus);
      }
    }
  });
})();
