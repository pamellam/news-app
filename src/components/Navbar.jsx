const Navbar = ({ setCategory }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div
                onClick={() => setCategory('technology')}
                className="nav-link"
              >
                Techology
              </div>
            </li>
            <li className="nav-item">
              <div onClick={() => setCategory('business')} className="nav-link">
                Buisness
              </div>
            </li>
            <li className="nav-item">
              <div onClick={() => setCategory('health')} className="nav-link">
                Health
              </div>
            </li>
            <li className="nav-item">
              <div onClick={() => setCategory('sciense')} className="nav-link">
                Science
              </div>
            </li>
            <li className="nav-item">
              <div onClick={() => setCategory('sports')} className="nav-link">
                Sports
              </div>
            </li>
            <li className="nav-item">
              <div
                onClick={() => setCategory('entertainment')}
                className="nav-link"
              >
                Entertainment
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
