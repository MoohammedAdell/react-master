import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AuthContext } from "../context/AuthContext";
import { loginSchema } from "../components/loginSchema/loginSchema";

function Login() {
  const { login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data) {
    console.log(data);

    login({
      id: 1,
      name: "Mohamed",
      email: data.email,
    });

    reset();
  }

  return (
    <div className="container mt-5">
      <form
        className="w-50 mx-auto shadow p-4 rounded"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-center mb-4">Login</h2>

        {/* Email */}

        <div className="mb-3">
          <label>Email</label>

          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            {...register("email")}
          />

          {errors.email && (
            <p className="text-danger mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}

        <div className="mb-3">
          <label>Password</label>

          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            {...register("password")}
          />

          {errors.password && (
            <p className="text-danger mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;