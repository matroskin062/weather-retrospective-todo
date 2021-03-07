import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Nav.module.css';

const Nav = () => {
  return (
    <div className={styles.Navigation}>
      <NavLink to='/todo' activeClassName={styles.currentPage}>
        Todo
      </NavLink>
      <NavLink to='/retro' activeClassName={styles.currentPage}>
        Retro
      </NavLink>
      <NavLink to='/weather' activeClassName={styles.currentPage}>
        Weather
      </NavLink>
    </div>
  );
};

export default Nav;
