import React from "react";
import {
  Calendar,
  Clock,
  Tag,
  CheckCircle2,
  Wrench,
  Wind,
  ShieldCheck,
  Phone,
  ArrowRight,
} from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import BlogCta from "./BlogCta";

export default function Blog7() {
  return (
   <>
   <Navbar/>
    <article className="w-full bg-white">
      {/* Featured Image */}
      <div className="w-full h-64 md:h-[450px] relative">
        <img
          src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1788854701/19b71d8b-ed4c-4c04-87c9-a21c98e41655_hxkyrd.png"
          alt="Technician cleaning a kitchen chimney filter in Indore"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-10 md:py-14">
        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-1.5">
            <Tag className="w-4 h-4 text-blue-600" />
            Chimney Services
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
          Kitchen Chimney Cleaning in Indore: Why Deep Cleaning Makes All the Difference
        </h1>

        {/* Intro */}
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
          Even a well-functioning chimney can lose its efficiency if it
          isn't cleaned regularly. If you're looking for thorough kitchen
          chimney cleaning in Indore, this guide covers why deep cleaning
          matters, what a professional cleaning visit includes, and how
          Ayush Home Appliances keeps your chimney grease-free and running
          smoothly.
        </p>

        {/* Section: Why cleaning matters */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Wind className="w-5 h-5 text-blue-600" />
            Why Regular Chimney Cleaning Matters
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Every time you cook, your chimney's filters and internal parts
            trap oil, grease and smoke particles. Over weeks of daily
            cooking, this buildup thickens and starts blocking airflow,
            forcing the motor to work harder while suction keeps dropping.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Regular kitchen chimney cleaning in Indore removes this buildup
            before it affects performance, keeping your kitchen fresh,
            reducing fire risk, and helping the appliance last longer.
          </p>
        </section>

        {/* Section: Signs it needs cleaning */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-600" />
            Signs Your Chimney Needs Cleaning
          </h2>
          <ul className="flex flex-col gap-2">
            {[
              "Visible layer of grease or grime on the filters",
              "Smoke and cooking smells lingering longer than usual",
              "Noticeably weaker suction compared to when it was new",
              "Oily residue on nearby cabinets, walls or the chimney body",
              "It's been more than 3 months since the last deep clean",
              "Filters look dark, sticky or clogged to the touch",
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
            What's Included in a Professional Chimney Cleaning
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            When you book kitchen chimney cleaning in Indore with Ayush Home
            Appliances, our technicians follow a detailed process to remove
            grease from every part of the unit:
          </p>
          <ul className="flex flex-col gap-2">
            {[
              "Removing and deep-cleaning baffle or mesh filters",
              "Degreasing the internal blower, blades and casing",
              "Cleaning the exterior body and glass panel, if applicable",
              "Clearing grease buildup from ducting where accessible",
              "Wiping down control panels and light fittings",
              "Reassembling and testing suction after cleaning",
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
            Why Choose Ayush Home Appliances for Kitchen Chimney Cleaning in Indore
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            We believe a proper deep clean makes a real difference to how
            your chimney performs. Whether it's routine maintenance or a
            long-overdue clean-up, here's what sets our cleaning service
            apart:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            {[
              {
                title: "Doorstep Service",
                desc: "No need to remove the chimney — we clean it right at your home.",
              },
              {
                title: "Safe Cleaning Agents",
                desc: "Effective degreasing solutions that are safe for your kitchen.",
              },
              {
                title: "Skilled Technicians",
                desc: "Trained professionals who clean all major chimney brands.",
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
                q: "How often should I get my chimney deep cleaned?",
                a: "For regular home cooking, a deep clean every 3 months is recommended. Kitchens with heavy daily cooking may benefit from more frequent cleaning.",
              },
              {
                q: "How long does a typical cleaning visit take?",
                a: "A standard chimney cleaning usually takes 30 to 45 minutes, depending on how much grease buildup has accumulated.",
              },
              {
                q: "Do you clean all chimney brands?",
                a: "Yes, our technicians are experienced with all major chimney brands available in Indore, including Faber, Elica, Kaff and more.",
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