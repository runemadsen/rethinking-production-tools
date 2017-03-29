var data = {
  color: "red"
}

Vue.component('color-button', {
  props: ['color'],
  template: '<button v-on:click="buttonClicked">{{ color }}</button>',
  methods: {
    buttonClicked: function () {
      data.color = this.color;
    }
  },
});

var app = new Vue({
  el: "#app",
  data: data
})
