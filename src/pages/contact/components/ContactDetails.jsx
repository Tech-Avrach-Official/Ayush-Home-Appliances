import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Contact from "../../home/components/Contact";

const contactDetails = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Have a question? Call us anytime.",
    value: "+91 89825 63088",
    bottom: "Everyday, 9:00 AM - 9:00 PM",
    type: "phone",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Drop us an email and we'll get back soon.",
    value: "ayushhomeappliances.72@gmail.com",
    bottom: "We reply within 24 hours",
    type: "email",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Our service center is located at:",
    value:
      "Shop No. 02, RE2 Road, near RTO Office Road, Nayta Mundla, Indore, Madhya Pradesh 452020",
    type: "location",
  },
];

export default function ContactDetail() {
  return (
    <section className="w-full bg-white px-4 md:px-8 py-10 md:py-14">
      <div className="max-w-6xl mx-auto">

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {contactDetails.map(
            ({ icon: Icon, title, description, value, bottom, type }) => (
              <div
                key={title}
                className="
                  bg-white
                  border border-blue-100
                  rounded-2xl
                  px-6 py-7
                  md:px-7 md:py-8
                  text-center
                  shadow-sm
                  hover:shadow-md
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                {/* Icon */}
                <div
                  className={`
                    w-16 h-16
                    mx-auto
                    rounded-full
                    flex items-center justify-center
                    mb-4
                    ${
                      type === "phone"
                        ? "bg-blue-50"
                        : type === "email"
                        ? "bg-emerald-50"
                        : "bg-red-50"
                    }
                  `}
                >
                  <Icon
                    className={`
                      w-7 h-7
                      ${
                        type === "phone"
                          ? "text-blue-600"
                          : type === "email"
                          ? "text-emerald-500"
                          : "text-red-500"
                      }
                    `}
                    strokeWidth={2.3}
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-extrabold text-gray-900 mb-2">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed min-h-[42px]">
                  {description}
                </p>

                {/* Main Value */}
                <div
                  className={`
                    mt-3
                    mb-3
                    ${
                      type === "location"
                        ? "text-sm md:text-base  leading-relaxed"
                        : "text-base md:text-lg"
                    }
                    font-extrabold
                    ${
                      type === "phone"
                        ? "text-blue-600"
                        : "text-blue-950"
                    }
                  `}
                >
                  {type === "phone" ? (
                    <a
                      href="tel:+918982563088"
                      className="hover:text-blue-700 transition-colors"
                    >
                      {value}
                    </a>
                  ) : type === "email" ? (
                    <a
                      href="mailto:ayushhomeappliances.72@gmail.com"
                      className="hover:text-blue-600 transition-colors break-all"
                    >
                      {value}
                    </a>
                  ) : type === "location" ? (
                    <a
                      href="https://www.google.com/maps/place/Ayush+Home+Appliances/@22.719568,75.857934,17z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </div>

                {/* Bottom Text */}
                {bottom && (
                  <p className="text-sm text-gray-500">
                    {bottom}
                  </p>
                )}
              </div>
            )
          )}
        </div>
      </div>

      {/* Contact Section */}
      <Contact />
    </section>
  );
}