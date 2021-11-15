import React from "react";

const NavBar = () => {
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
                  <a href="#" className="btn btn-primary" type="button">
                    Login
                  </a>
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
