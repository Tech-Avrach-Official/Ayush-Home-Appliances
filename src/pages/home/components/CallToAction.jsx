import React, { useState } from "react";
import {
  Phone,
  Calendar,
  ArrowRight,
  Truck,
  Zap,
  ShieldCheck,
  Headset,
} from "lucide-react";
import BookingModal from "../../../components/BookingModal";

const features = [
  { icon: Truck, title: "Doorstep", subtitle: "Service" },
  { icon: Zap, title: "Quick", subtitle: "Response" },
  { icon: ShieldCheck, title: "Trusted", subtitle: "Experts" },
  { icon: Headset, title: "24/7", subtitle: "Support" },
];

export default function CallToAction() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <section className="max-w-7xl bg-blue-100 mx-auto rounded-4xl relative overflow-hidden py-20 px-4 md:px-8">
      {/* Background image */}
      {/* <img
        src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1788606178/86f88c74-89a7-44db-855a-f2f33ff8ce7c_ivqfru.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-10"
      /> */}

      <div className="max-w-7xl mx-auto relative flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-4 shadow-sm">
          <Phone className="w-4 h-4 text-blue-950" />
          <span className="text-xs font-bold tracking-widest text-blue-950">
            READY TO BOOK?
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-3">
          <span className="text-gray-900 block">Need Appliance Service?</span>
          <span className="text-blue-600 underline decoration-blue-300 underline-offset-8 block mt-1">
            We're Just a Call Away.
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-500 text-sm md:text-base max-w-xl mb-6">
          Get fast, reliable and professional appliance service at your
          doorstep in Indore. Book your service now and let our experts take
          care of the rest.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <div
           onClick={() => setIsBookingOpen(true)}
            className="flex items-center gap-3 bg-blue-900 cursor-pointer hover:opacity-90 transition-opacity text-white font-semibold text-sm md:text-base px-6 py-3 rounded-full shadow-lg"
          >
            <Calendar className="w-5 h-5" />
            Book a Service
            <ArrowRight className="w-5 h-5" />
          </div>

          <a
            href="tel:+9189825 63088"
            className="flex items-center gap-3 bg-white hover:bg-blue-200 transition-colors text-blue-950 font-semibold px-6 py-3 rounded-full"
          >
            <Phone className="w-5 h-5" />
            <span className="text-left leading-tight">
              <span className="block text-base font-extrabold">
                +91 89825 63088
              </span>
            </span>
          </a>
        </div>

        {/* Feature icons row */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-0">
          {features.map(({ icon: Icon, title, subtitle }, idx) => (
            <div
              key={title}
              className={`flex items-center gap-3 md:px-6 ${
                idx !== 0 ? "md:border-l md:border-gray-300" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-blue-950" />
              </div>
              <p className="text-left leading-tight">
                <span className="block text-sm font-bold text-gray-900">
                  {title}
                </span>
                <span className="block text-sm text-gray-500">
                  {subtitle}
                </span>
              </p>
            </div>
          ))}
        </div>


        {/* Handwritten note */}
        <p
          className="hidden lg:block absolute top-2 right-[-40px] text-blue-950 text-base italic leading-tight rotate-[6deg]"
          style={{ fontFamily: "cursive" }}
        >
          Cleaner
          <br />
          Homes
          <br />
          Happier
          <br />
          Families
        </p>
      </div>
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
        />
    </section>
  );
}