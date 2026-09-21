import React, { useState, useEffect, useRef } from "react";
import {
  MessageCircle,
  Quote,
  Star,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Users,
  ThumbsUp,
  Trophy,
} from "lucide-react";

const testimonials = [
  {
    initials: "RS",
    name: "Rahul Sharma",
    location: "Indore",
    rating: 5,
    text: "Very professional service! My chimney was not working properly, but the Ayush team fixed it the same day. Highly recommended.",
  },
  {
    initials: "PK",
    name: "Pooja Khandelwal",
    location: "Indore",
    rating: 5,
    text: "Quick response and excellent service. The technician was polite, knowledgeable and completed the work neatly. Great experience!",
  },
  {
    initials: "AM",
    name: "Amit Mishra",
    location: "Indore",
    rating: 5,
    text: "I had my chimney cleaned and it works like new now. Affordable pricing and on-time service. Will surely call again.",
  },
  {
    initials: "SV",
    name: "Sneha Verma",
    location: "Indore",
    rating: 5,
    text: "Booked an RO service and the technician arrived on time. Explained everything clearly and fixed the issue in no time.",
  },
  {
    initials: "VK",
    name: "Vikas Kumar",
    location: "Indore",
    rating: 5,
    text: "Genuine spare parts and honest pricing. The team installed my new chimney without any hassle. Very satisfied.",
  },
  {
    initials: "NA",
    name: "Neha Agrawal",
    location: "Indore",
    rating: 5,
    text: "Great after-sales support. Had a small issue post service and they resolved it immediately without extra charges.",
  },
];

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Happy Customers",
  },
  {
    icon: Trophy,
    value: "10+ Years",
    label: "of Experience",
  },
  {
    icon: Star,
    value: "4.8/5",
    label: "Customer Rating",
  },
  {
    icon: ThumbsUp,
    value: "95%",
    label: "Would Recommend",
  },
];

const AUTOPLAY_MS = 3000;

function TestimonialCard({ t }) {
  return (
    <div
      className="
        bg-white
        border border-gray-100
        shadow-sm
        rounded-2xl
        p-5
        sm:p-6
        flex
        flex-col
        h-full
        min-h-[270px]
        sm:min-h-[290px]
      "
    >
      {/* Top */}
      <div className="flex items-center justify-between mb-4">
        <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-blue-100 fill-blue-100 shrink-0" />

        <div className="flex items-center gap-0.5">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star
              key={i}
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 fill-amber-400"
            />
          ))}
        </div>
      </div>

      {/* Review */}
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed flex-1">
        {t.text}
      </p>

      {/* User */}
      <div className="border-t border-gray-100 mt-5 sm:mt-6 pt-4 flex items-center gap-3">
        <div
          className="
            w-10
            h-10
            rounded-full
            bg-blue-100
            flex
            items-center
            justify-center
            font-bold
            text-blue-950
            text-sm
            shrink-0
          "
        >
          {t.initials}
        </div>

        <div className="min-w-0">
          <p className="text-sm font-bold text-gray-900 truncate">
            {t.name}
          </p>

          <div className="flex items-center gap-1 text-xs text-gray-500">
            <MapPin className="w-3 h-3 text-blue-600 shrink-0" />
            {t.location}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [withTransition, setWithTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const [cardsVisible, setCardsVisible] = useState(3);

  const timeoutRef = useRef(null);

  const total = testimonials.length;

  /* --------------------------------
     Responsive Cards Count
  -------------------------------- */
  useEffect(() => {
    const updateCardsVisible = () => {
      if (window.innerWidth < 640) {
        setCardsVisible(1);
      } else if (window.innerWidth < 1024) {
        setCardsVisible(2);
      } else {
        setCardsVisible(3);
      }
    };

    updateCardsVisible();

    window.addEventListener("resize", updateCardsVisible);

    return () => {
      window.removeEventListener("resize", updateCardsVisible);
    };
  }, []);

  /* --------------------------------
     Track
  -------------------------------- */
  const track = [
    ...testimonials,
    ...testimonials.slice(0, cardsVisible),
  ];

  /* --------------------------------
     Next
  -------------------------------- */
  const goNext = () => {
    setIndex((current) => current + 1);
  };

  /* --------------------------------
     Previous
  -------------------------------- */
  const goPrev = () => {
    if (index === 0) {
      setWithTransition(false);
      setIndex(total);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setWithTransition(true);
          setIndex(total - 1);
        });
      });
    } else {
      setIndex((current) => current - 1);
    }
  };

  /* --------------------------------
     Autoplay
  -------------------------------- */
  useEffect(() => {
    if (isPaused) return;

    timeoutRef.current = setTimeout(goNext, AUTOPLAY_MS);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [index, isPaused]);

  /* --------------------------------
     Infinite Loop
  -------------------------------- */
  useEffect(() => {
    if (index === total) {
      const timeout = setTimeout(() => {
        setWithTransition(false);
        setIndex(0);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setWithTransition(true);
          });
        });
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [index, total]);

  /* --------------------------------
     Fix index when responsive count changes
  -------------------------------- */
  useEffect(() => {
    setWithTransition(false);
    setIndex(0);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setWithTransition(true);
      });
    });
  }, [cardsVisible]);

  const activeDot = index % total;

  return (
    <section
      className="
        w-full
        bg-white
        relative
        overflow-hidden
        py-10
        sm:py-14
        md:py-16
        px-4
        sm:px-6
        md:px-8
      "
    >
      <div className="max-w-7xl mx-auto relative">

        {/* ================= HEADER ================= */}
        <div
          className="
            text-center
            max-w-2xl
            mx-auto
            mb-8
            sm:mb-10
            md:mb-12
            relative
          "
        >
          {/* Badge */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              bg-blue-50
              rounded-full
              px-3
              sm:px-4
              py-1.5
              sm:py-2
              mb-4
            "
          >
            <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-950" />

            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-blue-950">
              CUSTOMER TESTIMONIALS
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              font-extrabold
              leading-tight
              text-gray-900
              mb-3
              sm:mb-4
            "
          >
            What Our{" "}
            <span className="text-blue-600 underline decoration-blue-600 underline-offset-4 sm:underline-offset-8">
              Customers Say
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed px-2">
            Real feedback from happy customers across Indore. Your
            satisfaction is our biggest motivation.
          </p>

          {/* Handwritten note */}
          <p
            className="
              hidden
              xl:block
              absolute
              -top-6
              right-[-160px]
              text-blue-950
              text-lg
              italic
              leading-tight
              rotate-[8deg]
            "
            style={{ fontFamily: "cursive" }}
          >
            Trusted
            <br />
            by Families
            <br />
            in Indore
          </p>
        </div>

        {/* ================= CAROUSEL ================= */}
        <div
          className="
            relative
            flex
            items-center
            gap-2
            sm:gap-3
            md:gap-4
          "
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Previous */}
          <button
            onClick={goPrev}
            className="
              flex
              shrink-0
              w-9
              h-9
              sm:w-10
              sm:h-10
              md:w-11
              md:h-11
              rounded-full
              bg-blue-50
              hover:bg-blue-100
              active:scale-95
              transition-all
              items-center
              justify-center
              z-10
            "
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-blue-950" />
          </button>

          {/* Viewport */}
          <div className="overflow-hidden flex-1 min-w-0">
            <div
              className={`flex ${
                withTransition
                  ? "transition-transform duration-500 ease-in-out"
                  : ""
              }`}
              style={{
                width: `${(track.length / cardsVisible) * 100}%`,
                transform: `translateX(-${
                  (index / track.length) * 100
                }%)`,
              }}
            >
              {track.map((t, i) => (
                <div
                  key={`${t.name}-${i}`}
                  className="px-1.5 sm:px-2 md:px-3"
                  style={{
                    width: `${100 / track.length}%`,
                  }}
                >
                  <TestimonialCard t={t} />
                </div>
              ))}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={goNext}
            className="
              flex
              shrink-0
              w-9
              h-9
              sm:w-10
              sm:h-10
              md:w-11
              md:h-11
              rounded-full
              bg-blue-50
              hover:bg-blue-100
              active:scale-95
              transition-all
              items-center
              justify-center
              z-10
            "
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-950" />
          </button>
        </div>

        {/* ================= DOTS ================= */}
        <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setWithTransition(true);
                setIndex(i);
              }}
              aria-label={`Go to slide ${i + 1}`}
              className={`
                rounded-full
                transition-all
                ${
                  i === activeDot
                    ? "w-5 sm:w-6 h-2 sm:h-2.5 bg-blue-950"
                    : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-gray-300"
                }
              `}
            />
          ))}
        </div>

        {/* ================= STATS ================= */}
        <div
          className="
            bg-blue-50/60
            rounded-2xl
            px-4
            sm:px-6
            md:px-10
            py-5
            sm:py-6
            mt-8
            sm:mt-10
          "
        >
          {/* 
            Mobile   : 2 columns
            Tablet   : 2 columns
            Desktop  : 4 columns
          */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 sm:gap-6">
            {stats.map(({ icon: Icon, value, label }, idx) => (
              <div
                key={label}
                className={`
                  flex
                  items-center
                  justify-center
                  lg:justify-start
                  gap-3
                  sm:gap-4
                  min-w-0

                  ${
                    idx === 1
                      ? "lg:pl-6 lg:border-l lg:border-gray-300"
                      : ""
                  }

                  ${
                    idx === 2
                      ? "lg:pl-6 lg:border-l lg:border-gray-300"
                      : ""
                  }

                  ${
                    idx === 3
                      ? "lg:pl-6 lg:border-l lg:border-gray-300"
                      : ""
                  }
                `}
              >
                {/* Icon */}
                <Icon
                  className="
                    w-6
                    h-6
                    sm:w-8
                    sm:h-8
                    text-blue-950
                    shrink-0
                  "
                />

                {/* Text */}
                <div className="min-w-0">
                  <p
                    className="
                      text-base
                      sm:text-xl
                      font-extrabold
                      text-gray-900
                      whitespace-nowrap
                    "
                  >
                    {value}
                  </p>

                  <p
                    className="
                      text-[11px]
                      sm:text-sm
                      text-gray-500
                      whitespace-nowrap
                    "
                  >
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}