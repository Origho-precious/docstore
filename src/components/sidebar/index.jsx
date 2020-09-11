import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './sidebar.module.scss';

const Sidebar = (props) => {
    return (
      <div className={styles.Sidebar}>
        <h2>Welcome</h2>
        <div className={styles.links}>
          <NavLink activeClassName={styles.active} to="/dashboard/profile">
            Profile
          </NavLink>
          <NavLink activeClassName={styles.active} to="/dashboard/docs">
            Docs
          </NavLink>
        </div>
      </div>
    );
}

export default Sidebar;