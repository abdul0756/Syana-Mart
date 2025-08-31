// components/Modal.js
'use client';
import React from 'react';

const Modal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative p-6 w-full max-w-sm md:max-w-md lg:max-w-lg bg-green-50 rounded-2xl shadow-2xl transform transition-all scale-100">

        <div className="flex justify-center -mt-10">
          <div className="bg-green-500 text-white text-4xl w-16 h-16 flex items-center justify-center rounded-full shadow-lg">
            💡
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed break-words">
            {message}
          </p>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={onClose}
            className="px-6 py-2.5 hover:cursor-pointer bg-green-600 text-white font-semibold text-base rounded-full shadow-md hover:bg-green-700 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Close
          </button>
        </div>
      </div>
    </div>

  );
};

export default Modal;
