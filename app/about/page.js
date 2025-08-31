import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import img from "../../public/Me.png"

const About = () => {
  return (
    <>
      <Navbar />

      <section className="w-full flex justify-center items-center pt-12 fade-in-up">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-green-700 roboto text-center">
          About <span className="bg-gradient-to-r from-green-400 to-green-700 bg-clip-text text-transparent">Me</span>
        </h1>
      </section>

      <section className="flex flex-col md:flex-row justify-center items-center py-12 px-6 md:px-12 gap-10 fade-in-up">
        
        <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl max-w-2xl p-8 text-center border border-green-200 hover:shadow-green-300 transition-all duration-300">
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-slate-700 edu">
            This is my first project using <span className="font-semibold text-green-700">Next.js</span>.  
            I hope you like it. All about account security and privacy is that you can feel free to create an account.  
            Your information is <span className="font-semibold text-green-700">safe and secure</span>.  
            Please provide your email correctly so that in case you forget your password, you can reset it easily.  
            I hope you will enjoy my project 🌿
          </p>
        </div>

        <div className="flex flex-col items-center justify-center text-center">
          <div className="relative group">
            <Image
              src={img}
              alt="Abdul Hannan"
              width={220}
              height={220}
              className="rounded-full shadow-2xl shadow-green-600 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full ring-4 ring-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <p className="text-2xl md:text-3xl font-bold roboto text-green-700 mt-6">
            Abdul Hannan
          </p>
          <p className="text-slate-500 text-base md:text-lg mt-2">
            Aspiring & Full Stack Web Developer 🚀
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default About
