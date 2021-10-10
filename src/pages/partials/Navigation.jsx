import { NavLink, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Link to="/" className="navbar-brand">
          <span role="img" aria-label="Home">
            📺 🍿
          </span>
          MovieAPI
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/trending-daily" className="nav-link">
              Trending
            </NavLink>
            <NavLink to="/top-rated" className="nav-link">
              Top Rated
            </NavLink>
            <NavLink to="/nowplaying" className="nav-link">
              Now Playing
            </NavLink>
            <NavLink to="/genres" className="nav-link">
              Genres
            </NavLink>
            <NavLink to="/prev-ten" className="nav-link">
              Previously Clicked
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
