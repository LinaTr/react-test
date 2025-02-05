import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs(props) {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Mary" id="1" />
        <DialogItem name="Kate" id="2" />
        <DialogItem name="Alex" id="3" />
        <DialogItem name="Eva" id="4" />
        <DialogItem name="Julia" id="5" />
      </div>
      <div className={s.messages}>
        <Message message="Hi" />
        <Message message="Whats's your name?" />
        <Message message="How are you doing?" />
        <Message message="Where are you from?" />
      </div>
    </div>
  );
}

export default Dialogs;
