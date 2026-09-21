import React, { useState } from "react";
import { ShieldCheck, Settings, Users, ArrowRight } from "lucide-react";
import BookingModal from "../../../components/BookingModal";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Trusted by",
    subtitle: "Hundreds",
  },
  {
    icon: Settings,
    title: "Skilled &",
    subtitle: "Certified Technicians",
  },
  {
    icon: Users,
    title: "Customer",
    subtitle: "Satisfaction First",
  },
];

export default function AboutSection() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10 px-4 md:px-0 py-12 md:py-16">

          {/* Left Content */}
          <div className="flex flex-col gap-5">

            <p className="text-xs font-bold tracking-[0.2em] text-blue-600">
              ABOUT US
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900">
              More Than Just Repairs
              <br />
              We Care for{" "}
              <span className="text-blue-600">Your Home</span>
            </h2>

            {/* Description */}
            <div className="flex flex-col gap-3 text-gray-500 text-sm md:text-base leading-relaxed max-w-xl">
              <p>
                Since <span className="font-semibold text-gray-700">2016</span>,
                Ayush Home Appliances has been providing reliable and
                professional home appliance services across Indore. What
                started with a commitment to provide honest and dependable
                service has grown into a trusted name for homeowners looking
                for quality appliance care at their doorstep.
              </p>

              <p>
                We specialize in{" "}
                <span className="font-semibold text-gray-700">
                  kitchen chimney installation and repair
                </span>
                , along with{" "}
                <span className="font-semibold text-gray-700">
                  RO installation and repair
                </span>
                . Our technicians focus on proper diagnosis, quality
                workmanship and dependable solutions so your appliances
                continue to perform efficiently.
              </p>

              <p>
                From installing a new chimney or RO system to repairing an
                existing appliance, we aim to make the entire service
                experience simple, transparent and hassle-free. We believe
                good service is not just about fixing an appliance — it's
                about building long-term trust with every customer.
              </p>
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap items-center gap-6 mt-2">
              {trustPoints.map(({ icon: Icon, title, subtitle }) => (
                <div
                  key={title}
                  className="flex items-center gap-2"
                >
                  <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-blue-600" />
                  </div>

                  <p className="text-sm text-gray-700 leading-tight">
                    {title}
                    <br />
                    <span className="text-gray-500">
                      {subtitle}
                    </span>
                  </p>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="flex flex-wrap items-center gap-6 mt-2">
              <button
                type="button"
                onClick={() => setIsBookingOpen(true)}
                className="
                  inline-flex
                  items-center
                  gap-2
                  bg-blue-600
                  hover:bg-blue-700
                  transition-colors
                  text-white
                  text-sm
                  font-semibold
                  px-6
                  py-3.5
                  rounded-full
                "
              >
                Our Services
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center md:justify-end">

            <div className="relative w-full aspect-[5/4] rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1788767239/0f332283-2362-419b-9412-c78519765745_qwkb2e.png"
                alt="Technician servicing a chimney"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Customers Card */}
            <div className="absolute bottom-6 -right-2 md:-right-8 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3">

              <div className="flex -space-x-3">
                <img
                  src="https://placehold.co/40x40/93c5fd/1e293b?text=1"
                  alt="Customer"
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                />

                <img
                  src="https://placehold.co/40x40/60a5fa/1e293b?text=2"
                  alt="Customer"
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                />

                <img
                  src="https://placehold.co/40x40/3b82f6/ffffff?text=3"
                  alt="Customer"
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                />
              </div>

              <div>
                <p className="text-lg font-extrabold text-gray-900 leading-none">
                  500+
                </p>

                <p className="text-xs text-gray-500">
                  Happy Customers
                </p>
              </div>
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