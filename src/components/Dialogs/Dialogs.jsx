import s from "./Dialogs.module.css";

function Dialogs(props) {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>Mary</div>
        <div className={s.dialog}>Kate</div>
        <div className={s.dialog}>Alex</div>
        <div className={`${s.dialog} ${s.active}`}>Eva</div>
        <div className={s.dialog}>Natal</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>Whats's your name?</div>
        <div className={s.message}>How are you doing?</div>
        <div className={s.message}>Where are you from?</div>
      </div>
    </div>
  );
}

export default Dialogs;
