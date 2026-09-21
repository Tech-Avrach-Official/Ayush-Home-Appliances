import React from "react";

const categories = [
  {
    title: "Chimney Services",
    subtitle: "Repair, cleaning & installation",
    icon: "https://res.cloudinary.com/dhf8eyjee/image/upload/v1788773997/cooking_etmigi.png",
  },
  {
    title: "RO Services",
    subtitle: "Repair, filter replacement & more",
    icon: "https://res.cloudinary.com/dhf8eyjee/image/upload/v1788773994/drop-silhouette_nic7fq.png",
  },
  {
    title: "Installation & Maintenance",
    subtitle: "Professional setup & regular care",
    icon: "https://res.cloudinary.com/dhf8eyjee/image/upload/v1788773994/support_lzlzfk.png",
  },
  {
    title: "Water Purifier Services",
    subtitle: "Repair, filter change & servicing",
    icon: "https://res.cloudinary.com/dhf8eyjee/image/upload/v1788773995/water_hnoyen.png",
  },
];

export default function ServicesOverview() {
  return (
    <section className="w-full bg-gradient-to-b from-blue-100 to-white py-12 md:py-14 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <p className="text-[11px] md:text-xs font-bold tracking-[0.2em] text-blue-600 mb-2">
            OUR SERVICES
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-gray-900">
            Complete{" "}
            <span className="text-blue-600">
              Home Appliance Services
            </span>
          </h2>

          <p className="mt-2 md:mt-3 text-sm md:text-base font-medium text-gray-600">
            Professional repair, installation and maintenance services to
            keep your home running smoothly.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="
                group
                bg-white
                rounded-xl
                border border-blue-100
                shadow-sm
                hover:shadow-lg
                hover:-translate-y-1
                transition-all
                duration-300
                min-h-[145px]
                md:min-h-[155px]
                px-5
                py-5
                md:px-6
                md:py-6
                flex
                flex-col
                items-center
                justify-center
                text-center
              "
            >
              {/* Icon */}
              <div
                className="
                  w-14 h-14
                  md:w-20 md:h-20
                  rounded-3xl
                  bg-blue-50
                  flex
                  items-center
                  justify-center
                  mb-2.5
                  md:mb-3
                  transition-all
                  duration-300
                  group-hover:bg-blue-100
                "
              >
                <img
                  src={cat.icon}
                  alt={cat.title}
                  className="
                    w-8 h-8
                    md:w-12 md:h-12
                    object-contain
                  "
                />
              </div>

              {/* Title */}
              <h3
                className="
                  text-[20px]
                  md:text-lg
                  font-extrabold
                  leading-tight
                  text-gray-900
                  max-w-[210px]
                  line-clamp-1
                "
              >
                {cat.title}
              </h3>

              {/* Subtitle */}
              <p
                className="
                  mt-1.5
                  text-xs
                  md:text-sm
                  font-medium
                  leading-snug
                  text-gray-500
                  max-w-[220px]
                "
              >
                {cat.subtitle}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}