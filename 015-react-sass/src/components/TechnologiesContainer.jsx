import {
  DiCss3,
  DiHtml5,
  DiJsBadge,
  DiMysql,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import "../styles/components/technologies-container.scss";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "NodeJS", icon: <DiNodejsSmall /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "react", name: "React", icon: <DiReact /> },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Technologies</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="tech-card" id={tech.id} key={tech.id}>
            <div className="tech-title">
              {tech.icon}
              <h3>{tech.name}</h3>
            </div>
            <div className="tech-info">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                distinctio voluptatem minima sapiente blanditiis obcaecati cum,
                ad corporis, harum suscipit dolorum quod a quibusdam optio,
                pariatur repellendus. Consectetur, ad animi.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
