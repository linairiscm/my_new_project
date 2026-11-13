import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function Register() {
  const { register } = useContext(UserContext);

  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();

  const handleChange = (e) => {
    if (e.target.id === "name") {
      setUserName(e.target.value);
    } else if (e.target.id === "email") {
      setUserEmail(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userName && userEmail) {
      register({ name: userName, email: userEmail });
    }
  };

  return (
    <section className="form_container">
      <h1>Registrazione</h1>

      <form className="auth_form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
        />

        <button type="submit">Registrati</button>
      </form>
    </section>
  );
}