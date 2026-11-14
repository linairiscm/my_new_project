export default function Login() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center p-6">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="card-title justify-center text-2xl">
            Login
          </h1>

          <form className="flex flex-col gap-4">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="input w-full"
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className="input w-full"
            />

            <button type="button" className="btn btn-primary mt-4">
              Accedi
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}