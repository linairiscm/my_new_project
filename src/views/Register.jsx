import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router";

export default function Register() {
  const { register } = useContext(UserContext);
  const navigate = useNavigate();

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
      navigate("/");
    }
  };

  return (
    <section className="flex min-h-[80vh] items-center justify-center p-6">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="card-title justify-center text-2xl">
            Registrazione
          </h1>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              className="input w-full"
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="input w-full"
              onChange={handleChange}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className="input w-full"
            />

            <button type="submit" className="btn btn-primary mt-4">
              Registrati
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}