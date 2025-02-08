import s from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts() {
  let posts = [
    { id: 1, message: "Hello! How are you doing?", likesCount: 20 },
    { id: 2, message: "It's my first post", likesCount: 40 },
  ];

  let postsElements = posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea name="" id=""></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;
