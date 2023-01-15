import { Link, useNavigate } from "react-router-dom";
import clientlogo from "../client-images/client-logo.png";
import clientname from "../client-images/client-name.png";

export default function NavigationBarComponent() {
  const navigate=useNavigate()

  return (
    <div className="navbar-block">
      <div className="hamburger-block"></div>
      <div className="company-name-block"></div>
      <div className="futurescope-block">
        <div onClick={()=>navigate("/")} className="name-text">
          <div className="client-lgo">
            <img src={clientlogo} alt="" />
          </div>
          <div className="client-name">
            <img src={clientname} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
