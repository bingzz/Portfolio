import { MouseEventHandler, useState } from "react";
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
  // Toggle menu
  const [toggle, setToggled] = useState(false);

  const toggleMenu = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement | HTMLLIElement>) => !!toggle ? setToggled(false) : setToggled(true);

  return (
    <header>
      <nav>
        <h3>Welcome, Stranger</h3>
        <div className="topbar">
          <ul className="navigation">
            {
              nav.map(item => (
                <li key={item.path}>
                  <NavLink to={item.path} className={({ isActive }) => isActive ? 'active' : ''}>
                    {item.page}
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="sidebar">
          <button onClick={toggleMenu}><span className="hamburger"></span></button>
          <ul className={`navigation ${toggle ? 'toggle' : ''}`}>
            {
              nav.map(item => (
                <li key={item.path} onClick={toggleMenu}>
                  <NavLink to={item.path} className={({ isActive }) => isActive ? 'active' : ''}>
                    {item.page}
                  </NavLink>
                </li>
              ))
            }
          </ul>
          <div className={`sidebar-overlay ${toggle ? 'toggle' : ''}`} onClick={toggleMenu}></div>
        </div>
      </nav>
      {/* <nav className="topbar">
        <ul className="navigation">
          {
            nav.map(item => (
              <li key={item.path}>
                <NavLink to={item.path} className={({ isActive }) => isActive ? 'active' : ''}>
                  {item.page}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
      <nav className="sidebar">
        <ul className="sidebar-nav">
          {nav.map(item => (
            <li key={item.path}>
              <NavLink to={item.path} className={({ isActive }) => isActive ? 'active' : ''}>
                {item.page}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav> */}
    </header>
  );
}