import Link from "next/link";

import Image from "next/image";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-9 w-9 overflow-hidden rounded-xl">
            <Image
              src="/logo.png"
              alt="AppHub logo"
              fill
              className="object-contain"
              sizes="36px"
            />
          </div>

          <span className="text-xl font-extrabold tracking-tight text-slate-900">
            App<span className="text-blue-600">Hub</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-semibold text-slate-600 hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/apps"
            className="text-sm font-semibold text-slate-600 hover:text-blue-600"
          >
            Apps
          </Link>

          <Link
            href="/installation"
            className="text-sm font-semibold text-slate-600 hover:text-blue-600"
          >
            Installation
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/login"
            className="hidden px-3 py-2 text-sm font-semibold text-slate-600 hover:text-blue-600 sm:block"
          >
            Login
          </Link>

          <Link
            href="/apps"
            className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-700 sm:px-5"
          >
            Explore Apps
          </Link>

          {/* Client Component */}
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
