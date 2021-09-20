"use strict";

var API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
var app = new Vue({
  el: '#app',
  data: {
    userSearch: ''
  },
  methods: {
    getJson: function getJson(url) {
      var _this = this;

      return fetch(url).then(function (result) {
        return result.json();
      })["catch"](function (error) {
        // console.log(error)
        _this.$refs.error.text = error;
      });
    },
    postJson: function postJson(url, data) {
      var _this2 = this;

      return fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(function (result) {
        return result.json();
      })["catch"](function (error) {
        // console.log(error)
        _this2.$refs.error.text = error;
      });
    },
    putJson: function putJson(url, data) {
      var _this3 = this;

      return fetch(url, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(function (result) {
        return result.json();
      })["catch"](function (error) {
        // console.log(error)
        _this3.$refs.error.text = error;
      });
    },
    delJson: function delJson(url, data) {
      var _this4 = this;

      return fetch(url, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(function (result) {
        return result.json();
      })["catch"](function (error) {
        return _this4.$refs.error.setText(error);
      });
    }
  },
  mounted: function mounted() {}
});