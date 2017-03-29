var data = {
  color: "red",
  buttons: [
    { color: "red" },
    { color: "green" },
    { color: "blue" }
  ]
}

Vue.component('color-button', {
  props: ['state'],
  template: '<button v-on:click="buttonClicked">{{ state.color }}</button>',
  methods: {
    buttonClicked: function () {
      data.color = this.state.color;
    }
  },
});

var app = new Vue({
  el: "#app",
  data: data
})
