import React from "react";
import { isUserLoggedIn } from "../services/auth";

interface NavBarProps {
  handeLogoutRoute: Function;
}

const NavBar = ({ handeLogoutRoute }: NavBarProps) => {

  const logout = () => {
    localStorage.removeItem('USER_ID');
    handeLogoutRoute();
  }

  return (
    <>
      <div className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
                <a className="navbar-brand" href="#">
                  WebAunction
                </a>
                <div
                  className="navbar-collapse justify-content-between"
                  id="navbarText"
                >
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Products
                      </a>
                    </li>
                  </ul>
                  {isUserLoggedIn() && (
                    <a className="btn btn-primary" onClick={logout} type="button">
                      Logout
                    </a>
                  )}

                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
