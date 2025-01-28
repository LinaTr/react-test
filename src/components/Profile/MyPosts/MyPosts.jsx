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
          <Post />
          <Post />
        </div>
      </div>
  );
}

export default MyPosts;
