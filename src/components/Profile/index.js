import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { changeUsername } from "../../store/actions.js"

const Profile = () => {
  const [newName, changeName] = useState('');
  const dispatch = useDispatch();

  const changeInput = (event) => changeName(event.target.value);
  const handleSubmit = (event) => {
    changeName('');
    dispatch(changeUsername(newName));
    localStorage.setItem("username", newName);
  }

  return(
    <div className="main">
      <h1>Profile</h1>
      <p>Username: <strong>{localStorage.username}</strong></p>
      <label>Please, enter your name:
        <input value={newName} onChange={changeInput}></input>
      </label>
      <button onClick={handleSubmit} className="primary">Save</button>
    </div>
  )
}

export default Profile
