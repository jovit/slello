import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="center-component-container">
        <div>
          <h1 className="water-mark">Component Home. Width: 756px<br/>Click on a widget and see the url change</h1>
        </div>
      </div>
    );
  };
};

export default Home;
