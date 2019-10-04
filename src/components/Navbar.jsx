import React, { useState } from 'react';
import {useDarkMode} from '../hooks/useDarkMode';

const Navbar = () => {
  const [style, styleChanges, setStyle] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setStyle(!style);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={style ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
