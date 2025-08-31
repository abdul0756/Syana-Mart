"use client"
import UNavbar from "@/components/UNavbar";
import { signOut, signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import React from "react";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import BMW from "@/components/BMW";
import Lamborghini from "@/components/Lamborghini";
import Ferrari from "@/components/Ferrari";
import Bugatti from "@/components/Bugatti";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Loader from "@/components/Loader";
import Modal from "@/components/Model";
import Buy from "@/components/Buy";

const Page = ({ params }) => {
  const [IsBmw, setIsBmw] = useState(true)
  const [IsLam, setIsLam] = useState(false)
  const [IsFer, setIsFer] = useState(false)
  const [IsBug, setIsBug] = useState(false)
  const [active, setActive] = useState("bmw");
  const [IsProfile, setIsProfile] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [IsBuy, setIsBuy] = useState(false)
  const [IsLoading, setIsLoading] = useState(false)

  const [fullname, setfullname] = useState("")
  const [email, setemail] = useState("")
  const [username, setusername] = useState("")
  const [cnic, setcnic] = useState("")

  const { data: session, status } = useSession();
  const { user } = React.use(params);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const Profile = async () => {
    setIsLoading(true)
    try {
      let res = await fetch(`/api/profile?username=${session.user.name}`, {
        method: "GET",
      });

      let d = await res.json();
      if (res.ok) {
        setfullname(d.fullname);
        setemail(d.email);
        setusername(d.username);
        setcnic(d.cnic);
      } else {
        setModalMessage(d.message);
        setShowModal(true);
      }
    } catch (err) {
      setModalMessage("Something went wrong");
      setShowModal(true);
    } finally {
      setIsLoading(false)
    }
  };

  const Uprofile = async (data) => {
    setIsLoading(true)
    try {
      let res = await fetch(`/api/profile?username=${session.user.name}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      let d = await res.json();
      if (res.ok) {
        setModalMessage(d.message);
        setShowModal(true);
        signOut({ callbackUrl: "/login" });
      } else {
        setModalMessage(d.message);
        setShowModal(true);
      }
    } catch (err) {
      setModalMessage("Something went wrong");
      setShowModal(true);
    } finally {
      setIsLoading(false)
    }
  }

  const Cancel = async () => {
    setIsProfile(false);
  }

  const Delete = async () => {
    const res = await fetch(`/api/profile?username=${session.user.name}`, {
      method: "DELETE",
    });
    res.json().then((data) => {
      if (res.ok) {
        setModalMessage(data.message);
        setShowModal(true);
        signOut({ callbackUrl: "/login" });
      }
    }).catch((err) => {
      setModalMessage("Something went wrong");
      setShowModal(true);
    })
  }

  const handleBuy = async () => {
    setShowModal(true);
    setModalMessage("Purchase successful!");
    setIsBuy(false);
  }


  React.useEffect(() => {
    if (IsProfile) {
      setModalMessage("Click on credentials to change it. To change password logout first then on login page click on forgot password.");
      setShowModal(true);
    }
  }, [IsProfile]);




  if (!session) {

    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-950 transition-colors duration-500 p-6">
        <div className="w-full max-w-md bg-white dark:bg-green-950 rounded-2xl shadow-xl border border-green-200 dark:border-green-800 p-10 text-center relative overflow-hidden">

          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-400 to-green-600 dark:from-green-500 dark:to-emerald-400" />

          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900/40">
            <svg
              className="h-8 w-8 text-green-600 dark:text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6-6v6m6-6v6m-6-6h.01M6 18h12M9 6h6"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-3 tracking-tight">
            Authentication Required
          </h2>

          <p className="text-green-700 dark:text-green-400 text-base mb-8 leading-relaxed">
            You must be signed in to access this page. Please continue to login to
            proceed.
          </p>

          <button
            onClick={() => (window.location.href = "/login")}
            className="w-full px-5 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 focus:outline-none focus:ring-4 focus:ring-green-400/50 shadow-lg transition-all duration-200"
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }







  return (
    <>
      {showModal && <Modal message={modalMessage} onClose={() => setShowModal(false)} />}
      {IsLoading && <Loader />}
      {IsBuy && <Buy onClose={() => setIsBuy(false)} Submit={handleBuy} />}
      {!IsProfile && !IsBuy && (
        <>
          <UNavbar
            click={() => signOut({ callbackUrl: "/login" })}
            profile={async () => { await Profile(); setIsProfile(true) }}
            orders={() => setIsOrder(true)}
          />
          <h1 className="text-6xl w-full text-center text-slate-400 font-bold pt-5 max-sm:text-4xl"><span className="text-green-600 font-extrabold">Welcome</span> to Mart</h1>
          <p className="text-2xl  text-center edu text-gray-500 pt-5 max-sm:text-[1.2rem]">Which car are you looking for</p>
          <div className="flex items-center justify-center w-full py-5">
            <nav className="flex justify-center items-center h-14 sm:w-3/4 bg-green-700 rounded-full  edu text-white max-sm:flex-col max-sm:w-4/5 max-sm:h-auto max-sm:rounded-2xl max-sm:space-y-2 max-sm:py-1.5">

              <Link
                href="#bmw"
                onClick={() => {
                  setActive("bmw");
                  setIsBmw(true);
                  setIsLam(false);
                  setIsFer(false);
                  setIsBug(false);
                }}
                className={`px-3 sm:px-4 py-2 rounded-full transition-colors duration-300 ${active === "bmw" ? "bg-green-600" : ""
                  }`}
              >
                BMW
              </Link>

              <Link
                href="#lamborghini"
                onClick={() => {
                  setActive("lamborghini");
                  setIsBmw(false);
                  setIsLam(true);
                  setIsFer(false);
                  setIsBug(false);
                }}
                className={`px-3 sm:px-4 py-2 rounded-full transition-colors duration-300 ${active === "lamborghini" ? "bg-green-600" : ""
                  }`}
              >
                LAMBORGHINI
              </Link>

              <Link
                href="#ferrari"
                onClick={() => {
                  setActive("ferrari");
                  setIsBmw(false);
                  setIsLam(false);
                  setIsFer(true);
                  setIsBug(false);
                }}
                className={`px-3 sm:px-4 py-2 rounded-full transition-colors duration-300 ${active === "ferrari" ? "bg-green-600" : ""
                  }`}
              >
                FERRARI
              </Link>

              <Link
                href="#bugatti"
                onClick={() => {
                  setActive("bugatti");
                  setIsBmw(false);
                  setIsLam(false);
                  setIsFer(false);
                  setIsBug(true);
                }}
                className={`px-3 sm:px-4 py-2 rounded-full transition-colors duration-300 ${active === "bugatti" ? "bg-green-600" : ""
                  }`}
              >
                BUGATTI
              </Link>
            </nav>
          </div>


          {IsBmw && <BMW buy={() => setIsBuy(true)} />}
          {IsLam && <Lamborghini buy={() => setIsBuy(true)} />}
          {IsFer && <Ferrari buy={() => setIsBuy(true)} />}
          {IsBug && <Bugatti buy={() => setIsBuy(true)} />}

          <Footer />
        </>
      )}






      {IsProfile && (<>
        <div className="bg-gradient-to-b from-green-600 to-green-300 min-h-screen flex items-center justify-center px-4">
          <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-green-200 p-6 sm:p-8">

            <h1 className="text-3xl sm:text-4xl text-center font-bold text-green-700 mb-6">
              Profile
            </h1>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit(Uprofile)}>

              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  defaultValue={fullname}
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
                  defaultValue={email}
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
                  defaultValue={username}
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
                  defaultValue={cnic}
                  className="w-full text-green-700 h-12 pl-4 text-base sm:text-lg bg-green-50 rounded-2xl border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                  {...register("cnic", { required: "CNIC is required" })}
                  spellCheck="false"
                />
                {errors.cnic && <p className="text-red-500 w-full text-center text-sm mt-1">{errors.cnic.message}</p>}
              </div>

              <div className="flex gap-3">

                <button
                  type="button"
                  onClick={Cancel}
                  className="hover:cursor-pointer mt-2 w-1/2 py-3 rounded-2xl font-semibold text-white bg-gradient-to-r from-red-600 to-pink-500 hover:from-red-700 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-red-400/50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="hover:cursor-pointer mt-2 w-1/2 py-3 rounded-2xl font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-400/50"
                >
                  Update
                </button>
              </div>
            </form>
            <button
              type="button"
              onClick={Delete}
              className="hover:cursor-pointer mt-2 w-full py-3 rounded-2xl font-semibold text-white bg-gradient-to-r from-red-700 to-red-400 hover:from-red-600 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-red-400/50"
            >
              Delete Account
            </button>
          </div>
        </div>





      </>)}
    </>
  )
}

export default Page