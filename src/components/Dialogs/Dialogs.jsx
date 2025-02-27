import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { updateNewMessageBodyCreator } from "../../redux/dialogsReducer";
import { sendMessageCreator } from "../../redux/dialogsReducer";

function Dialogs(props) {

  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = state.messages.map((message) => (
    <Message message={message.message} />
  ));

  let newMessageBody = state.newMessageBody;

  function onSendMessageClick() {
    props.store.dispatch(sendMessageCreator());
  }

  function onNewMessageChange(e) {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder="Напишите сообщение"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Отправить сообщение</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
