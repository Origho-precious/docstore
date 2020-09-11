import React from 'react';
import { connect } from 'react-redux';
import styles from './details.module.scss';

const UserDetails = ({ currentUser }) => {
    return (
      <div className={styles.User}>
        <h4>Your Profile</h4>
        <hr />
        <div className={styles.details}>
          <div className={styles.img}>
            {currentUser ? (
              <img
                src={
                  currentUser.picture
                    ? currentUser.picture
                    : "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                }
                alt="User"
              />
            ) : (
              <img
                src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                alt="User Avatar"
              />
            )}
          </div>
          <div>
            <h5>NAME</h5>
            {currentUser ? (
              <p>{currentUser.name ? currentUser.name : "-"}</p>
            ) : (
              <p>-</p>
            )}
          </div>
          <div>
            <h5>NICKNAME</h5>
            {currentUser ? (
              <p>{currentUser.nickname ? currentUser.nickname : "-"}</p>
            ) : (
              <p>-</p>
            )}
          </div>
          <div>
            <h5>EMAIL</h5>
            {currentUser ? (
              <p>{currentUser.email ? currentUser.email : "-"}</p>
            ) : (
              <p>-</p>
            )}
          </div>
        </div>
        <div className={styles.stats}>
                <h4>Store Stats</h4>
                <hr/>
            <div className={styles.statDetails}>
                <div className={styles.imgs}>
                    <h5>Image(s)</h5>
                    <p>5</p>
                </div>
                <div className={styles.vids}>
                    <h5>Video(s)</h5>
                    <p>5</p>
                </div>
                <div className={styles.auds}>
                    <h5>Audio(s)</h5>
                    <p>5</p>
                </div>
                <div className={styles.docs}>
                    <h5>Doc(s)</h5>
                    <p>5</p>
                </div>
            </div>
        </div>
      </div>
    );
}

const mapStateToProps = ({ currentUser }) => {
    return{
        currentUser
    }
}

export default connect(mapStateToProps)(UserDetails);