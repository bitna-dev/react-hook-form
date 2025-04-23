"use client";
import { useFormStatus } from "react-dom";

interface ButtonProps {
  value: string;
}

const Button = ({ value }: ButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="primary-btn disabled:bg-neutral-400 disabled:text-gray-300 disabled:cursor-not-allowed "
    >
      {pending ? "Loading..." : value}
    </button>
  );
};

export default Button;
