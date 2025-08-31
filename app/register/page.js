"use client"
import { useForm } from "react-hook-form"
import Link from "next/link";
import Modal from "@/components/Model";
import { useState } from "react";
import Password from "@/components/Password";
import Loader from "@/components/Loader";

const RegisterPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [IsLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const Submit = async (formData) => {
    setIsLoading(true)
    try {

      let res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let data = await res.json();

      if (res.ok) {
        setModalMessage(data.message);
        setShowModal(true);
        window.location.href = "/login";
      } else {
        setModalMessage(data.message);
        setShowModal(true);
      }
    } catch (error) {
      setModalMessage("Something went wrong");
      setShowModal(true);
    } finally {
      setIsLoading(false)
    }
  };


  return (
    <>
      {showModal && <Modal message={modalMessage} onClose={() => setShowModal(false)} />}
      {IsLoading && <Loader />}
      <div className=" bg-gradient-to-b from-green-600 to-green-300 min-h-screen flex items-center justify-center px-4">
        <div className="mt-5 mb-5  w-full max-w-md bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-green-200 p-6 sm:p-8">

          <h1 className="text-3xl sm:text-4xl text-center font-bold text-green-700 mb-6">
            Register
          </h1>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit(Submit)}>

            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full text-green-700 h-12 pl-4 text-base sm:text-lg bg-green-50 rounded-2xl border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                {...register("fullname", { required: "Full Name is required" })}
                spellCheck="false"
              />
              {errors.fullname && <p className="text-red-500 w-full text-center text-sm mt-1">{errors.fullname.message}</p>}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full text-green-700 h-12 pl-4 text-base sm:text-lg bg-green-50 rounded-2xl border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                {...register("email", { required: "Email is required" })}
                spellCheck="false"
              />
              {errors.email && <p className="text-red-500 w-full text-center text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <input
                type="text"
                placeholder="Username"
                className="w-full text-green-700 h-12 pl-4 text-base sm:text-lg bg-green-50 rounded-2xl border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                {...register("username", { required: "Username is required" })}
                spellCheck="false"
              />
              {errors.username && <p className="text-red-500 w-full text-center text-sm mt-1">{errors.username.message}</p>}
            </div>

            <div>
              <input
                type="text"
                placeholder="CNIC"
                className="w-full text-green-700 h-12 pl-4 text-base sm:text-lg bg-green-50 rounded-2xl border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                {...register("cnic", { required: "CNIC is required" })}
                spellCheck="false"
              />
              {errors.cnic && <p className="text-red-500 w-full text-center text-sm mt-1">{errors.cnic.message}</p>}
            </div>

            <div>
              <Password register={register} error={errors.password} />
            </div>

            <button
              type="submit"
              className="hover:cursor-pointer mt-2 w-full py-3 rounded-2xl font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-400/50"
            >
              Register
            </button>
          </form>

          <p className="text-gray-500 text-sm text-center mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-green-600 font-medium hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>

    </>
  )
}

export default RegisterPage;
