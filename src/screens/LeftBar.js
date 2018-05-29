import React from 'react';
import { Link } from 'react-router-dom';

class LeftBar extends React.Component {
  render() {
    return (
      <div class="left-bar-container">
        <div className="left-bar-container__profile">
          <img className="left-bar-container__profile__picture" src="img/man.svg" alt=""/>
          <p class="left-bar-container__profile__name">Fausto Silva<br/>Dev Front End</p>
          <Link to="/">
            <div class="left-bar-container__profile__button">
              <img className="left-bar-container__profile__button__picture" src="img/pencil.svg" alt=""/>
              <p class="left-bar-container__profile__button__text">Editar perfil</p>
            </div>
          </Link>
        </div>
      </div>
    );
  };
};

export default LeftBar;
