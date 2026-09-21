import React from "react";
import {
  Headset,
  Zap,
  UserCog,
  ShieldCheck,
  Home,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Quick Response",
    description: "Fast and timely doorstep service across Indore.",
  },
  {
    icon: UserCog,
    title: "Skilled Technicians",
    description:
      "Trained and experienced professionals for reliable appliance care.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Service",
    description:
      "Quality work with proper inspection and genuine solutions.",
  },
  {
    icon: Home,
    title: "Doorstep Convenience",
    description:
      "No need to carry your appliance anywhere. We come to you.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full relative overflow-hidden py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 sm:px-4 py-2 mb-4">
            <Headset className="w-4 h-4 text-blue-950 shrink-0" />

            <span className="text-[10px] sm:text-xs font-bold tracking-[0.15em] sm:tracking-widest text-blue-950">
              WHY CHOOSE AYUSH?
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-gray-900 mb-3 sm:mb-4">
            Reliable Service.{" "}
            <span className="text-blue-600">
              Happier Homes
            </span>
            .
          </h2>

          <p className="text-gray-500 text-sm sm:text-base leading-relaxed px-2 sm:px-0">
            We are committed to providing professional, affordable and
            trustworthy appliance care for your home.
          </p>
        </div>

        {/* Image + Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch mb-8 sm:mb-10">

          {/* Left Image */}
          <div className="relative w-full">
            <div
              className="
                relative
                w-full
                aspect-[4/3]
                sm:aspect-[16/10]
                lg:aspect-auto
                lg:h-full
                min-h-0
                lg:min-h-[500px]
                rounded-2xl
                sm:rounded-3xl
                overflow-hidden
              "
            >
              <img
                src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1788604604/ChatGPT_Image_Sep_5_2026_04_05_51_PM_qgkflw.png"
                alt="Technician servicing a washing machine"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="
                  bg-white
                  rounded-2xl
                  border
                  border-gray-100
                  shadow-sm
                  hover:shadow-md
                  transition-shadow
                  duration-300
                  p-5
                  sm:p-6
                  flex
                  flex-col
                  gap-3
                "
              >
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-950" />
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-extrabold text-gray-900 leading-tight">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}