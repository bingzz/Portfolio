import { personal_info } from "../data/constants";
import educ from '../assets/lottie/education.json';
import work from '../assets/lottie/work_experience.json';
import LottieTemplate from "../components/Lottie";

export default function Home() {
  return (
    <main id="home">
      <Hero />
      <AboutMe />
      <TechStack />
      <Experience />
      <Education />
    </main>
  );
}

function Hero() {
  return (
    <div className="hero">
      <div className="face">
        <span className="img"></span>
      </div>
      <div className="heading">
        <h1>{personal_info.name}</h1>
        <div>
          <h3>Junior Software Engineer</h3>
          <i>– Progression comes naturally when you're having fun.</i>
        </div>
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="about">
      <h3>About Me</h3>
      <hr />
      <div className="container">
        <div className="details">
          <p>Hello stranger, I am an junior <strong>Software Engineer</strong> who has passion for coding. I love to learn new technologies that make myself improve to become better and to provide solutions for everyone. I am experienced with Web Development and I am open to any opportunities that aligns with my skillset and your requirements.</p>
          <br />
          <p>I may be new, but I'm still making progress. In order to become better is by just <strong>keep practicing</strong>.</p>
        </div>
        <div className="image">
          <span className="pic"></span>
        </div>
      </div>

    </div>
  );
}

function TechStack() {
  return (
    <div className="stack">
      <h3>My Skillsets</h3>
      <hr />
      <div className="language">
        <h4>Languages</h4>
        <ul className="slider">
          {personal_info.stack.map((item, key) => (
            <li key={key} className="slide">
              <img src={item.icon_src} alt={item.name} title={item.name} />
            </li>
          ))}
        </ul>
      </div>
      <div className="frameworks">
        <h4>Frameworks</h4>
        <ul className="slider">
          {personal_info.frameworks.map((item, key) => (
            <li key={key}>
              <img src={item.icon_src} alt={item.name} title={item.name} />
            </li>
          ))}
        </ul>
      </div>
      <div className="tools">
        <h4>Tools</h4>
        <ul className="slider">
          {personal_info.tools.map((item, key) => (
            <li key={key}>
              <img src={item.icon_src} alt={item.name} title={item.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div className="experience">
      <h3>Work Experience</h3>
      <hr />
      <div className="container">
        <ul className="blocks">
          {personal_info.experience.map((item, key) => (
            <li key={key}>
              <div className="logo">
                <img src={item.icon_src} alt={`${item.company}_${key}`} />
              </div>
              <div className="details">
                <p className="position">{item.position}</p>
                <p className="company"><strong>{item.company}</strong></p>
                <p className="length">{item.length}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="lottie">
          <LottieTemplate src={work} />
        </div>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div className="education">
      <h3>Education</h3>
      <hr />
      <div className="container">
        <div className="lottie">
          <LottieTemplate src={educ} />
        </div>
        <ul className="blocks">
          {personal_info.education.map((item, key) => (
            <li key={key}>
              <div className="logo">
                <img src={item.icon_src} alt={`${item.name}_${key}`} />
              </div>
              <div className="details">
                <p className="achievement"><strong>{item.achievement}</strong></p>
                <p className="name">{item.name}</p>
                <p className="length">{item.length}</p>
              </div>
              {/* {key !== personal_info.education.length - 1 ? <span>vertical</span> : null} */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
