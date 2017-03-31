// to run, compile with babel:
// ./node_modules/.bin/babel script.jsx --out-file script.js --presets=react

var ColorButton = React.createClass({

  clicked: function() {
    this.props.buttonClicked(this.props.color);
  },

  render: function() {
    return <button onClick={this.clicked}>{this.props.color}</button>;
  }

});

var Page = React.createClass({
  render: function() {
    return <p>The current color is {this.props.currentColor}</p>;
  }
});

var App = React.createClass({

  getInitialState: function() {
    return {
      currentColor: this.props.currentColor
    }
  },

  changeState: function(newColor) {
    this.setState({
      currentColor: newColor
    })
  },

  render: function() {
    return (<div>
      <ColorButton color="red" buttonClicked={this.changeState} />
      <ColorButton color="green" buttonClicked={this.changeState} />
      <ColorButton color="blue" buttonClicked={this.changeState} />
      <Page currentColor={this.state.currentColor} />
    </div>);
  }

});

ReactDOM.render(
  <App currentColor="red" />,
  document.getElementById('app')
);
