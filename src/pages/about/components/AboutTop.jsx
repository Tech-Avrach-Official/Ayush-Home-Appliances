import React from "react";
import { ChevronRight } from "lucide-react";

export default function AboutTop() {
  return (
    <section className="w-full relative overflow-hidden">
      {/* Background image - dummy, replace with your own */}
      <img
        src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1788766756/ChatGPT_Image_Sep_7_2026_01_09_02_PM_nslzjk.png"
        alt="Technician servicing a chimney"
        className="absolute inset-0 w-full h-full object-cover -z-20"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/60 to-blue-950/10 -z-10" />

      <div className="max-w-7xl mx-auto relative px-4 md:px-8 py-16 md:py-20">
        {/* Badge */}
        <p className="text-xs font-bold tracking-[0.2em] text-white mb-4">
          ABOUT US
        </p>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
          <span className="text-white block">About Ayush</span>
          <span className="text-blue-400 block">Home Appliances</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-200 text-sm md:text-base mb-6 max-w-md">
          Reliable appliance care, for a better and more comfortable tomorrow.
        </p>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-200">
          <p className="hover:text-white transition-colors">
            Home
          </p>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-white font-medium">About Us</span>
        </div>

        {/* Handwritten note */}
        <p
          className="hidden lg:block absolute bottom-10 right-10 text-blue-300 text-xl italic leading-tight rotate-[-3deg]"
          style={{ fontFamily: "cursive" }}
        >
          Homes
          <br />
          Run Better
          <br />
          With Care
        </p>
      </div>
    </section>
  );
}