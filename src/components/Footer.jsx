import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact" },
];

const ourServices = [
  {
    name: "Chimney Service",
    path: "/services",
  },
  {
    name: "RO Service",
    path: "/services",
  },
  {
    name: "Installation & Maintenance",
    path: "/services",
  },
  {
    name: "Water Purifier Service",
    path: "/services",
  },
];

function FooterHeading({ children }) {
  return (
    <div className="mb-6">
      <h3 className="text-white font-bold text-lg mb-3">
        {children}
      </h3>

      <span className="block w-8 h-0.5 bg-blue-400" />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a122e] pt-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Main Footer */}
        <div className="grid md:grid-cols-[1.2fr_1fr_1fr_1fr] gap-10 pb-12">

          {/* Logo + About */}
          <div className="md:border-r md:border-blue-900 md:pr-8">

            {/* Logo */}
            <Link
              to="/"
              className="flex flex-col items-start mb-4"
            >
              <div className="bg-white px-5 rounded-2xl flex items-center justify-center mb-1">
                <img
                  src={logo}
                  alt="Ayush Home Appliances Logo"
                  className="w-40"
                />
              </div>
            </Link>

            {/* Description */}
            <p className="text-blue-200 text-sm mb-5 max-w-xs">
              Reliable chimney, RO and home appliance services
              at your doorstep in Indore.
            </p>

            {/* Social Media */}
            <div className="flex gap-3 mb-6">

              <a
                href="https://www.instagram.com/ayushhomeappliancesindore/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <img
                  src={instagram}
                  alt="Instagram"
                  className="w-10 h-10 cursor-pointer hover:scale-105 transition-transform"
                />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61593632590542"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <img
                  src={facebook}
                  alt="Facebook"
                  className="w-10 h-10 cursor-pointer hover:scale-105 transition-transform"
                />
              </a>

            </div>

            {/* Tagline */}
            <p className="text-xs font-semibold tracking-widest text-blue-300 mb-2">
              YOUR COMFORT,
              <br />
              OUR PRIORITY
            </p>

            <span className="block w-8 h-0.5 bg-blue-400" />
          </div>

          {/* Quick Links */}
          <div className="md:border-r md:border-blue-900 md:pr-8">

            <FooterHeading>
              Quick Links
            </FooterHeading>

            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-blue-200 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* Our Services */}
          <div className="md:border-r md:border-blue-900 md:pr-8">

            <FooterHeading>
              Our Services
            </FooterHeading>

            <ul className="flex flex-col gap-3">
              {ourServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-blue-200 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* Contact Info */}
          <div>

            <FooterHeading>
              Contact Info
            </FooterHeading>

            <div className="flex flex-col gap-5">

              {/* Phone */}
              <div className="flex items-start gap-3">

                <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>

                <div>
                  <a
                    href="tel:+918982563088"
                    className="text-white text-sm font-semibold hover:text-blue-300 transition-colors"
                  >
                    +91 89825 63088
                  </a>

                  <p className="text-blue-300 text-xs">
                    Call or WhatsApp
                  </p>
                </div>

              </div>

              {/* Email */}
              <div className="flex items-start gap-3">

                <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>

                <div>
                  <a
                    href="mailto:ayushhomeappliances.72@gmail.com"
                    className="text-white text-sm font-semibold break-all hover:text-blue-300 transition-colors"
                  >
                    ayushhomeappliances.72@gmail.com
                  </a>

                  <p className="text-blue-300 text-xs mt-1">
                    We reply within 24 hours
                  </p>
                </div>

              </div>

              {/* Location */}
              <div className="flex items-start gap-3">

                <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>

                <div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Ayush+Home+Appliances+Indore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm font-semibold leading-relaxed hover:text-blue-300 transition-colors"
                  >
                    Shop No. 02, RE2 Road, near RTO Office Road,
                    Nayta Mundla, Indore, Madhya Pradesh 452020
                  </a>

                  <p className="text-blue-300 text-xs mt-1">
                    Doorstep Service Available
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-900 py-6 flex flex-col sm:flex-row items-center justify-center gap-4">

          <p className="text-blue-300 text-sm text-center sm:text-left">
            © 2026 Ayush Home Appliances. All rights reserved.
          </p>

          {/* <div className="flex items-center gap-4 text-sm">

            <Link
              to="/privacy-policy"
              className="text-blue-200 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>

            <span className="w-px h-4 bg-blue-800" />

            <Link
              to="/terms-conditions"
              className="text-blue-200 hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>

          </div> */}

        </div>

      </div>
    </footer>
  );
}