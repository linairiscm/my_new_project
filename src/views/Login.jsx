
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = () => {
  };

  return (
    <section className="flex min-h-[80vh] items-center justify-center p-6">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="card-title justify-center text-2xl">
            Login
          </h1>

          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(handleLogin)}
            noValidate
          >
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="input w-full"
              {...register("email", {
                required: "L'email è obbligatoria",
                maxLength: {
                  value: 50,
                  message: "Massimo 50 caratteri",
                },
              })}
            />
            {errors.email && (
              <p className="text-sm text-red-500">
                {errors.email.message}
              </p>
            )}

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className="input w-full"
              {...register("password", {
                required: "La password è obbligatoria",
                maxLength: {
                  value: 50,
                  message: "Massimo 50 caratteri",
                },
              })}
            />
            {errors.password && (
              <p className="text-sm text-red-500">
                {errors.password.message}
              </p>
            )}

            <button type="submit" className="btn btn-primary mt-4">
              Accedi
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
