import React from "react";
import { Link } from "react-router-dom";

import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      token: ""
    }
  }

  async componentDidMount() {
    const headers = {
      Authorization: "Basic am92aXQ6am92aXQ="
    };
    const response = await axios.post("https://gentle-thicket-23408.herokuapp.com/auth", undefined, {
      headers
    });
    
    this.setState({token: response.data.data.token})
  }

  render() {
    return (
      <div className="home-component-container">
        <h1 className="home-title">Projetos</h1>
        <div className="projects-row">
          <Link to="/projectinfo1">
            <div className="home-card">
              <h2>Projeto Matthew Harris</h2>
              <p className="done-project-status">Finalizado</p>
              <p className="card-content">
                Início: 20/04/2018 <br />
                Fim: 30/05/2018
              </p>
            </div>
          </Link>
          <Link to="/projectinfo2">
            <div className="home-card">
              <h2>Projeto Jake Smith</h2>
              <p className="wip-project-status">Em andamento</p>
              <p className="card-content">
                Início: 30/05/2018 <br />
                Fim previsto: 20/06/2020
              </p>
            </div>
          </Link>
        </div>
        <div className="projects-row">
          <Link to="/projectinfo3">
            <div className="home-card">
              <h2>Projeto Slello</h2>
              <p className="wip-project-status">Em andamento</p>
              <p className="card-content">
                Início: 20/04/2018 <br />
                Fim previsto: 30/05/2055
              </p>
            </div>
          </Link>
          <Link to="/projectinfo4">
            <div className="home-card">
              <h2>IC 4</h2>
              <p className="wip-project-status">Em andamento</p>
              <p className="card-content">
                Início: 30/05/2018 <br />
                Fim previsto: 20/06/2088
              </p>
            </div>
          </Link>
        </div>
        <div className="projects-row">
          <Link to="/projectinfo1">
            <div className="home-card">
              <h2>Windows Phone</h2>
              <p className="canceled-project-status">Cancelado</p>
              <p className="card-content">
                Início: 08/11/2010 <br />
                Fim: 09/11/2010
              </p>
            </div>
          </Link>
          <Link to="/projectinfo2">
            <div className="home-card">
              <img src="img/selected_add_widget.svg" className="add-image" />
              <h2>Adicionar Projeto</h2>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
