import "bootstrap/dist/css/bootstrap.min.css";
import logoBinabox from "../../assets/logo/logoBinabox.png";
import "./navBar.css";
import { useNavigate } from "react-router-dom";

export function NavBar() {

const navigate = useNavigate()

const handleContactClick = () => {
  navigate('/contact')
}

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid justify-content-center">
        <a className="navbar-brand" href="#">
          <img
            src={logoBinabox}
            alt="logo"
            className="d-inline-block align-text-top"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
          <div className="container-logo_theme">
            <div className="logo_theme">
              <span className="fa-solid fa-sun" />
            </div>
          </div>
          <div className="buttons_navbar">
            <button type="button" className="button">
              <div className="span">
                <span className="fa-brands fa-discord"></span>
                <span onClick={handleContactClick}>DISCORD</span>
              </div>
            </button>
            <button type="button" className="button2">
              <div className="span">
                <span className="fa-solid fa-globe"></span>
                <span>CONNECT</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
