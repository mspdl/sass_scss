import Avatar from "../img/me.jpg";
import "../styles/components/sidebar.scss";
import InformationContainer from "./InformationContainer";
import SocialNetwork from "./SocialNetwork";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Morgan Espindola" />
      <div className="title">Software Engineer</div>
      <SocialNetwork />
      <InformationContainer />
      <a href="" className="btn">
        Download CV
      </a>
    </aside>
  );
};

export default Sidebar;
