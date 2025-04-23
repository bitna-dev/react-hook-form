"use client";
import { HiFire } from "react-icons/hi";
import Button from "@components/Button";
import { useFormState } from "react-dom";
import { creatAccount } from "./actions";
import FormInput from "@components/FormInput";

export default function Home() {
  const [state, action] = useFormState(creatAccount, null);
  return (
    <div className=" p-20 bg-[#F9F8F7] w-screen h-screen flex flex-col items-center gap-10 ">
      <h1>
        <HiFire className="text-5xl text-red-400" />
      </h1>
      <form
        action={action}
        className="flex flex-col gap-5 w-full max-w-lg min-w-sm "
      >
        <FormInput
          type="email"
          required
          placeholder="Email"
          name="email"
          icon="email"
          errors={state?.fieldErrors.email}
        />
        <FormInput
          type="text"
          required
          placeholder="Username"
          name="username"
          icon="username"
          errors={state?.fieldErrors.username}
        />
        <FormInput
          type="password"
          required
          placeholder="Password"
          name="password"
          icon="password"
          errors={state?.fieldErrors.password}
        />
        <Button value="Login" />
        {/* {success && (
          <p className="flex items-center justify-center gap-4 bg-green-600 text-center font-semibold text-white p-3 rounded-xl">
            <FaCheckCircle /> Welcome back!
          </p>
        )} */}
      </form>
    </div>
  );
}
