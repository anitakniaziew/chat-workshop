import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as io from 'socket.io-client';

import { addMessage } from "../../store/actions.js"

import styles from './index.module.scss';

const Chat = () => {
  const [text, changeText] = useState();
  const [connectionChat, setConnectionChat] = useState();
  const name = useSelector(state => state.username);
  const messageList = useSelector(state => state.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    const connection = io.connect("https://chat-server.fbg.pl")
    connection.on("chat message", ({text, authorId}) => {
      dispatch(addMessage({text, authorId}));
    });
    setConnectionChat(connection);
    return () => connection.disconnect();
  },[])

  const handleTextChange = (event) => {
    changeText(event.target.value)
  }

  const handleSubmit = (event) => {
    changeText('');
    connectionChat.emit("chat message", {
      text: text,
      authorId: name,
    });
  };

return (
  <div className="main">
    <div>
      <h1>Chat</h1>
      <p>You're writing as: <strong>{name}</strong></p>
    </div>
    {connectionChat ?     
      (<>
      <div>
        <label>Please, enter your message: 
        <input value={text} onChange={handleTextChange} type="text"></input>
        </label>
        <button onClick={handleSubmit} className="primary">Send</button>
      </div>
      <div className={styles.messageList}>
        <div className={styles.messageListLabel}>
          <div>Author</div>
          <div>Message</div>
        </div>
        {messageList.map( ({text, authorId}) => <div key={Math.random()} className={styles.messageItem}>
          <div>{authorId}</div>
          <div>{text}</div>
        </div>)}
      </div>
      </>) : "Loading..."}
  </div>
)}

export default Chat;
