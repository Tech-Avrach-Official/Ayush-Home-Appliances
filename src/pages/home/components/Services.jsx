import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

const featuredService = {
  number: "01",
  title: "Chimney",
  titleHighlight: "Service",
  description:
    "Keep your kitchen fresh and smoke-free with our expert chimney services.",
  points: [
    "Repair & Servicing",
    "Deep Cleaning",
    "New Installation",
    "Spare Parts Replacement",
  ],
  note: (
    <>
      Cleaner Kitchen
      <br />
      Happier Living
    </>
  ),
  image:
    "https://res.cloudinary.com/dhf8eyjee/image/upload/v1788599113/ad422954-76e2-4664-99f5-783263e2bb19_dx6ycb.png",
};

const services = [
  {
    number: "02",
    title: "RO",
    titleHighlight: "Service",
    description:
      "Get pure and healthy drinking water with our professional RO services.",
    points: [
      "RO Repair & Servicing",
      "Filter Replacement",
      "New Installation",
      "Complete RO Cleaning",
    ],
    image:
      "https://res.cloudinary.com/dhf8eyjee/image/upload/v1788599532/372fe94a-0f7a-4552-a699-eadaca725ad0_tzwq1h.png",
  },
  {
    number: "03",
    title: "Installation &",
    titleHighlight: "Maintenance",
    description:
      "Professional installation and maintenance for long-lasting performance.",
    points: [
      "New Appliance Installation",
      "Regular Maintenance",
      "Inspection & Diagnosis",
      "Parts Replacement",
    ],
    image:
      "https://res.cloudinary.com/dhf8eyjee/image/upload/v1788599622/eb050c66-2c60-479a-b289-4dcc87a3f2a1_dhstaf.png",
  },
  {
    number: "04",
    title: "Water",
    titleHighlight: "Purifier",
    description:
      "Ensure safe and clean drinking water with our expert water purifier services.",
    points: [
      "Water Purifier Repair",
      "Filter & UV Replacement",
      "New Installation",
      "Complete Servicing",
    ],
    image:
      "https://res.cloudinary.com/dhf8eyjee/image/upload/v1788599712/48969d7d-e7f9-4154-9b88-e4f96a7ce8ff_mqa7lm.png",
  },
];

function CheckItem({ text }) {
  return (
    <li className="flex items-start gap-2 text-sm text-gray-600">
      <CheckCircle2 className="w-4 h-4 text-blue-950 shrink-0 mt-0.5" />
      <span>{text}</span>
    </li>
  );
}

function ExploreButton() {
  return (
    <Link
      to="/services"
      className="
        inline-flex
        items-center
        justify-center
        gap-2
        bg-blue-950
        hover:bg-blue-900
        transition-colors
        text-white
        text-sm
        font-semibold
        px-6
        py-3
        rounded-xl
        w-fit
        max-[480px]:w-full
      "
    >
      Explore Service
      <ArrowRight className="w-4 h-4 shrink-0" />
    </Link>
  );
}

export default function Services() {
  return (
    <section className="w-full bg-[#f1f8ff] relative overflow-hidden py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto relative">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-2xl mx-auto mb-9 sm:mb-10 md:mb-12 relative">

          <p className="text-[11px] sm:text-xs font-bold tracking-[0.18em] sm:tracking-widest text-blue-950 mb-2">
            OUR SERVICES
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-gray-900 mb-3 sm:mb-4">
            Complete{" "}
            <span className="text-blue-600">Home</span>{" "}
            Appliance{" "}
            <span className="text-blue-600">Care</span>
          </h2>

          <p className="text-gray-500 text-sm sm:text-base leading-relaxed px-1">
            From chimney servicing to RO care, we provide reliable
            installation, repair and maintenance services to keep your home
            running smoothly.
          </p>

          {/* Handwritten note */}
          <p
            className="
              hidden
              lg:block
              absolute
              -top-6
              -right-36
              text-blue-950
              text-lg
              italic
              leading-tight
              rotate-[6deg]
            "
            style={{ fontFamily: "cursive" }}
          >
            Your
            <br />
            Comfort
            <br />
            Our Priority
          </p>
        </div>

        {/* ================= FEATURED SERVICE ================= */}
      <div
  className="
    bg-white
    rounded-2xl
    sm:rounded-3xl
    shadow-sm
    border
    border-gray-100
    overflow-hidden
    mb-6
    grid
    grid-cols-1
    lg:grid-cols-[30%_70%]
  "
>
  {/* Content */}
  <div
    className="
      flex
      flex-col
      gap-4
      p-5
      sm:p-7
      md:p-8
      lg:p-10
      order-2
      lg:order-1
    "
  >
    {/* Number */}
    <div className="flex items-center gap-3">
      <span
        className="
          w-9 h-9
          sm:w-10 sm:h-10
          flex items-center justify-center
          bg-blue-50
          text-blue-950
          font-bold
          rounded-lg
          text-sm
          shrink-0
        "
      >
        {featuredService.number}
      </span>

      <div className="h-px w-8 sm:w-10 bg-gray-300" />
    </div>

    {/* Title */}
    <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight text-gray-900">
      {featuredService.title}{" "}
      <span className="text-blue-600">
        {featuredService.titleHighlight}
      </span>
    </h3>

    {/* Description */}
    <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-lg">
      {featuredService.description}
    </p>

    {/* Points */}
    <ul className="flex flex-col gap-2.5">
      {featuredService.points.map((point) => (
        <CheckItem key={point} text={point} />
      ))}
    </ul>

    {/* Button */}
    <div className="pt-1">
      <ExploreButton />
    </div>
  </div>

  {/* Image */}
  <div
    className="
      relative
      w-full
      min-h-[220px]
      sm:min-h-[280px]
      md:min-h-[320px]
      lg:min-h-full
      order-1
      lg:order-2
    "
  >
    <img
      src={featuredService.image}
      alt={`${featuredService.title} ${featuredService.titleHighlight}`}
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Handwritten Note */}
    <p
      className="
        hidden
        md:block
        absolute
        bottom-4
        right-4
        text-blue-950
        text-sm
        lg:text-base
        italic
        leading-tight
        rotate-[-4deg]
        bg-white/75
        backdrop-blur-sm
        px-2
        py-1
        rounded
      "
      style={{ fontFamily: "cursive" }}
    >
      {featuredService.note}
    </p>
  </div>
</div>
        {/* ================= REMAINING SERVICES ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service) => (
            <div
              key={service.number}
              className="
                bg-white
                rounded-2xl
                sm:rounded-3xl
                shadow-sm
                border
                border-gray-100
                p-4
                sm:p-5
                md:p-6
                flex
                flex-col
                gap-4
              "
            >
              {/* Image */}
              <div
                className="
                  relative
                  w-full
                  aspect-[4/3]
                  rounded-xl
                  sm:rounded-2xl
                  overflow-hidden
                "
              >
                <img
                  src={service.image}
                  alt={`${service.title} ${service.titleHighlight}`}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-105
                  "
                />

                {/* Number */}
                <span
                  className="
                    absolute
                    bottom-3
                    left-3
                    w-8
                    h-8
                    sm:w-9
                    sm:h-9
                    flex
                    items-center
                    justify-center
                    bg-white
                    text-blue-950
                    font-bold
                    rounded-lg
                    text-sm
                    shadow
                  "
                >
                  {service.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-[21px] font-extrabold leading-tight text-gray-900">
                {service.title}{" "}
                <span className="text-blue-600">
                  {service.titleHighlight}
                </span>
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Points */}
              <ul className="flex flex-col gap-2">
                {service.points.map((point) => (
                  <CheckItem key={point} text={point} />
                ))}
              </ul>

              {/* Button */}
              <div className="mt-auto pt-1">
                <ExploreButton />
              </div>
            </div>
          ))}
        </div>

        {/* ================= VIEW ALL ================= */}
        <div className="flex flex-col items-center gap-2 mt-9 sm:mt-10 md:mt-12">

          <Link
            to="/services"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              bg-blue-950
              hover:bg-blue-900
              transition-colors
              text-white
              text-sm
              font-semibold
              px-7
              sm:px-8
              py-3
              sm:py-3.5
              rounded-xl
              w-full
              max-w-[260px]
            "
          >
            View All Services
            <ArrowRight className="w-4 h-4 shrink-0" />
          </Link>

          <p className="text-xs text-gray-500 text-center px-4">
            Explore our complete range of home appliance services.
          </p>
        </div>

      </div>
    </section>
  );
}