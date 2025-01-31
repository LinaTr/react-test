import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? s.active : s.item)}
        >
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/dialogs"
          className={({ isActive }) => (isActive ? s.active : s.item)}
        >
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? s.active : s.item)}
        >
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/music"
          className={({ isActive }) => (isActive ? s.active : s.item)}
        >
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? s.active : s.item)}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
