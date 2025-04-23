"use server";
import { z } from "zod";
const checkEmail = (email: string) => !email.includes("@zod.com");
const checkPassword = (password: string) => !/\d/.test(password);
export const creatAccount = async (prevState: any, formData: FormData) => {
  const formSchema = z.object({
    username: z
      .string()
      .min(5, "Username should be at least 5 characters long."),
    password: z
      .string()
      .min(10, "Password should be at least 10 characters long.")
      .refine(
        checkPassword,
        "Password should contain at least one number(0123456789)."
      ),
    email: z
      .string()
      .email()
      .refine(checkEmail, "Only @zod.com emails are allowed"),
  });
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const result = formSchema.safeParse(data);
  console.log(result.error?.flatten());
  if (!result.success) return result.error.flatten();

  // try {
  //   formSchema.parse(data);
  // } catch (e) {
  //   console.log(e);
  // }
};
