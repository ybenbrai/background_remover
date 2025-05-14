"use client";

import { UploadBox } from "@/components/home/UploadBox";
import Image from "next/image";
import Link from "next/link";

export function HomeStatic() {
  return (
    <>
      <section className="pt-16 pb-8 text-center px-4">
        <Image
          src="/globe.svg"
          alt="ClearCut Logo"
          width={80}
          height={80}
          className="mx-auto"
        />
        <h1 className="text-4xl font-extrabold mt-4 mb-2">ClearCut</h1>
        <p className="text-lg mb-8" style={{ color: "var(--brand-secondary)" }}>
          Remove Image Backgrounds Instantly. 100% Automatic. Free Demo.
        </p>

        {/* UploadBox directly under the description */}
        <UploadBox />

        <p className="text-gray-300 mt-6">No signup required. Try it now!</p>
      </section>

      <section className="bg-[color:var(--card-bg)] rounded-2xl mx-auto mb-12 max-w-5xl p-8 shadow-md text-center">
        <h2 className="text-2xl font-bold">Why ClearCut?</h2>
        <div className="flex flex-wrap justify-center gap-8 mt-6">
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-xl font-semibold">⚡ Fast & Automatic</h3>
            <p className="text-gray-600 mt-2">
              Remove backgrounds in seconds with AI. No manual work needed.
            </p>
          </div>
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-xl font-semibold">🎨 High Quality</h3>
            <p className="text-gray-600 mt-2">
              Get crisp, clean cutouts for any use: e-commerce, design, or fun.
            </p>
          </div>
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-xl font-semibold">🔒 Secure & Private</h3>
            <p className="text-gray-600 mt-2">
              Your images are processed securely and never stored.
            </p>
          </div>
        </div>
      </section>

      <section className="my-16 text-center">
        <h2 className="text-2xl font-bold">Ready to get started?</h2>
        <Link href="/pricing" className="btn inline-block text-lg mt-4">
          View Pricing & Offers
        </Link>
      </section>
    </>
  );
}
