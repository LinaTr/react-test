import { NavLink } from "react-router-dom";
import s from "./Message.module.css";

function Message(props) {
  return (
    <div className={s.dialog}>{props.message}</div>
  );
}

export default Message;
