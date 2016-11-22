var React = require('react');
var ReactDOM = require('react-dom');

var myhello = <h1>Hello World</h1>;
var Hello = React.createClass({
  render: function () {
    return (
      <div>Hello ReactJS Program!</div>
    )
  }
});

ReactDOM.render(<Hello />, document.getElementById('app'));