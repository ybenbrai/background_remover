"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar sticky top-0 z-50 w-full shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-wide text-white"
        >
          ClearCut
        </Link>

        <div className="hidden md:flex gap-6 font-medium">
          <NavItem href="/pricing">Pricing</NavItem>
          <NavItem href="/offers">Offers</NavItem>
          <NavItem href="/how-it-works">How it Works</NavItem>
          <NavItem href="/api">API</NavItem>
          <NavItem href="/about">About</NavItem>
          <NavItem href="/contact">Contact</NavItem>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-brand-text"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[color:var(--navbar-bg)]/90 text-brand-text backdrop-blur-sm">
          <div className="flex flex-col items-center py-4 gap-4 font-medium">
            <NavItem href="/pricing">Pricing</NavItem>
            <NavItem href="/offers">Offers</NavItem>
            <NavItem href="/how-it-works">How it Works</NavItem>
            <NavItem href="/api">API</NavItem>
            <NavItem href="/about">About</NavItem>
            <NavItem href="/contact">Contact</NavItem>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-black hover:text-gray-300  duration-200"
    >
      {children}
    </Link>
  );
}
