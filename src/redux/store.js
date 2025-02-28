import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hello! How are you doing?", likesCount: 20 },
        { id: 2, message: "It's my first post", likesCount: 40 },
      ],
      newPostText: "Hello World!",
    },
    dialogsPage: {
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
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("Changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};


export default store;
