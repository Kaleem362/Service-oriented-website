import { React, useContext } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import Store from "../Store/ContextAPI";

function Header() {
  const { userLogOut } = useContext(Store);

  return (
    <>
      <header className="d-flex flex-wrap justify-content-center py-3 px-3">
        <Link
          href="/Home"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
            <use xlinkHref="#"></use>
          </svg>
          <span className="fs-4 header-Name fw-bold">Matrix web solution</span>
        </Link>
        <div className="container h-auto w-25 bg-transparent">
          <span
            to="#"
            className="based-text bg-transparent mx-5 text-decoration-none "
          >
            Based
            <br />
            in Mingora
            <br /> swat
          </span>
        </div>

        <ul className="nav nav-pills align-items-center">
          <li className="nav-item">
            <Link to="/Home" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Home" className="nav-link">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Home" className="nav-link">
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Home" className="nav-link">
              About us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Home" className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/LoginPage" id="logbtn" onClick={userLogOut}>
              Log out
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
