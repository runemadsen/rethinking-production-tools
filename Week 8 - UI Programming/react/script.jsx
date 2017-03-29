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

var App = React.createClass({

  getInitialState: function() {
    return {
      color: this.props.color
    }
  },

  changeState: function(color) {
    this.setState({
      color: color
    })
  },

  render: function() {
    return (<div>
      <ColorButton color="red" buttonClicked={this.changeState} />
      <ColorButton color="green" buttonClicked={this.changeState} />
      <ColorButton color="blue" buttonClicked={this.changeState} />
      <p>The current color is {this.state.color}</p>
    </div>);
  }

});

ReactDOM.render(
  <App color="red" />,
  document.getElementById('app')
);
