import React, { PropTypes } from 'react';

// components
import Navbar from './navbar/Navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
        <footer>
          <small>{'Aleksey Lovchikov | +7 (999) 223-92-97 | All rights reserved. 2016'}</small>
        </footer>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
