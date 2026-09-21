import React, { useState } from "react";
import {
    ShieldCheck,
    Wrench,
    Phone,
    ArrowRight,
    Zap,
    Users,
    Clock,
} from "lucide-react";
import BookingModal from "../../../components/BookingModal";

export default function Hero() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <section className="w-full bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">

                {/* ================= LEFT CONTENT ================= */}
                <div className="w-full lg:w-[40%] flex flex-col gap-5 sm:gap-6 px-5 sm:px-8 lg:px-0 lg:pr-8 py-12 sm:py-16 lg:py-20">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 w-fit shadow-sm bg-white">
                        <ShieldCheck className="w-4 h-4 text-blue-950 shrink-0" />

                        <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-gray-700">
                            TRUSTED HOME APPLIANCE SERVICE
                        </span>
                    </div>

                    {/* Heading */}
                    <h1
                        className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              xl:text-[52px]
              font-extrabold
              leading-[1.1]
              text-gray-900
            "
                    >
                        Expert Repair &amp; Installation Services{" "}
                        <span className="text-blue-950">
                            at Your Doorstep
                        </span>
                    </h1>

                    {/* Description */}
                    <p
                        className="
              text-gray-500
              text-sm
              sm:text-base
              lg:text-lg
              leading-6
              sm:leading-7
              max-w-xl
            "
                    >
                        From chimney repair &amp; installation to RO servicing, our
                        skilled technicians provide fast, reliable and professional home
                        appliance services.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-1">

                        {/* Book Service */}
                        <div
                          onClick={() => setIsBookingOpen(true)}
                            className="
                flex
                items-center
                cursor-pointer
                gap-2
                bg-blue-950
                hover:bg-blue-900
                transition-all
                duration-300
                text-white
                text-sm
                font-semibold
                px-5
                sm:px-6
                py-3
                sm:py-3.5
                rounded-xl
                shadow-md
                shadow-blue-950/10
              "
                        >
                            <Wrench className="w-4 h-4" />

                            Book a Service

                            <ArrowRight className="w-4 h-4" />
                        </div>

                        {/* Call Now */}
                        <a
                            href="tel:+9189825 63088"
                            className="
                flex
                items-center
                gap-2
                bg-white
                border
                border-gray-200
                shadow-sm
                hover:bg-gray-50
                transition-all
                duration-300
                text-gray-900
                text-sm
                font-semibold
                px-5
                sm:px-6
                py-3
                sm:py-3.5
                rounded-xl
              "
                        >
                            <Phone className="w-4 h-4 text-blue-950" />

                            Call Now
                        </a>

                    </div>

                    {/* Trust Points */}
                    <div
                        className="
              flex
              flex-wrap
              items-center
              gap-x-5
              sm:gap-x-6
              gap-y-3
              mt-2
              sm:mt-4
            "
                    >

                        {/* Quick Response */}
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 font-medium">
                            <Zap className="w-4 h-4 text-blue-950 shrink-0" />
                            Quick Response
                        </div>

                        {/* Skilled Technicians */}
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 font-medium">
                            <Users className="w-4 h-4 text-blue-950 shrink-0" />
                            Skilled Technicians
                        </div>

                        {/* Reliable Service */}
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 font-medium">
                            <ShieldCheck className="w-4 h-4 text-blue-950 shrink-0" />
                            Reliable Service
                        </div>

                    </div>
                </div>


                {/* ================= RIGHT IMAGE ================= */}
                <div
                    className="
            relative
            w-full
            lg:w-[60%]
            flex
            justify-center
            lg:justify-end
            self-stretch
          "
                >

                    {/* =====================================================
              DESKTOP DESIGN IMAGE BACKGROUND
              Hidden on mobile
          ====================================================== */}
                    <div
                        className="
            
            "
                        style={{
                            borderRadius: "42% 58% 65% 35% / 45% 45% 55% 55%",
                        }}
                    />


                    {/* =====================================================
              DESKTOP HANDWRITTEN TEXT
              Hidden on mobile
          ====================================================== */}
                    <p
                        className="
              hidden
              lg:block
              absolute
              top-10
              left-4
              xl:left-8
              text-blue-950
              text-lg
              italic
              leading-tight
              rotate-[-6deg]
              z-20
            "
                        style={{
                            fontFamily: "cursive",
                        }}
                    >
                        Your
                        <br />
                        Home Appliances
                        <br />
                        Our Responsibility
                    </p>


                    {/* =====================================================
              IMAGE
          ====================================================== */}
                    <div
                        className="
              relative
              w-full
              lg:w-full
              overflow-hidden
              px-5
              md:px-0
              z-10
              lg:min-h-[620px]
            "
                    >

                        {/* Desktop Image */}
                        <img
                            src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1788594158/d8b81395-f5a2-4590-ad3b-7a5ef724d3c8_qxsmgc.png"
                            alt="Technician repairing a chimney"
                            className="
                hidden
                lg:block
                w-full
                h-[620px]
                object-cover
                object-center
              "
                        />

                        {/* Mobile Image */}
                        <img
                            src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1788593335/c5599d63-3a22-49df-8f9a-a4057ce3ecc4_z1afc3.png"
                            alt="Ayush Home Appliances technician"
                            className="
                block
                lg:hidden
                w-full
                h-auto
                object-coverA
              "
                        />

                    </div>


                    {/* =====================================================
              FLOATING SUPPORT CARD
          ====================================================== */}
                    <div
                        className="
              absolute
              z-30

              /* Desktop */
              lg:bottom-20
              lg:right-[10px]

              /* Mobile */
              bottom-4
              right-4

              bg-white
              rounded-2xl
              shadow-xl
              border
              border-gray-100
              p-3
              sm:p-4
              flex
              items-center
              gap-2
              sm:gap-3
              w-[250px]
              sm:w-[270px]
            "
                    >

                        {/* Clock */}
                        <div
                            className="
                w-9
                h-9
                sm:w-10
                sm:h-10
                rounded-full
                bg-blue-50
                flex
                items-center
                justify-center
                shrink-0
              "
                        >
                            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-950" />
                        </div>


                        {/* Text */}
                        <div className="flex-1 min-w-0">

                            <p className="text-xs sm:text-sm font-bold text-gray-900">
                                24/7 Service Support
                            </p>

                            <p className="text-[10px] sm:text-xs text-gray-500 leading-snug mt-0.5">
                                Fast assistance for your appliance needs
                            </p>

                        </div>


                        {/* Arrow */}
                        <div
                            className="
                w-7
                h-7
                sm:w-8
                sm:h-8
                rounded-full
                bg-blue-950
                flex
                items-center
                justify-center
                shrink-0
              "
                        >
                            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                        </div>

                    </div>

                </div>

                   <BookingModal
                        isOpen={isBookingOpen}
                        onClose={() => setIsBookingOpen(false)}
                      />

            </div>
        </section>
    );
}