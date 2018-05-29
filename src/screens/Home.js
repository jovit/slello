import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div class="center-component-container">
        <p>Hello There Home</p>
        <Link to='/historico'>
          <button>Charts</button>
        </Link>
      </div>
    );
  };
};

export default Home;
