import React, { useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import BookingModal from "../../../components/BookingModal";

const BlogCta = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <div className="bg-blue-950 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Content */}
        <div>
          <h3 className="text-white text-xl font-bold mb-1">
            Need RO Service in Indore?
          </h3>

          <p className="text-blue-200 text-sm">
            Book a doorstep visit today and let our experts take care of
            your RO purifier.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 shrink-0">

          {/* Book Service */}
          <button
            type="button"
            onClick={() => setIsBookingOpen(true)}
            className="
              flex
              items-center
              gap-2
              bg-white
              hover:bg-gray-100
              transition-colors
              text-blue-950
              font-semibold
              text-sm
              px-5
              py-3
              rounded-full
            "
          >
            Book a Service
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Call Now */}
          <a
            href="tel:+9189825 63088"
            className="
              flex
              items-center
              gap-2
              border
              border-white/30
              hover:bg-white/10
              transition-colors
              text-white
              font-semibold
              text-sm
              px-5
              py-3
              rounded-full
            "
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
};

export default BlogCta;