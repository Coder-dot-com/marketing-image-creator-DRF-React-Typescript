const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
      <a className="navbar-brand" href="/">Marketing Image Creator</a>

      <div className="ms-auto">
        <a className="nav-link text-white d-inline-block me-3" href="/login">
          Login
        </a>
        <a className="nav-link text-white d-inline-block" href="/register">
          Register
        </a>
      </div>
    </nav>
  );
};

export default Header;
