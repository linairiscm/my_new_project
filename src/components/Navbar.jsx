import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../context/UserContext";
import useScroll from "../hooks/useScroll";

export default function Navbar() {
  const { user } = useContext(UserContext);
  const [scrolled, scrollY] = useScroll();

  return (
    <nav
      ref={scrolled}
      className={`navbar ${scrollY > 0 ? "dark_navbar" : "light_navbar"}`}
    >
      <Link to="/">Home</Link>

      {user && <Link to="/posts">Posts</Link>}

      <Link to="/login">Login</Link>

      {!user && <Link to="/register">Register</Link>}

      {user && <span className="user_name">{user.name}</span>}
    </nav>
  );
}