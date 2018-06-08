import React from 'react';
import { Link } from 'react-router-dom';

class Charts extends React.Component {
  render() {
    return (
      <div className="charts-component-container">
        <h1 className="charts-title">Gráficos</h1>
        <div className="chart-body">
          <h2 className="water-mark">Projeto Matthew Harris</h2>
          <img src="img/chart1.png" className="chart1-style"/>
        </div>
      </div>
    );
  };
};

export default Charts;
