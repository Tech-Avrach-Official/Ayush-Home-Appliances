import React from "react";
import { Users, Calendar, Star, MapPin } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Happy Customers" },
  { icon: Calendar, value: "10+", label: "Years of Experience" },
  { icon: Star, value: "4.8/5", label: "Customer Rating" },
  { icon: MapPin, value: "Indore", label: "Doorstep Service" },
];

export default function OurStory() {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Image + Text */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
          {/* Left image */}
          <div className="w-full aspect-[4/3] md:aspect-[5/4] rounded-2xl overflow-hidden">
            <img
              src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1788767972/7ebaab20-209c-48bf-a72a-6611f020c375_mzbs2x.png"
              alt="Home appliances setup"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right content */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold tracking-[0.2em] text-blue-600">
              OUR STORY
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900">
              A Local Business
              <br />
              Built on <span className="text-blue-600">Trust</span>
            </h2>

            <p className="text-gray-500 text-sm md:text-base">
              Ayush Home Appliances was started with a simple goal — to
              provide honest, reliable, and affordable appliance services to
              families in Indore.
            </p>

            <p className="text-gray-500 text-sm md:text-base">
              Over the years, we have served hundreds of happy customers and
              built a reputation for quality work and genuine care. We
              understand how important home appliances are in your daily
              life, and that's why we treat every service request with
              responsibility.
            </p>

            <div className="mt-2">
              <p
                className="text-blue-950 text-xl italic leading-snug"
                style={{ fontFamily: "cursive" }}
              >
                "Your Comfort,
                <br />
                Our Priority"
              </p>
              <p className="text-xs font-bold tracking-widest text-gray-500 mt-2">
                — AYUSH HOME APPLIANCES
              </p>
            </div>
          </div>
        </div>

        {/* Stats bar */}
       <div className="bg-[#133c5c] rounded-2xl px-6 md:px-10 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, value, label }, idx) => (
              <div
                key={label}
                className={`flex flex-col items-center text-center gap-2 ${
                  idx !== 0 ? "sm:border-l sm:border-white/20" : ""
                }`}
              >
                <Icon className="w-6 h-6 text-blue-300" />
                <p className="text-xl font-extrabold text-white">
                  {value}
                </p>
                <p className="text-sm text-blue-200">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}