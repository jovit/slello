import React from 'react';

const Header = () => (

  <div class="header">
    <h1 class="header__title">Slello</h1>
    <div class="header__right-content-container">
      <div class="ui icon input">
        <i class="search icon"></i>
        <input type="text" placeholder="Search..."/>
      </div>
        <img className="header__right-content-container__logout" src="img/logout.svg" alt=""/>
    </div>
  </div>
);

export default Header;
