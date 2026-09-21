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

export default function Blog5() {
  return (
   <>
   <Navbar/>
    <article className="w-full bg-white">
      {/* Featured Image */}
      <div className="w-full h-64 md:h-[450px] relative">
        <img
          src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1788854297/280917d8-49b1-4f96-89cd-a94d64f28ab0_d8jj0u.png"
          alt="Technician servicing a kitchen chimney in Indore"
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
          Kitchen Chimney Service in Indore: Complete Guide to Better Ventilation
        </h1>

        {/* Intro */}
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
          A smoke-free, grease-free kitchen starts with a well-serviced
          chimney. If you're looking for reliable kitchen chimney service in
          Indore, this guide covers why regular servicing matters, what a
          professional visit includes, and how Ayush Home Appliances keeps
          your chimney running at full suction power.
        </p>

        {/* Section: Why service matters */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Wind className="w-5 h-5 text-blue-600" />
            Why Regular Chimney Service Matters
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Your kitchen chimney works hard every day, pulling in smoke,
            steam and oily fumes while cooking. Over time, grease builds up
            on the filters and internal blades, reducing suction power and
            making the motor work harder than it should. Left unserviced,
            this buildup can lead to poor ventilation, unpleasant odors and
            even motor damage.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Routine kitchen chimney service in Indore keeps your kitchen
            fresh, extends the life of the appliance, and helps it run
            quietly and efficiently.
          </p>
        </section>

        {/* Section: Signs it needs service */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-600" />
            Signs Your Chimney Needs Servicing
          </h2>
          <ul className="flex flex-col gap-2">
            {[
              "Reduced suction — smoke and fumes lingering in the kitchen",
              "Visible grease buildup on filters or the chimney body",
              "Unusual noise or vibration while the chimney is running",
              "Persistent oily smell even after cooking has stopped",
              "It's been more than 3–6 months since the last cleaning",
              "Chimney feels hot or the motor sounds strained",
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
            What's Included in a Professional Chimney Service
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            When you book kitchen chimney service in Indore with Ayush Home
            Appliances, our technicians follow a thorough process to restore
            your chimney's performance:
          </p>
          <ul className="flex flex-col gap-2">
            {[
              "Deep cleaning of baffle or mesh filters to remove grease",
              "Cleaning internal blades, motor housing and ducting",
              "Checking suction power and airflow performance",
              "Inspecting and tightening electrical connections",
              "Lubricating moving parts to reduce noise and friction",
              "Final performance check before handover",
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
            Why Choose Ayush Home Appliances for Kitchen Chimney Service in Indore
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            We believe in thorough cleaning, honest pricing and technicians
            who treat your kitchen appliances with care. Whether it's a
            routine service or a deep clean, here's what sets our chimney
            service apart:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            {[
              {
                title: "Doorstep Service",
                desc: "No need to remove the chimney — we service it right at your home.",
              },
              {
                title: "Genuine Parts",
                desc: "Only quality-tested filters and components are used.",
              },
              {
                title: "Skilled Technicians",
                desc: "Trained professionals who service all major chimney brands.",
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
                q: "How often should I get my kitchen chimney serviced?",
                a: "For regular home cooking, chimney service every 3 to 6 months is recommended. Kitchens with heavy daily cooking may need more frequent servicing.",
              },
              {
                q: "How long does a typical chimney service take?",
                a: "A standard service visit usually takes 30 to 45 minutes, depending on the amount of grease buildup and the chimney model.",
              },
              {
                q: "Do you service all chimney brands?",
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