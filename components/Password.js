"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Password({ register, error }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        className="w-full text-green-700 h-12 pl-4 pr-10 text-base sm:text-lg bg-green-50 rounded-2xl border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
        {...register("password", { required: "Password is required" })}
        spellCheck="false"
      />

      <span
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-xl cursor-pointer select-none"
      >
        {showPassword ? "🙈" : "👁️"}
      </span>

      {error && (
        <p className="text-red-500 w-full text-center text-sm mt-1">{error.message}</p>
      )}
    </div>
  );
}
