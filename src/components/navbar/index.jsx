import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.scss';
import { useAuth0 } from '@auth0/auth0-react';
import { isLoggedIn } from '../../redux/actions';
import Button from '../../components/button';

const Navbar = ({ currentUser, isLoggedIn }) => {
  const { loginWithRedirect, user, logout } = useAuth0();
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    isLoggedIn(user)
  }, [isLoggedIn, user]);

  const toggleNav = () => {
    setShowNav(!showNav);
  }

  const logoutHandler = () => {
    logout()
    localStorage.setItem("user", JSON.stringify(null));
  }

  return (
    <div className={styles.Nav}>
      <div className={styles.logo}>
        <h2>Docs Store</h2>
      </div>
      <div className={styles.hamburger} onClick={() => toggleNav()}>
        {!showNav ? (
          <i className="fas fa-bars"></i>
        ) : (
          <i className="fas fa-times"></i>
        )}
      </div>
      <div className={!showNav ? styles.navLinks : styles.showNavLinks}>
        <NavLink
          activeClassName={styles.active}
          className={styles.link}
          to="/home"
        >
          HOME
        </NavLink>
        {!currentUser ? (
          <Button click={() => loginWithRedirect()} className={styles.link}>
            SIGN IN
          </Button>
        ) : (
          <Button click={() => logoutHandler()} className={styles.link} to="/">
            SIGN OUT
          </Button>
        )}
        {currentUser ? (
          <NavLink
            activeClassName={styles.active}
            className={styles.link}
            to="/dashboard/profile"
          >
            MY PROFILE
          </NavLink>
        ) : null}
      </div>
    </div>
  );
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { isLoggedIn })(Navbar);