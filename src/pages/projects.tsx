import { projects } from "../data/constants";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Here are the Projects I have made so far. Note that these are only public repositories that I have posted here:</h2>
      <ul className="list">
        {projects.map((item, key) => (
          <li key={key}>
            <a href={item.url} target="_blank" rel="noreferrer">
              <strong>{item.name}</strong>
            </a>
            <div className="stack">Stack:
              {item.languages.map((item, key) => (
                <span key={key}>
                  <img src={item.icon_src} alt={item.language} title={item.language} />
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}