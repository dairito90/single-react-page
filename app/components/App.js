import React from 'react';
const createReactClass = require('create-react-class');

const App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Welcome</h1>
        <ul className="header">
            <li>Home</li>
             <li>About</li>
             <li>Contact</li>
        </ul>
        <div className="content">
            {this.props.children}
        </div>
      </div>
    )
  }
});






export default App;
