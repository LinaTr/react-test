import s from "./Post.module.css";

function Post() {
  return (
    <div className={s.item}>
      <img src="https://steamuserimages-a.akamaihd.net/ugc/915792449961491113/072EF232A3CD0BC253CDE3E83664D59522BBFCAD/?imw=512&imh=512&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" />
      post 1
      <div>
        <span>Like</span>
      </div>
    </div>
  );
}

export default Post;
