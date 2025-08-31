"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-green-800 text-green-50 shadow-green-600 shadow-2xl sticky top-0 z-50 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link
                        href="/"
                        className="flex-shrink-0 text-2xl sm:text-3xl font-extrabold tracking-wide hover:text-green-300 transition-colors duration-300"
                    >
                        Syana Mart
                    </Link>

                    <div className="hidden md:flex flex-1 justify-center space-x-10 text-lg font-medium">
                        <Link
                            href="/"
                            className="py-2 hover:text-green-300 transition-colors duration-300"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="py-2 hover:text-green-300 transition-colors duration-300"
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="py-2 hover:text-green-300 transition-colors duration-300"
                        >
                            Contact
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link href="/login" passHref
                            className="inline-flex items-center 
                                px-4 py-1.5 text-sm     
                                sm:px-5 sm:py-2 sm:text-base 
                                md:px-6 md:py-2 md:text-base 
                                font-semibold rounded-full shadow-md 
                             text-green-100 bg-green-600 
                            hover:bg-green-500 hover:text-white 
                                transition-all duration-300 
                                transform hover:scale-105 
                                focus:outline-none "
                        >
                            Login

                        </Link>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-green-100 hover:text-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300 rounded-md"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                <XMarkIcon className="block h-6 w-6" />
                            ) : (
                                <Bars3Icon className="block h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                id="mobile-menu"
            >
                <div className="bg-green-700 px-2 pt-2 pb-3 space-y-1">
                    <Link
                        href="/"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-3 py-2 text-base font-medium text-white hover:bg-green-600 rounded-md transition-colors duration-200"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-3 py-2 text-base font-medium text-white hover:bg-green-600 rounded-md transition-colors duration-200"
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-3 py-2 text-base font-medium text-white hover:bg-green-600 rounded-md transition-colors duration-200"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
