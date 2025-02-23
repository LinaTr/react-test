import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {
  let postsElements = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    // props.addPost();
    props.dispatch({ type: "ADD-POST"});
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // props.updateNewPostText(text);
    props.dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: text});
  };

  return (
    <div className={s.postsBlock}>
      <h3>Мои посты</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Добавить пост</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
}

export default MyPosts;
