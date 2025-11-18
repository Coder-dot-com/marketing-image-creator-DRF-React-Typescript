import React from "react";

const Header = () => {
  const isLoggedIn = !!localStorage.getItem("access");

  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    window.location.href = "/login";
  };

  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
        <a className="navbar-brand" href="/">Image Creator</a>

        <div className="ms-auto d-flex align-items-center">
          {!isLoggedIn ? (
            <>
              <a href="/login" className="nav-link text-white me-3">Login</a>
              <a href="/register" className="nav-link text-white">Register</a>
            </>
          ) : (
            <>
              <a href="/saved" className="nav-link text-white me-3">Saved Images</a>
              <button className="btn btn-light btn-sm" onClick={logout}>
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
