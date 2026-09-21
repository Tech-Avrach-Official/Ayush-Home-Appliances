import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, PhoneCall } from "lucide-react";

export default function NotFound() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-lg w-full text-center">
        {/* Big 404 */}
        <div className="relative inline-block mb-6">
          <h1 className="text-[7rem] md:text-[9rem] font-extrabold text-blue-950 leading-none">
            404
          </h1>
          <div className="absolute -right-6 -top-4 w-20 h-20 rounded-full bg-blue-600/10" />
          <div className="absolute -left-8 bottom-2 w-14 h-14 rounded-full bg-blue-600/10" />
        </div>

        <p className="text-xs font-bold tracking-widest text-blue-600 mb-3">
          PAGE NOT FOUND
        </p>

        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
          Oops! This page took a service break.
        </h2>

        <p className="text-gray-500 text-sm md:text-base mb-8 max-w-sm mx-auto">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 transition-colors text-white font-semibold text-sm px-6 py-3.5 rounded-full w-full sm:w-auto"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>

          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 border border-gray-200 hover:border-blue-900 hover:text-blue-900 transition-colors text-gray-700 font-semibold text-sm px-6 py-3.5 rounded-full w-full sm:w-auto"
          >
            <PhoneCall className="w-4 h-4" />
            Contact Us
          </Link>
        </div>

        <button
          onClick={() => window.history.back()}
          className="flex items-center cursor-pointer justify-center gap-1.5 text-gray-400 hover:text-gray-600 transition-colors text-xs font-medium mx-auto mt-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Go back to previous page
        </button>
      </div>
      
    </section>
  );
}