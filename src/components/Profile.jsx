import s from "./Profile.module.css"

function Profile() {
  return (
    <div className={s.content}>
      <div>
        <img src="https://img1.akspic.ru/previews/5/3/0/9/7/179035/179035-voda-gora-gidroresursy-rastenie-oblako-550x310.jpg" />
      </div>
      <div>ava</div>
      <div>
        My posts
        <div>New post</div>
        <div className={s.posts}>
          <div className={s.item}>post 1</div>
          <div className={s.item}>post 2</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
