import styles from './index.css';
import { Button } from 'antd';
const electron = require('electron')

export default function() {

  const openNewBrower = () => {
    electron.ipcRenderer.send('openNewBrower', '');
  }
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <Button onClick={openNewBrower}>打开新窗口</Button>
      </ul>
    </div>
  );
}
