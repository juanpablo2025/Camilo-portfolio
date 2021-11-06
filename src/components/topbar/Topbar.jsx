import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            CAMILO_INK_TATTO
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=573006654298"
            className="itemContainer"
          >
            <Person className="icon" />
            <span>+ 57 300 665 42 98</span>
          </a>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>camilo@hotmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
