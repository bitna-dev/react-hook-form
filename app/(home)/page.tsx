"use client";

import { HiFire } from "react-icons/hi";
import { useForm, SubmitHandler } from "react-hook-form";
import { MdEmail, MdKey } from "react-icons/md";
import { FaCheckCircle, FaUser } from "react-icons/fa";
import { useState } from "react";

type Inputs = {
  email: string;
  username: string;
  password: string;
};
export default function Home() {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    setFocus,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data.password !== "12345") {
      setError("password", {
        type: "manual",
        message: "Wrong password",
      });
      setFocus("password");
      setSuccess(false);
      return;
    }
    console.log(data);
    setSuccess(true);
    reset();
  };
  return (
    <div className=" p-20 bg-[#F9F8F7] w-screen h-screen flex flex-col items-center gap-10 ">
      <h1>
        <HiFire className="text-5xl" />
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 w-full max-w-lg min-w-sm "
      >
        <div className="input-containers">
          <MdEmail className="absolute left-4" />
          <input placeholder="Email" {...register("email")} />
        </div>

        <div className="input-containers">
          <FaUser className="absolute left-4" />
          <input
            placeholder="Username"
            {...register("username", { required: true })}
          />
        </div>

        <div className="input-containers">
          <MdKey className="absolute left-4" />
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
            })}
          />
        </div>
        {errors.password && <p className="text-red-500 ">Wrong password</p>}

        <input type="submit" />
        {success && (
          <p className="flex items-center justify-center gap-4 bg-green-600 text-center font-semibold text-white p-3 rounded-xl">
            <FaCheckCircle /> Welcome back!
          </p>
        )}
      </form>
    </div>
  );
}
