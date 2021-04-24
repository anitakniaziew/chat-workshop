import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as io from 'socket.io-client';

import { addMessage } from "../../store/actions.js"

import styles from './index.module.css';

const Chat = () => {
  const [text, changeText] = useState();
  const name = useSelector(state => state.username);
  const messageList = useSelector(state => state.messages);

  const connectionChat = io.connect("https://chat-server.fbg.pl");

  useEffect(() => {
    connectionChat.on("chat message", ({text, authorId}) => {
      dispatch(addMessage({text, authorId}));
    });
    return () => connectionChat.disconnect();
  },[connectionChat])

  const dispatch = useDispatch();

  const handleTextChange = (event) => {
    changeText(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    changeText('');
    connectionChat.emit("chat message", {
      text: text,
      authorId: name,
    });
    // dispatch(addMessage({text, authorId: name}));
  };

return (
  <div className={styles.chatContainer}>
    <h1>Chat</h1>
    <p>You're writing as: <strong>{name}</strong></p>
    <br />
    <div className={styles.messageList}>
      {messageList.map( ({text, authorId}) => <div key={Math.random()} className={styles.messageItem}>
        <div>{text}</div>
        <div>{authorId}</div>
      </div>)}
    </div>
    <br />
    <div>
      Chat Component
        <label>Please, enter your message: </label>
          Text: <input value={text} onChange={handleTextChange} type="text"></input>
        <button onClick={handleSubmit}>Send</button>
    </div>

    <div>

      All messages:
    </div>
    </div>
)}

export default Chat;
