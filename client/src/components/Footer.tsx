"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer mt-8 text-center rounded-t-2xl">
      <div className="font-bold text-lg mb-4 text-black">
        ClearCut &copy; {new Date().getFullYear()}
      </div>
      <div className="flex flex-wrap justify-center gap-6 font-medium">
        <FooterLink href="/pricing">Pricing</FooterLink>
        <FooterLink href="/offers">Offers</FooterLink>
        <FooterLink href="/how-it-works">How it Works</FooterLink>
        <FooterLink href="/api">API</FooterLink>
        <FooterLink href="/about">About</FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
      </div>
      <div className="mt-4 text-sm text-black">
        Made with ❤️ for creators & businesses
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-black hover:text-gray-300 transition-colors duration-200"
    >
      {children}
    </Link>
  );
}
