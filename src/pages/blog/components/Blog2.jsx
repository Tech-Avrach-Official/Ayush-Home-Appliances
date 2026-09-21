import React from "react";
import {
  Calendar,
  Clock,
  Tag,
  CheckCircle2,
  Wrench,
  Droplet,
  ShieldCheck,
  Phone,
  ArrowRight,
} from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import BlogCta from "./BlogCta";

export default function Blog2() {
  return (
   <>
   <Navbar/>
    <article className="w-full bg-white">
      {/* Featured Image */}
      <div className="w-full h-64 md:h-[450px] relative">
        <img
          src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1788853123/4415cde2-25bc-4b45-aa53-8b4deaf0c117_rx8s78.png"
          alt="Technician servicing a water purifier in Indore"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-10 md:py-14">
        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-1.5">
            <Tag className="w-4 h-4 text-blue-600" />
            Water Purifier
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-blue-600" />
            September 8, 2026
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-blue-600" />
            5 min read
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          Water Purifier Service in Indore: Complete Guide to Cleaner, Safer Water
        </h1>

        {/* Intro */}
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
          A water purifier only works as well as its last service. If you're
          looking for reliable water purifier service in Indore, this guide
          covers why regular servicing matters, what a professional visit
          includes, and how Ayush Home Appliances keeps your purifier
          running at its best.
        </p>

        {/* Section: Why service matters */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Droplet className="w-5 h-5 text-blue-600" />
            Why Regular Water Purifier Service Matters
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Whether your purifier uses RO, UV or UF technology, its filters
            and internal components work continuously to remove impurities
            from your drinking water. Over time, filters get saturated, UV
            lamps lose effectiveness and internal parts wear down. Without
            regular servicing, your purifier can quietly stop doing its job
            properly, even if the water still looks and tastes fine.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Timely water purifier service in Indore ensures your family
            keeps getting genuinely safe drinking water, while also
            extending the life of the appliance and avoiding costly repairs
            later.
          </p>
        </section>

        {/* Section: Signs it needs service */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-600" />
            Signs Your Water Purifier Needs Servicing
          </h2>
          <ul className="flex flex-col gap-2">
            {[
              "Water tastes different, metallic or slightly off",
              "Slow water flow or the tank takes longer to fill",
              "Purifier makes unusual sounds while running",
              "Indicator lights blinking or showing filter change alerts",
              "It's been more than 6–12 months since the last service",
              "Visible discoloration or sediment in the water",
            ].map((point) => (
              <li key={point} className="flex items-start gap-2 text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                {point}
              </li>
            ))}
          </ul>
        </section>

        {/* Section: What's included */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-blue-600" />
            What's Included in a Professional Water Purifier Service
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            When you book water purifier service in Indore with Ayush Home
            Appliances, our technicians go through a complete checklist to
            make sure your purifier is working the way it should:
          </p>
          <ul className="flex flex-col gap-2">
            {[
              "Inspection of all filter stages and internal components",
              "Replacement of sediment, carbon and other filters (as needed)",
              "UV lamp check and replacement where applicable",
              "Cleaning of the storage tank and internal tubing",
              "Testing water flow, pressure and overall output quality",
              "Checking for leaks and fixing loose fittings",
            ].map((point) => (
              <li key={point} className="flex items-start gap-2 text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                {point}
              </li>
            ))}
          </ul>
        </section>

        {/* Section: Why choose Ayush */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Why Choose Ayush Home Appliances for Water Purifier Service in Indore
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            We focus on honest pricing, genuine spare parts and technicians
            who explain exactly what's being done to your purifier. From a
            routine filter change to a full diagnosis, here's what sets our
            water purifier service apart:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            {[
              {
                title: "Doorstep Service",
                desc: "No need to carry your purifier anywhere — we come to you.",
              },
              {
                title: "Genuine Parts",
                desc: "Only quality-tested filters and components are used.",
              },
              {
                title: "Skilled Technicians",
                desc: "Trained professionals who service all major purifier brands.",
              },
              {
                title: "Transparent Pricing",
                desc: "No hidden charges — you know the cost before we start.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-blue-50/60 rounded-xl p-4 flex flex-col gap-1"
              >
                <p className="font-bold text-gray-900 text-sm">
                  {item.title}
                </p>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-4">
            {[
              {
                q: "How often should I get my water purifier serviced?",
                a: "Most water purifiers should be serviced every 6 to 12 months, depending on your water quality and daily usage. Filters may need earlier replacement in areas with harder water.",
              },
              {
                q: "How long does a typical service visit take?",
                a: "A standard service visit usually takes 30 to 45 minutes, depending on the condition of the unit and whether any parts need replacing.",
              },
              {
                q: "Do you service all water purifier brands?",
                a: "Yes, our technicians are experienced with all major water purifier brands available in Indore, including Kent, Aquaguard, Livpure and more.",
              },
            ].map((item) => (
              <div key={item.q} className="border border-gray-100 rounded-xl p-4">
                <p className="font-bold text-gray-900 text-sm mb-1">
                  {item.q}
                </p>
                <p className="text-gray-600 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <BlogCta/>
      </div>
    </article>
    <Footer/>
   </>
  );
}