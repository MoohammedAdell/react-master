import z from "zod";

export const registerSchema = z
  .object({
    fname: z.string().min(3, "First name must be at least 3 characters"),

    lname: z.string().min(1, "Last name must be at least 1 characters"),

    mail: z.string().email("Please enter a valid email"),

    pass: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),

    confirmPass: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
  })
  .refine((data) => data.pass === data.confirmPass, {
    message: "Message dosn't match",
    path: ["confirmPass"],
  });
