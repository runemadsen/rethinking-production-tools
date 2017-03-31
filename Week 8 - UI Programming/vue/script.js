var data = {
  currentColor: "red"
}

Vue.component('color-button', {
  props: ['color'],
  template: '<button v-on:click="buttonClicked">{{ color }}</button>',
  methods: {
    buttonClicked: function () {
      data.currentColor = this.color;
    }
  },
});

Vue.component('page', {
  props: ['currentColor'],
  template: '<p>The current color is {{ currentColor }}</p>'
});

var app = new Vue({
  el: "#app",
  data: data
})
