import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import "../styles/components/social-network.scss";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedin /> },
  { name: "github", icon: <FaGithubSquare /> },
];

const SocialNetwork = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href="#" className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetwork;
