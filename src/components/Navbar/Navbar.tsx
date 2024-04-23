import { Link } from 'react-router-dom';
import React from 'react';
import style from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <div className={style.navbar}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/teste">Teste</Link>
      </nav>
    </div>
  );
};
