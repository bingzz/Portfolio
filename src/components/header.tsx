import { Link } from "react-router-dom";

const nav = [
  {
    link: '/',
    page: 'Home'
  },
  {
    link: '/projects',
    page: 'Projects'
  },
  {
    link: '/contact',
    page: 'Contact'
  },
];

export default function Header() {
  return (
    <header>
      <nav>
        <h3>Welcome Visitor!</h3>
        <ul>
          {
            nav.map(item => (
              <li>
                <Link to={item.link}>{item.page}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
}