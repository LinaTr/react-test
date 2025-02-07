import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs(props) {
  let dialogsData = [
    { id: 1, name: "Mary" },
    { id: 2, name: "Kate" },
    { id: 3, name: "Alex" },
    { id: 4, name: "Eva" },
    { id: 5, name: "Julia" },
  ];

  let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Whats's your name?" },
    { id: 3, message: "How are you doing?" },
    { id: 4, message: "Where are you from?" },
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
        <Message message={messagesData[3].message} />
      </div>
    </div>
  );
}

export default Dialogs;
