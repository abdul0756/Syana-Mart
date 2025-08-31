"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Buy = ({ onClose, Submit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();



    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl w-full max-w-lg p-8 relative"
            >
                <h2 className="text-3xl sm:text-4xl font-extrabold text-green-700 text-center mb-8">
                    💳 Payment Details
                </h2>

                <form onSubmit={handleSubmit(Submit)} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Bank Name
                        </label>
                        <div className="relative w-full">
                            <select
                                {...register("bankName", { required: "Please select a bank" })}
                                className="w-full appearance-none px-4 py-3 bg-white text-gray-700 border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 cursor-pointer"
                            >
                                <option className="text-gray-400" value="">
                                    -- Select Bank --
                                </option>
                                <option className="text-green-700 font-medium hover:bg-green-100" value="HBL">
                                    HBL - Habib Bank
                                </option>
                                <option className="text-green-700 font-medium hover:bg-green-100" value="UBL">
                                    UBL - United Bank
                                </option>
                                <option className="text-green-700 font-medium hover:bg-green-100" value="Meezan">
                                    Meezan Bank
                                </option>
                                <option className="text-green-700 font-medium hover:bg-green-100" value="Allied">
                                    Allied Bank
                                </option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                <svg
                                    className="h-5 w-5 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.065l3.71-3.835a.75.75 0 111.08 1.04l-4.25 4.395a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>

                        {errors.bankName && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.bankName.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Bank Account No.
                        </label>
                        <input
                            type="text"
                            {...register("accountNo", {
                                required: "Account number is required",
                                pattern: {
                                    value: /^[0-9]{10,16}$/,
                                    message: "Enter a valid account number",
                                },
                            })}
                            className="w-full p-3 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:outline-none"
                            placeholder="Enter account number"
                        />
                        {errors.accountNo && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.accountNo.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Home Address
                        </label>
                        <textarea
                            {...register("address", { required: "Address is required" })}
                            className="w-full p-3 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none focus:outline-none"
                            placeholder="Enter your home address"
                            rows={3}
                            spellCheck="false"
                        />
                        {errors.address && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.address.message}
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="w-full sm:w-1/2 px-6 py-3 rounded-xl bg-slate-300 text-gray-700 font-semibold hover:bg-gray-300 transition-all hover:scale-105 shadow-lg cursor-pointer"
                        >
                            Close
                        </button>
                        <button
                            type="submit"
                            className="w-full sm:w-1/2 px-6 py-3 cursor-pointer rounded-xl bg-green-600 text-white font-bold hover:bg-green-700 hover:scale-105 transition-all shadow-lg"
                        >
                            Pay
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default Buy;
