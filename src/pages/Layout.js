import { Outlet, Link } from "react-router-dom";
import llista from "./Llista";

export default function Layout() {
  return (
    <>
      <header>Exercicis React</header>
      <div className="HolyGrail-body">
        <main className="HolyGrail-content">
          <Outlet />
        </main>
        <nav className="HolyGrail-nav">
          <ul>
            <li>
              <Link to="/">🏠 Home</Link>
            </li>
            {llista.map((item) => (
              <li>
                <Link key={item} to={item.path}>
                  {item.titol}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <aside className="HolyGrail-ads">
          Google Ads
          <br />
          Por qué este anuncio?
        </aside>
      </div>
      <footer>
        by <b>Gerard Hueltes™</b>
      </footer>
    </>
  );
}
