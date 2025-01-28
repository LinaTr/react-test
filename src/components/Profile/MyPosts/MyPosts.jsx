import s from "./MyPosts.module.css"
import Post from "./Post/Post";

function MyPosts() {
  return (
      <div>
        My posts
        <div>
          <textarea name="" id=""></textarea>
          <button>Add post</button>
        </div>
        <div className={s.posts}>
          <Post message="Hello! How are you doing?" like="20"/>
          <Post message="It's my first post" like="40"/>
        </div>
      </div>
  );
}

export default MyPosts;
