// to run, compile with babel:
// ./node_modules/.bin/babel script.jsx --out-file script.js --presets=react

var ColorButton = React.createClass({
  displayName: "ColorButton",


  clicked: function () {
    this.props.buttonClicked(this.props.color);
  },

  render: function () {
    return React.createElement(
      "button",
      { onClick: this.clicked },
      this.props.color
    );
  }

});

var Page = React.createClass({
  displayName: "Page",

  render: function () {
    return React.createElement(
      "p",
      null,
      "The current color is ",
      this.props.currentColor
    );
  }
});

var App = React.createClass({
  displayName: "App",


  getInitialState: function () {
    return {
      currentColor: this.props.currentColor
    };
  },

  changeState: function (newColor) {
    this.setState({
      currentColor: newColor
    });
  },

  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(ColorButton, { color: "red", buttonClicked: this.changeState }),
      React.createElement(ColorButton, { color: "green", buttonClicked: this.changeState }),
      React.createElement(ColorButton, { color: "blue", buttonClicked: this.changeState }),
      React.createElement(Page, { currentColor: this.state.currentColor })
    );
  }

});

ReactDOM.render(React.createElement(App, { currentColor: "red" }), document.getElementById('app'));
