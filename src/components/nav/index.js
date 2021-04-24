import Button from '@material-ui/core/Button';
import {
  Link
} from "react-router-dom";

const Navigation = () => {
  return (
  <nav>
    <Button><Link to="/profile">Profile</Link></Button>
    <Button><Link to="/chat">Chat</Link></Button>
  </nav>
  )
}

export default Navigation
