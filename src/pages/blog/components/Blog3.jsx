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

export default function Blog3() {
  return (
   <>
   <Navbar/>
    <article className="w-full bg-white">
      {/* Featured Image */}
      <div className="w-full h-64 md:h-[450px] relative">
        <img
          src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1788853599/b626fa47-5008-484d-b1de-8c7516cc87c4_of5jax.png"
          alt="Technician repairing a water purifier in Indore"
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
          Water Purifier Repair in Indore: Common Problems and Trusted Fixes
        </h1>

        {/* Intro */}
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
          A malfunctioning water purifier can disrupt your daily routine and
          put your family's health at risk. If you're searching for
          dependable water purifier repair in Indore, this guide covers the
          most common issues, what a repair visit typically involves, and
          how Ayush Home Appliances gets your purifier back to full working
          condition.
        </p>

        {/* Section: Common problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Droplet className="w-5 h-5 text-blue-600" />
            Common Water Purifier Problems We Fix
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Water purifiers, whether RO, UV or UF based, can develop faults
            due to daily wear, clogged filters, electrical issues or simply
            age. Some problems are minor and quick to fix, while others need
            a closer look at internal components.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Ignoring small issues like slow flow or unusual noise often leads
            to bigger, costlier repairs down the line — which is why timely
            water purifier repair in Indore is always worth it.
          </p>
        </section>

        {/* Section: Signs you need a repair */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-600" />
            Signs Your Water Purifier Needs Repair
          </h2>
          <ul className="flex flex-col gap-2">
            {[
              "No water output or very slow flow from the tap",
              "Water leaking from the unit or under the sink",
              "Purifier not turning on or power indicator not lighting up",
              "Continuous dripping even when the tank is full",
              "Loud humming, buzzing or grinding noise during operation",
              "Water tastes or smells noticeably different than usual",
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
            What's Included in a Professional Repair Visit
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            When you book water purifier repair in Indore with Ayush Home
            Appliances, our technicians follow a structured process to
            diagnose and fix the issue correctly the first time:
          </p>
          <ul className="flex flex-col gap-2">
            {[
              "Complete diagnosis of pump, motor, valves and wiring",
              "Fixing leakage points and replacing worn-out fittings",
              "Repairing or replacing faulty pumps, solenoid valves or SMPS",
              "Clearing clogged filters or tubing causing low flow",
              "Checking and correcting electrical or power-related faults",
              "Final testing to confirm the purifier is working properly",
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
            Why Choose Ayush Home Appliances for Water Purifier Repair in Indore
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            We believe in honest diagnosis, fair pricing and repairs that
            actually last. Whether it's a simple leakage fix or a complex
            motor issue, here's what sets our repair service apart:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            {[
              {
                title: "Doorstep Service",
                desc: "No need to carry your purifier anywhere — we come to you.",
              },
              {
                title: "Genuine Parts",
                desc: "Only quality-tested components used for every repair.",
              },
              {
                title: "Skilled Technicians",
                desc: "Trained professionals who repair all major purifier brands.",
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
                q: "How quickly can I get a repair technician?",
                a: "We offer fast doorstep response across Indore, and in most cases a technician can visit the same day or within 24 hours of booking.",
              },
              {
                q: "How long does a typical repair take?",
                a: "Most common repairs like leakage fixes, filter clogs or minor part replacements are completed within 30 to 60 minutes on the first visit.",
              },
              {
                q: "Do you repair all water purifier brands?",
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