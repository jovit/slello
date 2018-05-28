import React from 'react';
import { Link } from 'react-router-dom';

class Home2 extends React.Component {
  render() {
    return (
      <div>
        <p>Home 2</p>
        <Link to='/'>
          <button>Home</button>
        </Link>
      </div>
    );
  };
};

export default Home2;
