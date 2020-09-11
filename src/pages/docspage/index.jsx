import React from 'react';
import styles from './docs.module.scss';
import Sidebar from '../../components/sidebar';
import Upload from '../../components/upload';

const Docs = (props) => {
    return (
        <div className={styles.Docs}>
            <div className={styles.sidebar}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <Upload/>
                {/* <Upload/> */}
            </div>
        </div>
    );
}

export default Docs;