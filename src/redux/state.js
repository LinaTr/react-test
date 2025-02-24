const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
    },
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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export function addPostActionCreator() {
  return {
    type: ADD_POST,
  };
}

export function updateNewPostTextActionCreator(text) {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
}
export default store;
