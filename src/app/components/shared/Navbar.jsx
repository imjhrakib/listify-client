"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#1B3C53] border-b border-[#234C6A]">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-[#D2C1B6]"
        >
          Listify
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="text-[#D2C1B6] hover:text-white transition">
            Home
          </Link>

          <Link
            href="/items"
            className="text-[#D2C1B6] hover:text-white transition"
          >
            Items
          </Link>

          <Link
            href="/login"
            className="px-4 py-2 rounded-sm font-semibold bg-yellow-400 text-[#1B3C53] hover:bg-yellow-300 transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#D2C1B6]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#234C6A] border-t border-[#1B3C53] px-6 py-4 space-y-3 text-sm font-medium">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block text-[#D2C1B6] hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/items"
            onClick={() => setOpen(false)}
            className="block text-[#D2C1B6] hover:text-white"
          >
            Items
          </Link>

          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="block text-white font-semibold"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
