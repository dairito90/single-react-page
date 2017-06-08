import React from 'react';
const createReactClass = require('create-react-class');

const App = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Welcome</h1>
                <ul className="header">
                    <li>
                        <Link to="/" activeClassName="active">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" activeClassName="active">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" activeClassName="active">Contact</Link>
                    </li>
                </ul>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

export default App;
