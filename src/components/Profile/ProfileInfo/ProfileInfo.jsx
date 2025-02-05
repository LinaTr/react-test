import s from "./ProfileInfo.module.css";

function ProfileInfo() {
  return (
    <div>
      <div>
        <img src="https://img1.akspic.ru/previews/5/3/0/9/7/179035/179035-voda-gora-gidroresursy-rastenie-oblako-550x310.jpg" />
      </div>
      <div className={s.descriptionBlock}>ava</div>
    </div>
  );
}

export default ProfileInfo;
