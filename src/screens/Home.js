import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="home-component-container">
        <div>
            <h1 className="home-title">Projetos</h1>
            <Link to="/History.js">
                <div className="home-card">
                    <h2>Grande Portal</h2>
                </div>
            </Link>
        </div>
      </div>
    );
  };
};

export default Home;
