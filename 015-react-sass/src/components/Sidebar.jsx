import Avatar from "../img/me.jpg";
import "../styles/components/sidebar.scss";
import SocialNetwork from "./SocialNetwork";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Morgan Espindola" />
      <div className="title">Software Engineer</div>
      <SocialNetwork />
      <p>contact</p>
      <a href="" className="btn">
        Download CV
      </a>
    </aside>
  );
};

export default Sidebar;
