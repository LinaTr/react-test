let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hello! How are you doing?", likesCount: 20 },
      { id: 2, message: "It's my first post", likesCount: 40 },
    ],
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
};

export default state;
