import React from "react";
import { ChevronRight, ShieldCheck, Users, Settings } from "lucide-react";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Quick Support",
    subtitle: "Fast response",
  },
  {
    icon: Users,
    title: "Expert Assistance",
    subtitle: "Professional team",
  },
  {
    icon: Settings,
    title: "Reliable Service",
    subtitle: "Quality appliance care",
  },
];

export default function ContactTop() {
  return (
    <section className="w-full relative overflow-hidden">

      {/* Background Image */}
      <img
        src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1788784022/10847447-9176-467f-bfbc-c299aa67b0bd_cdvnyy.png"
        alt="Ayush Home Appliances"
        className="absolute inset-0 w-full h-full object-cover -z-20"
      />

      {/* Keep your existing blue gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/60 to-blue-950/10 -z-10" />

      <div className="max-w-7xl mx-auto relative px-4 md:px-8 py-12 md:py-16">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-6">
          <a
            href="#home"
            className="
              text-blue-100
              hover:text-white
              transition-colors
            "
          >
            Home
          </a>

          <ChevronRight className="w-4 h-4 text-blue-300" />

          <span className="text-white font-semibold">
            Contact Us
          </span>
        </div>

        {/* Section Label */}
        <p
          className="
            text-[11px]
            md:text-xs
            font-bold
            tracking-[0.2em]
            text-blue-300
            mb-2
          "
        >
          GET IN TOUCH
        </p>

        {/* Main Heading */}
        <h1
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-extrabold
            leading-tight
            text-white
            mb-4
          "
        >
          Contact{" "}
          <span className="text-blue-300">
            Ayush
          </span>
        </h1>

        {/* Description */}
        <p
          className="
            text-blue-100
            text-sm
            md:text-base
            leading-relaxed
            max-w-xl
            mb-8
          "
        >
          Have a question or need a home appliance service?
          Get in touch with our team and we'll be happy to
          help you with the right solution.
        </p>

        {/* Trust Points */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
          {trustPoints.map(({ icon: Icon, title, subtitle }) => (
            <div
              key={title}
              className="flex items-center gap-3"
            >

              {/* Icon */}
              <div
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-blue-300/15
                  border
                  border-blue-300/30
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                <Icon
                  className="
                    w-5
                    h-5
                    text-blue-300
                    stroke-[2]
                  "
                />
              </div>

              {/* Text */}
              <div className="leading-tight">
                <span
                  className="
                    block
                    text-sm
                    font-bold
                    text-white
                  "
                >
                  {title}
                </span>

                <span
                  className="
                    text-xs
                    md:text-sm
                    text-blue-100
                  "
                >
                  {subtitle}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Handwritten Note */}
        <p
          className="
            hidden
            lg:block
            absolute
            top-10
            right-10
            text-blue-200
            text-xl
            italic
            leading-tight
            rotate-[-4deg]
          "
          style={{ fontFamily: "cursive" }}
        >
          Reliable
          <br />
          Service
          <br />
          Happy Homes
        </p>

      </div>
    </section>
  );
}