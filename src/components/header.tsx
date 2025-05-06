import { NavLink } from "react-router-dom";

const nav = [
  {
    path: '/',
    page: 'Home'
  },
  {
    path: '/projects',
    page: 'Projects'
  },
  {
    path: '/contact',
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
              <li key={item.path}>
                <NavLink to={item.path} className={({isActive}) => isActive ? 'active' : ''}>
                {item.page}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
}