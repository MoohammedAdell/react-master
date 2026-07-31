import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../components/registerSchema/registerSchema";

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fname: "Mohamed",
      lname: "Adel",
      mail: "mohamed@gmail.com",
      pass: "Hamoo111",
      confirmPass: "Hamoo111",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <h1>Register Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="text" placeholder="first name" {...register("fname")} />
        </div>
        {errors.fname && <p style={{ color: "red" }}>{errors.fname.message}</p>}
        <div>
          <input type="text" placeholder="last name" {...register("lname")} />
        </div>
        {errors.lname && <p style={{ color: "red" }}>{errors.lname.message}</p>}
        <div>
          <input
            type="email"
            placeholder="enter your email.."
            {...register("mail")}
          />
        </div>
        {errors.mail && <p style={{ color: "red" }}>{errors.mail.message}</p>}
        <div>
          <input
            type="password"
            placeholder="enter your password"
            {...register("pass")}
          />
        </div>
        {errors.pass && <p style={{ color: "red" }}>{errors.pass.message}</p>}
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPass")}
        />

        {errors.confirmPass && (
          <p style={{ color: "red" }}>{errors.confirmPass.message}</p>
        )}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
