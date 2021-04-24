import {
  CHANGE_USERNAME,
  ADD_MESSAGE
} from "./consts";

const initialState = {
  username: localStorage.getItem("username"),
  messages: [{
      text: '',
      authorId: ''
  }]
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME: {
      return ({
        ...state,
        username: action.payload
      })
    }
    case ADD_MESSAGE: {
      return({
        ...state,
        messages: [
          ...state.messages,
          action.payload]
      })
    }
    default:
      return state
  }
}
