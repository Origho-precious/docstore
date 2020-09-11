import React from 'react';
import styles from './button.module.scss';

const Button = ({click, children}) => {
    return (
      <div className={styles.Button}>
        <button onClick={click}>
          {children}
        </button>
      </div>
    );
}

export default Button