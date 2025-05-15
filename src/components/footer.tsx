import { Link } from "react-router-dom";

import github from '../assets/img/svg/github.svg';
import fb from '../assets/img/svg/fb.svg';
import ig from '../assets/img/svg/ig.svg';
import linkedIn from '../assets/img/svg/linkedin.svg';

const urls = [
  {
    link: 'https://github.com/bingzz',
    name: 'Github',
    src: github
  },
  {
    link: 'https://www.linkedin.com/in/irving-real-139960245',
    name: 'LinkedIn',
    src: linkedIn
  },
  {
    link: 'https://www.facebook.com/bingz.real',
    name: 'Facebook',
    src: fb
  },
  {
    link: 'https://www.instagram.com/bingz.real',
    name: 'Instagram',
    src: ig
  },
];

export default function Footer() {
  return (
    <footer>
      <ul>
        {
          urls.map(url =>
            <li key={url.link}>
              <Link to={url.link} target="_blank">
                <img src={url.src} alt={url.name} title={"Irving's " + url.name} />
              </Link>
            </li>)
        }
      </ul>
      <p>&copy; Irving Craig Real.</p>
    </footer>
  );
}