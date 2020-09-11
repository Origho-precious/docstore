import React, { useState } from 'react';
import styles from './upload.module.scss';
import Button from '../button';

const Upload = (props) => {
    const [file, setFile] = useState('');

    const fileHandler = (e) => {
        
    }

    return (
      <div className={styles.Upload}>
        <h2>Your Documents</h2>
        <hr />
        <div className={styles.inputs}>
          <h4>Upload a file.</h4>
          <input
            onChange={() => setFile(file)}
            type="file"
            value={file}
            id="upload"
          />
          <Button click={fileHandler}>UPLOAD</Button>
        </div>
      </div>
    );
}

export default Upload;