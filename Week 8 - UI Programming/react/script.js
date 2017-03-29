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

var App = React.createClass({
  displayName: "App",


  getInitialState: function () {
    return {
      color: this.props.color
    };
  },

  changeState: function (color) {
    this.setState({
      color: color
    });
  },

  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(ColorButton, { color: "red", buttonClicked: this.changeState }),
      React.createElement(ColorButton, { color: "green", buttonClicked: this.changeState }),
      React.createElement(ColorButton, { color: "blue", buttonClicked: this.changeState }),
      React.createElement(
        "p",
        null,
        "The current color is ",
        this.state.color
      )
    );
  }

});

ReactDOM.render(React.createElement(App, { color: "red" }), document.getElementById('app'));
