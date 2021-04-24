import Button from '@material-ui/core/Button';
import {
  Link
} from "react-router-dom";

import styles from './index.module.scss';

const Navigation = () => {
  return (
  <nav className={styles.navbar}>
    <Button><Link to="/profile">Profile</Link></Button>
    <Button><Link to="/chat">Chat</Link></Button>
  </nav>
  )
}

export default Navigation
