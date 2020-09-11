import React from 'react';
import styles from './profile.module.scss';
import Sidebar from '../../components/sidebar';
import UserDetails from '../../components/userdetails';

const Profile = (props) => {
    return (
      <div className={styles.Profile}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.content}>
          <UserDetails/>
        </div>
      </div>
    );
}

export default Profile;