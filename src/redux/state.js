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
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("Changed");
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
