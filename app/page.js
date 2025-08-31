"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import cart from "../public/cart.svg";
import Link from "next/link";
import ThreeDCard from "@/components/ThreeDCard";
import bmw from "../public/Bmw.jpg";
import lam from "../public/Lam.png";
import ferrari from "../public/Ferrari.png";
import Bugatti from "../public/Bugatti.png";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="relative flex flex-col items-center justify-center text-center bg-gradient-to-br from-green-700 via-green-600 to-green-400 w-full h-[90vh] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),_transparent_70%)] animate-pulse"></div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl sm:text-8xl font-extrabold text-white z-10 drop-shadow-lg"
        >
          Buy
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-green-900 mt-6 z-10 drop-shadow-lg"
        >
          Your Dream Car
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl text-slate-100 mt-6 max-w-2xl edu z-10"
        >
          Experience unmatched performance, luxury, and speed —
          your dream car is just one click away.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="z-10"
        >
          <Link
            href={"/login"}
            className="mt-10 inline-flex items-center gap-3 px-10 py-4 
             bg-gradient-to-r from-green-400 via-green-500 to-green-700
             text-white font-semibold text-xl rounded-2xl shadow-xl 
             hover:from-green-500 hover:via-green-600 hover:to-green-800
             hover:scale-105 transition-all duration-300"
          >
            Shop Now
            <Image src={cart} alt="cart" width={28} height={28} />
          </Link>

        </motion.div>

        <div className="absolute bottom-0 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-32 fill-white"
          >
            <path d="M0,192L48,176C96,160,192,128,288,122.7C384,117,480,139,576,165.3C672,192,768,224,864,224C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,0L0,0Z"></path>
          </svg>
        </div>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 mb-28 w-full max-w-6xl mx-auto px-6">
        {[
          { number: "40+", label: "Sports Cars" },
          { number: "24/7", label: "Customer Support" },
          { number: "99.9%", label: "Satisfaction Rate" },
          { number: "10+", label: "Daily Customers" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-md hover:shadow-green-400 transition duration-500"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-green-700">
              {stat.number}
            </h3>
            <p className="text-lg md:text-xl text-green-600 mt-2">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </section>

      <section className="flex flex-col items-center w-full py-24 px-6 bg-gradient-to-br from-green-50 via-white to-green-100">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-6xl font-bold text-green-700 text-center"
        >
          Our Featured Cars
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl md:text-2xl text-gray-600 text-center mt-6 max-w-2xl edu"
        >
          Explore our collection of top-class sports cars, designed for speed
          and luxury.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
          className="flex flex-row items-start justify-center w-full gap-x-1.5 flex-wrap -space-y-30 -mb-25"
        >
          {[
            {
              title: "BMW",
              desc: "Famous for drift.",
              img: bmw,
            },
            {
              title: "LAMBORGHINI",
              desc: "Streamlined power, style, and speed.",
              img: lam,
            },
            {
              title: "FERRARI",
              desc: "The symbol of luxury and performance.",
              img: ferrari,
            },
            {
              title: "BUGATTI",
              desc: "World’s fastest hypercar masterpiece.",
              img: Bugatti,
            },
          ].map((car, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <ThreeDCard
                height="h-auto"
                width="w-80"
                bgColor="bg-green-700"
                heading={car.title}
                description={car.desc}
                imgSrc={car.img}
              />
            </motion.div>
          ))}
        </motion.div>


      </section>

      <Footer />
    </>
  );
}
