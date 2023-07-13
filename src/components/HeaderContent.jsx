/* eslint-disable react/prop-types */
import { useState } from "react";

const links = [
  {
    id: 1,
    url: "home",
    text: "Home",
  },
  {
    id: 2,
    url: "about",
    text: "About",
  },
  {
    id: 3,
    url: "music",
    text: "Music",
  },
  {
    id: 4,
    url: "contact",
    text: "Contact",
  },
];

const HeaderContent = () => {
  const [navMenu, setNavMenu] = useState(false);
  const [showNavMenu, setShowNavMenu] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavMenu(true);
    } else {
      setNavMenu(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <header className="header" id="home">
      <div
        className={showNavMenu ? "nav-container show-navmenu" : "nav-container"}
      >
        <nav className={navMenu ? "header-nav active" : "header-nav"}>
          <ul className="header-nav_links">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={`#${url}`}>{text}</a>
                </li>
              );
            })}
          </ul>
          <button
            className="btn close-btn"
            onClick={() => setShowNavMenu(false)}
          >
            <i className="fas fa-times"></i>
          </button>
        </nav>
      </div>
      <section className="header-section">
        <article className="header-section_article">
          <h1>
            <em>Music!</em> Change the World!
          </h1>
          <p>My Portfolio about My music taste</p>
        </article>
      </section>
      <button className="btn toggle-btn" onClick={() => setShowNavMenu(true)}>
        <i className="fas fa-bars"></i>
      </button>
    </header>
  );
};

export default HeaderContent;
