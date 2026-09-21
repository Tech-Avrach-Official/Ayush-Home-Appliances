import React from "react";
import { ChevronRight } from "lucide-react";

export default function ServiceTop() {
  return (
    <section className="w-full relative overflow-hidden">
      {/* Background image - dummy, replace with your own */}
      <img
        src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1788781840/e4c33c3c-b522-4d5d-9c9d-28bc65fcc05d_i1dtsm.png"
        alt="Kitchen with chimney installed"
        className="absolute inset-0 w-full h-full object-cover -z-20"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/60 to-blue-950/10 -z-10" />

      <div className="max-w-7xl mx-auto relative px-4 md:px-8 py-16 md:py-20">
        {/* Badge */}
        <p className="text-xs font-bold tracking-[0.2em] text-white mb-4">
          OUR SERVICES
        </p>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
          <span className="text-white block">Expert Service</span>
          <span className="block">
            <span className="text-white">For </span>
            <span className="text-blue-400">Every Home</span>
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-200 text-sm md:text-base mb-6 max-w-md">
          Reliable repair, installation and maintenance services for all your
          home appliances.
        </p>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-200">
          <a href="#home" className="hover:text-white transition-colors">
            Home
          </a>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-white font-medium">Services</span>
        </div>

       
      </div>
    </section>
  );
}