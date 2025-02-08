import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs(props) {
  let dialogs = [
    { id: 1, name: "Mary" },
    { id: 2, name: "Kate" },
    { id: 3, name: "Alex" },
    { id: 4, name: "Eva" },
    { id: 5, name: "Julia" },
  ];

  let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Whats's your name?" },
    { id: 3, message: "How are you doing?" },
    { id: 4, message: "Where are you from?" },
  ];

  let dialogsElements = dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = messages.map((message) => (
    <Message message={message.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  );
}

export default Dialogs;
