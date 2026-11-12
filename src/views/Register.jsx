
export default function Register() {
  return (
    <section className="form_container">
      <h1>Registrazione</h1>

      <form className="auth_form">
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />

        <button type="button">Registrati</button>
      </form>
    </section>
  );
}
