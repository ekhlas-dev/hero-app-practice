
"use client";

import { useState } from "react";
import Link from "next/link";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">

      {/* Menu Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-xl text-slate-700"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 top-full w-full border-t border-slate-100 bg-white shadow-lg">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">

            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              href="/apps"
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600"
            >
              Apps
            </Link>

            <Link
              href="/installation"
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600"
            >
              Installation
            </Link>

            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-xl border border-slate-200 px-4 py-3 text-center font-semibold text-slate-700"
            >
              Login
            </Link>

          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
