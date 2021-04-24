import { CHANGE_USERNAME, ADD_MESSAGE } from './consts'

const changeUsername = newUsername => {
  return ({
    type: CHANGE_USERNAME,
    payload: newUsername
  })
}

const addMessage = newMessage => {
  return ({
    type: ADD_MESSAGE,
    payload: newMessage
  })
}

export { changeUsername, addMessage };
