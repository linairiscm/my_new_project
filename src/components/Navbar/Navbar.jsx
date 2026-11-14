import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../../context/UserContext";
import useScroll from "../../hooks/useScroll";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { user } = useContext(UserContext);
  const [scrolled, scrollY] = useScroll();

  return (
    <nav
      ref={scrolled}
      className={`${styles.navbar} ${
        scrollY > 0 ? styles.darkNavbar : styles.lightNavbar
      } flex items-center justify-center gap-5 p-4`}
    >
      <Link to="/" className="font-semibold text-white">
        Home
      </Link>

      {user && (
        <Link to="/posts" className="font-semibold text-white">
          Posts
        </Link>
      )}

      <Link to="/login" className="font-semibold text-white">
        Login
      </Link>

      {!user && (
        <Link to="/register" className="font-semibold text-white">
          Register
        </Link>
      )}

      {user && (
        <span className="font-semibold text-blue-200">
          {user.name}
        </span>
      )}
    </nav>
  );
}