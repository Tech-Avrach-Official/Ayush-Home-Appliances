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

export default function Blog4() {
  return (
   <>
   <Navbar/>
    <article className="w-full bg-white">
      {/* Featured Image */}
      <div className="w-full h-64 md:h-[450px] relative">
        <img
          src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1788853895/91a99979-6469-4788-bf02-77ca70f28dbd_usyasr.png"
          alt="Technician installing a new RO purifier in Indore"
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
          RO Installation in Indore: What to Expect for a Perfect Setup
        </h1>

        {/* Intro */}
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
          A new RO purifier is only as good as its installation. If you're
          planning RO installation in Indore, this guide covers why correct
          setup matters, what a professional installation involves, and how
          Ayush Home Appliances makes sure your new unit performs perfectly
          from day one.
        </p>

        {/* Section: Why correct installation matters */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Droplet className="w-5 h-5 text-blue-600" />
            Why Correct RO Installation Matters
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            An RO purifier depends on the right water pressure, secure
            plumbing connections and proper electrical setup to work
            efficiently. A rushed or incorrect installation can lead to
            leaks, poor water flow, wasted water or even damage to the unit
            itself within the first few months.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Professional RO installation in Indore ensures your purifier is
            set up correctly the first time, saving you from avoidable
            repairs and giving you clean water from day one.
          </p>
        </section>

        {/* Section: Things to check before installation */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-600" />
            Things to Check Before Installation
          </h2>
          <ul className="flex flex-col gap-2">
            {[
              "Available space under the sink or countertop for the unit",
              "Water pressure and inlet connection near the installation point",
              "A nearby power socket for the pump and electronics",
              "Drainage point for the reject water outlet",
              "Suitable spot for wall-mounting the storage tank, if required",
              "Water quality/TDS level, to choose the right purification stages",
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
            What's Included in a Professional RO Installation
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            When you book RO installation in Indore with Ayush Home
            Appliances, our technicians handle the entire setup process from
            start to finish:
          </p>
          <ul className="flex flex-col gap-2">
            {[
              "Site inspection and finalizing the best installation point",
              "Fitting the inlet connection, tap and storage tank securely",
              "Setting up all filter stages, membrane and pump correctly",
              "Wiring and connecting the SMPS and electronic components",
              "Setting up the drainage line for reject water",
              "Complete performance check and water quality testing before handover",
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
            Why Choose Ayush Home Appliances for RO Installation in Indore
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            We focus on clean, careful installations with no shortcuts.
            Whether it's your first RO purifier or a replacement unit,
            here's what sets our installation service apart:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            {[
              {
                title: "Doorstep Installation",
                desc: "Our technicians come to your home fully equipped for setup.",
              },
              {
                title: "Genuine Parts",
                desc: "Only quality-tested fittings, tubing and components are used.",
              },
              {
                title: "Skilled Technicians",
                desc: "Trained professionals who install all major RO brands.",
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
                q: "How long does RO installation usually take?",
                a: "A standard RO installation typically takes 45 to 60 minutes, depending on the plumbing setup and space available under the sink.",
              },
              {
                q: "Do I need to arrange anything before the technician arrives?",
                a: "Just ensure there's a water inlet, power socket and drainage point near the installation area. Our technician will handle the rest.",
              },
              {
                q: "Do you install all RO brands?",
                a: "Yes, our technicians are experienced in installing all major RO brands available in Indore, including Aquaguard, Kent, Livpure and more.",
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