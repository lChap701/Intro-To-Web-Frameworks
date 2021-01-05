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
    props: ["messages"],
    template: `<div id="status-list">
          <ul class="messages">
            <li v-for="message in messages">
              {{ message.msg }}
              <span class="name">— {{ messageTypes[message.type] }}</span>
              <span class="time">{{ timeFormatted(message.time) }}</span>
            </li>
          </ul>
        </div>`,
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
      messages: [
        {
          id: 1,
          msg:
            "The hot tub is currently closed for maintenance.  We expect it to be back up and running within 48 hours.",
          type: "management",
          time: "2018-03-30, 09:15"
        },
        {
          id: 2,
          msg: "The hot tub maintenance is complete.  Please enjoy a dip!",
          type: "management",
          time: "2018-03-30, 17:12"
        },
        {
          id: 3,
          msg:
            "The rice cooker is on the fritz, any fried rice dishes will require some extra time to cook.",
          type: "dining",
          time: "2018-04-02, 15:00"
        }
      ] // take the initial value from the stubs for now
    }
  });
})();
