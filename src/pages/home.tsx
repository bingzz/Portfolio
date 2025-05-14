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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nemo, eos autem temporibus quibusdam vel laudantium quisquam quae harum sint provident eaque iure magnam explicabo at magni maiores reprehenderit exercitationem natus laborum. Cumque dolores excepturi unde! Nihil quia animi voluptate saepe nisi dolor, possimus aut aspernatur autem! Odio iusto illum, unde eaque mollitia quisquam, odit amet sequi cumque numquam, adipisci et dolores? Pariatur, molestias quis. Praesentium minima ipsam architecto mollitia non. Deserunt odio eos illo voluptatum amet non esse fugiat ex repudiandae. Necessitatibus rerum atque excepturi omnis earum quasi saepe veniam reiciendis eaque, provident, repellendus veritatis deleniti nesciunt incidunt vitae!</p>
      <br />
      <p>Lorem ipsum dolor sit amet.</p>
      <br />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex neque quisquam eveniet! Commodi deserunt facere consequuntur exercitationem possimus omnis autem facilis! Voluptatem animi nam incidunt neque magnam, et dolore dicta repellendus aliquam nisi maiores adipisci exercitationem architecto quaerat atque illo sint tempore officiis accusamus eius, praesentium sed. Vero, tempore ipsam!</p>
    </div>
  );
}

function TechStack() {
  return (
    <div className="stack">
      <h3>My Technology Stack</h3>
      <hr />
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
