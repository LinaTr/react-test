import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
  return (
    <div>
      <div>
        <img src="https://img1.akspic.ru/previews/5/3/0/9/7/179035/179035-voda-gora-gidroresursy-rastenie-oblako-550x310.jpg" />
      </div>
      <div>ava</div>
      <MyPosts />
    </div>
  );
}

export default Profile;
