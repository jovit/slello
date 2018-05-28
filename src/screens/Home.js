import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <p>Hello There Home</p>
        <Link to='/charts'>
          <button>Charts</button>
        </Link>
      </div>
    );
  };
};

export default Home;
