"use client";
import { FaInstagram, FaGithub } from "react-icons/fa";
import Link from "next/link";
import Modal from "./Model";
import { useState } from "react";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  return (
    <>
      {showModal && (
        <Modal
          message={modalMessage}
          onClose={() => setShowModal(false)}
        />
      )}

      <footer className="bg-green-800 text-green-100 shadow-inner">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h1 className="text-3xl font-extrabold tracking-wide hover:text-green-300 transition-colors duration-300">
              Syana Mart
            </h1>
            <p className="mt-3 text-sm text-green-200">
              Syana Mart is a trusted platform for buying dream cars.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <h2 className="mb-3 text-lg font-semibold text-green-300">
                Company
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-green-400 transition-colors duration-200"
                  >
                    About
                  </Link>
                </li>
                <li
                  className="cursor-pointer hover:text-green-400 transition-colors duration-200"
                  onClick={() => {
                    setShowModal(true);
                    setModalMessage("We have not added blog yet.");
                  }}
                >
                  Blog
                </li>
                <li
                  className="cursor-pointer hover:text-green-400 transition-colors duration-200"
                  onClick={() => {
                    setShowModal(true);
                    setModalMessage(
                      "We provide best services for you to buy cars."
                    );
                  }}
                >
                  Services
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-semibold text-green-300">
                Support
              </h2>
              <ul className="space-y-2">
                <li
                  className="cursor-pointer hover:text-green-400 transition-colors duration-200"
                  onClick={() => {
                    setShowModal(true);
                    setModalMessage(
                      `For any query please contact us at instagram "abdul_56_07"`
                    );
                  }}
                >
                  Help Center
                </li>
                <li
                  className="cursor-pointer hover:text-green-400 transition-colors duration-200"
                  onClick={() => {
                    setShowModal(true);
                    setModalMessage(
                      "Provide your email correctly to get updates."
                    );
                  }}
                >
                  Terms
                </li>
                <li
                  className="cursor-pointer hover:text-green-400 transition-colors duration-200"
                  onClick={() => {
                    setShowModal(true);
                    setModalMessage(
                      "Feel free to create account. We will keep your privacy safe."
                    );
                  }}
                >
                  Privacy
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-semibold text-green-300">
              Follow Us
            </h2>
            <div className="flex space-x-5 ml-1.5 text-2xl">
              <Link
                href="https://www.instagram.com/abdul_56_07/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors duration-200"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://github.com/abdul0756"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 bg-green-900 text-center py-4 text-sm text-green-300">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">Syana Mart</span> | All rights reserved.
        </div>
      </footer>
    </>
  );
}
