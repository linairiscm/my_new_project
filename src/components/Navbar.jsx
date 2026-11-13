import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../context/UserContext";

export default function Navbar() {
  const { user } = useContext(UserContext);

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>

      {user && <Link to="/posts">Posts</Link>}

      <Link to="/login">Login</Link>

      {!user && <Link to="/register">Register</Link>}

      {user && <span className="user_name">{user.name}</span>}
    </nav>
  );
}