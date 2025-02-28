const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND- MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Mary" },
    { id: 2, name: "Kate" },
    { id: 3, name: "Alex" },
    { id: 4, name: "Eva" },
    { id: 5, name: "Julia" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Whats's your name?" },
    { id: 3, message: "How are you doing?" },
    { id: 4, message: "Where are you from?" },
  ],
  newMessageBody: "",
};

function dialogsReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 5, message: body });
      return state;
    default:
      return state;
  }
}
export function updateNewMessageBodyCreator(body) {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
}

export function sendMessageCreator() {
  return {
    type: SEND_MESSAGE,
  };
}

export default dialogsReducer;
