
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { UserContext } from "../context/UserContext";

export default function Register() {
  const { register: registerUser } = useContext(UserContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    registerUser({
      name: data.username,
      email: data.email,
    });

    navigate("/");
  };

  return (
    <section className="flex min-h-[80vh] items-center justify-center p-6">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="card-title justify-center text-2xl">
            Registrazione
          </h1>

          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(handleRegister)}
            noValidate
          >
            <label htmlFor="username">Nome:</label>
            <input
              type="text"
              id="username"
              className="input w-full"
              {...register("username", {
                required: "Il nome è obbligatorio",
                maxLength: {
                  value: 50,
                  message: "Massimo 50 caratteri",
                },
              })}
            />
            {errors.username && (
              <p className="text-sm text-red-500">
                {errors.username.message}
              </p>
            )}

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
              Registrati
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
