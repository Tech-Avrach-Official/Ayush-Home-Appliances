import React, { useState } from "react";
import { Phone, Calendar, Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import BookingModal from "./BookingModal";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between min-h-[72px]">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 shrink-0">
            <img
              src={logo}
              alt="Ayush Home Appliances"
              className="w-24"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `relative text-sm lg:text-md font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-blue-950"
                      : "text-gray-600 hover:text-blue-950"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    {/* Active underline */}
                    <span
                      className={`absolute left-0 -bottom-2 h-[2px] bg-blue-600 rounded-full transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center gap-6">

            {/* Phone */}
            <a
              href="tel:+918982563088"
              className="flex items-center gap-2 group"
            >
              <div className="w-9 h-9 rounded-full bg-blue-950 flex items-center justify-center shrink-0 group-hover:bg-blue-800 transition-colors">
                <Phone className="w-4 h-4 text-white" />
              </div>

              <div className="leading-tight">
                <p className="text-sm font-bold text-blue-950">
                  +91 89825 63088
                </p>

                <p className="text-xs text-gray-500">
                  Call Us Anytime
                </p>
              </div>
            </a>

            {/* Book Service */}
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-blue-950 hover:bg-blue-900 transition-colors text-white text-sm font-semibold px-5 py-2.5 rounded-lg"
            >
              <Calendar className="w-4 h-4" />
              Book a Service
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle menu"
            className="md:hidden text-blue-950"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-5 flex flex-col gap-4">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-semibold px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "text-blue-950 bg-blue-50"
                      : "text-gray-600 hover:text-blue-950 hover:bg-gray-50"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Mobile Phone */}
            <a
              href="tel:+918982563088"
              className="flex items-center gap-3 px-3 py-2"
            >
              <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center">
                <Phone className="w-4 h-4 text-blue-950" />
              </div>

              <div>
                <p className="text-sm font-bold text-blue-950">
                  +91 89825 63088
                </p>

                <p className="text-xs text-gray-500">
                  Call Us Anytime
                </p>
              </div>
            </a>

            {/* Mobile Book Button */}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-blue-950 hover:bg-blue-900 transition-colors text-white text-sm font-semibold px-5 py-3 rounded-lg"
            >
              <Calendar className="w-4 h-4" />
              Book a Service
            </Link>
          </div>
        )}

        {/* Booking Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
        />
      </nav>
    </>
  );
}