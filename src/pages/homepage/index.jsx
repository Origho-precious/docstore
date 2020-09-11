import React, { useEffect } from 'react';
import { connect } from 'react-redux';  
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import styles from './homepage.module.scss';
import { isLoggedIn } from '../../redux/actions';
import Button from '../../components/button';

const HomePage = ({ currentUser, isLoggedIn }) => {
    const { loginWithRedirect, user } = useAuth0();

    useEffect(() => {
        isLoggedIn(user)
    }, [isLoggedIn, user])

    return (
      <div className={styles.Homepage}>
        <div className={styles.text}>
          <h1>
            One secure place for your documents <br /> accessible to just you.
          </h1>
          <p>
            We all have many documents on our phones and laptops. Many a times
            it is difficult to recall what file/document we have and where it
            is, <span>Docstore</span> helps you organise your files in one place
            by uploading them to a cloud store and giving you easy ways to
            download them whenever you need them.
          </p>
        </div>
        <div className={styles.button}>
          {!currentUser ? (
            <Button click={() => loginWithRedirect()}> SIGN IN </Button>
          ) : (
            <div>
              <Link to="/profile">
                Go to Your Profile <i className="fas fa-link"></i>
              </Link>
              <hr />
            </div>
          )}
        </div>
      </div>
    );
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps, { isLoggedIn })(HomePage);