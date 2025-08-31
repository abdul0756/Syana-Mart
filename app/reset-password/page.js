"use client"
import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "@/components/Model";
import Password from "@/components/Password";
import Loader from "@/components/Loader";
import Link from "next/link";

const Reset = () => {
  const [isOtp, setIsOtp] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [email, setemail] = useState("");
  const [IsLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const Submit1 = async (data) => {
    const email = data.email;
    setemail(email);
    setIsLoading(true)
    try {
      let res = await fetch("/api/reset-pass", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      let dat = await res.json();
      if (res.ok) {
        setIsOtp(true);
        setModalMessage(dat.message);
        setShowModal(true);
      } else {
        setModalMessage(dat.message);
        setShowModal(true);

      }
    } catch (error) {
      setModalMessage("Something went wrong");
      setShowModal(true);
    } finally {
      setIsLoading(false)
    }
  };

  const Submit2 = async (data) => {
    setIsLoading(true)
    try {

      let res = await fetch("/api/reset-pass", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      let d = await res.json();
      if (res.ok) {
        setIsNew(true);
        setIsOtp(false);
        setModalMessage(d.message);
        setShowModal(true);
      } else {
        setModalMessage(d.message);
        setShowModal(true);
      }
    } catch (error) {
      setModalMessage("Something went wrong");
      setShowModal(true);
    } finally {
      setIsLoading(false)
    }
  };

  const Submit3 = async (data) => {
    setIsLoading(true)
    try {

      let res = await fetch("/api/new-pass", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: data.password
        })
      })
      let d = await res.json();
      if (res.ok) {
        setModalMessage(d.message);
        setShowModal(true);
        setTimeout(() => {
          window.location.href = "/login";
        }, 1000);
      }
      else {
        setModalMessage(d.message);
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
      {showModal && (
        <Modal message={modalMessage} onClose={() => setShowModal(false)} />
      )}
      {IsLoading && <Loader />}
      <div className="bg-gradient-to-b from-green-600 to-green-300 min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-green-200 p-6 sm:p-8">

          <h1 className="text-3xl sm:text-4xl text-center font-bold text-green-700 mb-6">
            {!isOtp && !isNew && "Reset Password"}
            {isOtp && "Verify OTP"}
            {isNew && "New Password"}
          </h1>

          {!isOtp && !isNew && (
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(Submit1)}>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full text-green-700 h-12 pl-4 text-base sm:text-lg bg-green-50 rounded-2xl border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                  {...register("email", { required: "Email is required" })}
                  spellCheck="false"
                />
                {errors.email && (
                  <p className="text-red-500 w-full text-center text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              
              <div className="flex w-full items-center justify-center gap-4">

              <Link
                href="/login"
                type="button"
                className="mt-2  text-center w-1/2 py-3 rounded-2xl font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-400/50 hover:cursor-pointer"
                >
                Back
              </Link>
              <button
                type="submit"
                className="mt-2 w-1/2 py-3 rounded-2xl font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-400/50 hover:cursor-pointer"
                disabled={isSubmitting}
                >
                Send OTP
              </button>
                </div>
            </form>
          )}

          {isOtp && (
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(Submit2)}>
              <div>
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={4}
                  placeholder="Enter OTP"
                  onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ""))}
                  className="w-full text-green-700 tracking-[1em] text-center h-12 text-2xl bg-green-50 rounded-2xl border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                  {...register("otp", { required: "OTP is required" })}
                />
                {errors.otp && (
                  <p className="text-red-500 w-full text-center text-sm mt-1">{errors.otp.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="mt-2 w-full py-3 rounded-2xl font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-400/50 hover:cursor-pointer"
              >
                Verify OTP
              </button>
            </form>
          )}

          {isNew && (
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(Submit3)}>
              <div>
                <Password register={register} error={errors.newPassword} />
              </div>

              <button
                type="submit"
                className="mt-2 w-full py-3 rounded-2xl font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-400/50 hover:cursor-pointer"
              >
                Change Password
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Reset;
