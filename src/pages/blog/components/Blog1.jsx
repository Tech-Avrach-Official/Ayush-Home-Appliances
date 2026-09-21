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

export default function Blog1() {
  return (
   <>
   <Navbar/>
    <article className="w-full bg-white">
      {/* Featured Image */}
      <div className="w-full h-64 md:h-[450px] relative">
        <img
          src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1788852203/f3b423d2-a7d6-421a-b479-372285dcee4c_lbabfk.png"
          alt="RO service technician working on a water purifier in Indore"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-10 md:py-14">
        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-1.5">
            <Tag className="w-4 h-4 text-blue-600" />
            RO Services
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
          RO Service in Indore: Complete Guide to Reliable Water Purifier Care
        </h1>

        {/* Intro */}
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
          Clean drinking water starts with a well-maintained RO system. If
          you're searching for dependable RO service in Indore, this guide
          covers everything you need to know — from why regular servicing
          matters to what a professional visit actually includes, and how
          Ayush Home Appliances can help.
        </p>

        {/* Section: Why RO Service Matters */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Droplet className="w-5 h-5 text-blue-600" />
            Why Regular RO Service Matters
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            An RO (Reverse Osmosis) purifier works continuously to remove
            impurities, bacteria and dissolved salts from your drinking
            water. Over time, filters get clogged, membranes wear out and
            water flow slows down. Without regular servicing, your purifier
            can end up doing more harm than good — passing contaminated or
            poor-tasting water instead of clean water.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Routine RO service in Indore helps you avoid unexpected
            breakdowns, extends the life of your appliance, and most
            importantly, keeps your family's drinking water safe.
          </p>
        </section>

        {/* Section: Signs your RO needs service */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-600" />
            Signs Your RO Purifier Needs Servicing
          </h2>
          <ul className="flex flex-col gap-2">
            {[
              "Water tastes odd, salty or has a strange smell",
              "Slow or reduced water flow from the tap",
              "Unusual noise coming from the RO unit",
              "Water leakage around the purifier or under the sink",
              "It's been more than 6–12 months since the last service",
              "TDS (Total Dissolved Solids) levels look higher than usual",
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
            What's Included in a Professional RO Service
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            When you book RO service in Indore with Ayush Home Appliances,
            our technicians follow a thorough checklist to make sure every
            part of your purifier is working the way it should:
          </p>
          <ul className="flex flex-col gap-2">
            {[
              "Complete inspection of filters, membrane and tank",
              "Replacement of sediment, carbon and RO membrane filters (as needed)",
              "Cleaning of the storage tank and internal tubing",
              "Checking water pressure, flow rate and TDS levels",
              "Testing for leaks and fixing loose or worn-out fittings",
              "Overall performance check before handover",
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
            Why Choose Ayush Home Appliances for RO Service in Indore
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            We've built our reputation on honest pricing, genuine spare
            parts and technicians who actually explain what they're doing.
            Whether it's a quick filter change or a full system diagnosis,
            here's what sets our RO service apart:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            {[
              {
                title: "Doorstep Service",
                desc: "No need to carry your RO unit anywhere — we come to you.",
              },
              {
                title: "Genuine Parts",
                desc: "Only quality-tested filters and membranes are used.",
              },
              {
                title: "Skilled Technicians",
                desc: "Trained professionals who service all major RO brands.",
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
                q: "How often should I get my RO purifier serviced?",
                a: "Most RO systems should be serviced every 6 to 12 months, depending on your water quality and usage. Filters may need replacement more frequently in areas with harder water.",
              },
              {
                q: "How long does a typical RO service take?",
                a: "A standard service visit usually takes 30 to 45 minutes, depending on the condition of the unit and whether parts need replacing.",
              },
              {
                q: "Do you service all RO brands?",
                a: "Yes, our technicians are experienced with all major RO brands available in Indore, including Aquaguard, Kent, Livpure and more.",
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