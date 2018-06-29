import React from "react";
import { Link } from "react-router-dom";

import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "",
      projects: []
    };
  }

  async componentDidMount() {
    const auth = {
      username: "jovit",
      password: "jovit"
    };

    const baseUrl = "https://gentle-thicket-23408.herokuapp.com";

    const response = await axios.post(`${baseUrl}/auth`, null, {
      auth
    });

    const token = response.data.data.token;

    this.setState({ token: response.data.data.token });

    const projectsResponse = await axios.get(`${baseUrl}/v1/projects`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });

    this.setState({ projects: projectsResponse.data.data });
  }

  render() {
    console.log(this.state.projects);
    return (
      <div className="home-component-container">
        <h1 className="home-title">Projetos</h1>
        <div className="projects-row">
          {this.state.projects.map(project => (
            <Link key={project.id.timestamp} to="/projectinfo1">
              <div className="home-card">
                <h2>{project.name}</h2>
                <p className="wip-project-status">{project.status}</p>
                <p className="card-content">
                  Início: {project.startDate} <br />
                  Fim: {project.endDate}
                </p>
              </div>
            </Link>
          ))}
          </div>
      </div>
    );
  }
}

export default Home;
