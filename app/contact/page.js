"use client";

import Link from "next/link";
import { FaInstagram, FaGithub } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://www.instagram.com/abdul_56_08/",
    label: "Instagram",
    icon: <FaInstagram />,
    hover: "hover:text-pink-500 hover:scale-110", // Instagram pink
  },
  {
    href: "https://github.com/abdul0756",
    label: "GitHub",
    icon: <FaGithub />,
    hover: "hover:text-gray-400 hover:scale-110", // GitHub gray
  },
];

export default function SocialPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen w-full bg-gradient-to-br from-green-100 via-green-200 to-green-300 dark:from-green-900 dark:via-green-800 dark:to-green-700">
      
      {/* Home Button */}
      <div className="absolute top-6 left-6">
        <Link
          href="/"
          className="px-5 py-2 rounded-full bg-green-600 text-white font-semibold shadow-lg hover:bg-green-700 transition-all duration-300"
        >
          Home
        </Link>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-green-800 dark:text-green-200 text-center">
        Connect With Me 🌿
      </h1>

      <div className="flex gap-8 md:gap-12 text-4xl sm:text-5xl md:text-6xl">
        {socialLinks.map(({ href, label, icon, hover }, idx) => (
          <Link
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`transition-all duration-300 ease-in-out transform text-green-700 dark:text-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 rounded-full p-3 ${hover}`}
          >
            {icon}
          </Link>
        ))}
      </div>
    </main>
  );
}
