import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let posts = [
  { id: 1, message: "Hello! How are you doing?", likesCount: 20 },
  { id: 2, message: "It's my first post", likesCount: 40 },
];

let dialogs = [
  { id: 1, name: "Mary" },
  { id: 2, name: "Kate" },
  { id: 3, name: "Alex" },
  { id: 4, name: "Eva" },
  { id: 5, name: "Julia" },
];

let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "Whats's your name?" },
  { id: 3, message: "How are you doing?" },
  { id: 4, message: "Where are you from?" },
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
