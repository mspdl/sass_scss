import { AiFillEnvironment, AiFillPhone, AiOutlineMail } from "react-icons/ai";
import "../styles/components/information-container.scss";

const informationData = [
  { dataType: "Phone", description: "(48) 99999-9999", icon: <AiFillPhone /> },
  {
    dataType: "E-mail",
    description: "morgan.espindola@gmail.com",
    icon: <AiOutlineMail />,
  },
  {
    dataType: "Location",
    description: "Palhoça/SC - Brazil",
    icon: <AiFillEnvironment />,
  },
];

const InformationContainer = () => {
  return (
    <section id="information-container">
      {informationData.map((information) => (
        <div
          className="info-card"
          id={information.dataType}
          key={information.description}
        >
          {information.icon}
          <div>
            <h3>{information.dataType}</h3>
            <p>{information.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default InformationContainer;
