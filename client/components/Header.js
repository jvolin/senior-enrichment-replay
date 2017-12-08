import React from 'react';
import NavBar from './NavBar';

export default function Header () {

  return (
    <header>
      <div className="row">
        <div className="col-md-1">
          <img className="logo" src="https://image.flaticon.com/icons/svg/638/638729.svg" />
        </div>
        <div className="col-md-11">
          <h1>Astronomical Airforces</h1>
        </div>

      </div>
      <div className="row">
        <NavBar />
      </div>
    </header>
  );
}
