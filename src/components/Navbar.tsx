"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white relative mt-1 py-2 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="https://res.cloudinary.com/diatamf9x/image/upload/v1758885559/Group_33681_imccts.png" 
                width={80}
                height={100}
                alt="Villa Sathkara" 
                className="w-[90%] max-w-[50px] md:max-w-[150px] h-auto" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
              About
            </Link>
            <Link href="/amenities" className="text-gray-700 hover:text-gray-900">
              Amenities
            </Link>
             <Link href="/gallery" className="text-gray-700 hover:text-gray-900">
              Gallery
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact Us
            </Link>
          </div>
          {/* Book Now Button */}
            <div className="hidden md:flex">
              <Link
                href="/contact"
                className="bg-[var(--button-background)] text-white px-4 py-2 rounded-[20px] hover:bg-blue-800 ; "
              >
                Book Now
              </Link>
            </div>

          {/* Mobile Menu Button */}
          <div className=" md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 right-0 w-full bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/amenities"
              className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
             Amenities
            </Link>
            <Link
                href="/gallery"
                className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
