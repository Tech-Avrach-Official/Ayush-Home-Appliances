import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import BookingModal from "../../../components/BookingModal";

const points = [
  "Reliable Service",
  "Affordable Pricing",
  "Genuine Parts",
  "Dedicated Support",
];

export default function AboutCta() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <section className="w-full px-4 md:px-8 py-8 md:py-12">
        <div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden bg-blue-950">

          {/* Background Image */}
          <img
            src="https://placehold.co/1400x400/1e3a5f/1e3a5f?text=Replace+Background+Image"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-60 -z-10"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-transparent -z-10" />

          <div className="relative grid md:grid-cols-[3fr_1fr] items-center gap-8 px-6 md:px-10 py-10 md:py-14">

            {/* Left Content */}
            <div className="flex flex-col gap-4">

              <p className="text-xs font-bold tracking-[0.2em] text-blue-300">
                LET'S MAKE LIFE EASIER
              </p>

              <h2 className="text-2xl md:text-4xl font-extrabold leading-tight text-white">
                Your Home Appliances.
                <br />
                Our Responsibility.
              </h2>

              <p className="text-blue-100 text-sm md:text-base">
                Book a service today and experience the Ayush difference.
              </p>

              {/* Book Service Button */}
              <button
                type="button"
                onClick={() => setIsBookingOpen(true)}
                className="
                  inline-flex
                  items-center
                  cursor-pointer
                  gap-2
                  bg-white
                  hover:bg-gray-100
                  transition-colors
                  text-blue-950
                  font-semibold
                  text-sm
                  px-6
                  py-3.5
                  rounded-full
                  w-fit
                  mt-2
                "
              >
                Book a Service
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Checklist */}
            <div className="flex flex-col gap-4">
              {points.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-8 h-8 text-blue-950 fill-white shrink-0" />

                  <span className="text-md font-medium text-white">
                    {point}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}