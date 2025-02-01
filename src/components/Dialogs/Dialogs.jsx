import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

function Dialogs(props) {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>
          <NavLink to="/dialogs/1">Mary</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Kate</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Alex</NavLink>
        </div>
        <div className={`${s.dialog} ${s.active}`}>
          <NavLink to="/dialogs/4">Eva</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/5">Julia</NavLink>
        </div>
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
