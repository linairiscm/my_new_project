
export default function Login() {
  return (
    <section className="form_container">
      <h1>Login</h1>

      <form className="auth_form">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />

        <button type="button">Accedi</button>
      </form>
    </section>
  );
}
