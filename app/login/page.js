"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Modal from "@/components/Model";
import Password from "@/components/Password";
import Loader from "@/components/Loader";

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const Submit = async (data) => {
    setIsLoading(true);
    try {
      // 👇 username ko register ke hisaab se lowercase ya as-is rakho
      const username = data.username.trim().toLowerCase();
      const password = data.password;

      const res = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      if (res?.error) {
        setModalMessage(res.error || "Invalid credentials");
        setShowModal(true);
      } else {
        setModalMessage("Login successful!");
        setShowModal(true);

        setTimeout(() => {
          router.push(`/${username}`);
        }, 1000);
      }
    } catch (error) {
      setModalMessage("Something went wrong");
      setShowModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {showModal && (
        <Modal message={modalMessage} onClose={() => setShowModal(false)} />
      )}

      {isLoading && <Loader />}

      <div className="bg-gradient-to-b from-green-600 to-green-300 min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-green-200 p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl text-center font-bold text-green-700 mb-6">
            Login
          </h1>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit(Submit)}>
            {/* Username */}
            <div>
              <input
                type="text"
                placeholder="Username"
                className="w-full text-green-700 h-12 pl-4 text-base sm:text-lg bg-green-50 rounded-2xl border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                {...register("username", { required: "Username is required" })}
                spellCheck="false"
              />
              {errors.username && (
                <p className="text-red-500 w-full text-center text-sm mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <Password register={register} error={errors.password} />
            </div>

            {/* Forgot password */}
            <p
              onClick={() => router.push("/reset-password")}
              className="text-green-600 text-sm text-center cursor-pointer hover:underline"
            >
              Forgot Password?
            </p>

            {/* Buttons */}
            <div className="flex gap-4 items-center justify-center w-full">
              <Link
                type="button"
                className="mt-2 w-1/2 text-center py-3 rounded-2xl font-semibold text-white bg-gradient-to-r from-emerald-500 to-green-600 hover:from-green-700 hover:to-emerald-600 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-400/50 hover:cursor-pointer"
                href="/"
              >
                Back
              </Link>
              <button
                type="submit"
                className="mt-2 w-1/2 py-3 rounded-2xl font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-400/50 hover:cursor-pointer"
              >
                Login
              </button>
            </div>
          </form>

          <p className="text-gray-500 text-sm text-center mt-6">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-green-600 font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
