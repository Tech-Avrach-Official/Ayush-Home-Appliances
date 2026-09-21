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

export default function Blog6() {
  return (
   <>
   <Navbar/>
    <article className="w-full bg-white">
      {/* Featured Image */}
      <div className="w-full h-64 md:h-[450px] relative">
        <img
          src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1788854511/a8a9ff23-7880-4cab-b3d3-a703592d486a_amh0dg.png"
          alt="Technician repairing a kitchen chimney in Indore"
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
          Kitchen Chimney Repair in Indore: Common Issues and Trusted Fixes
        </h1>

        {/* Intro */}
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
          A chimney that isn't working properly can quickly turn your
          kitchen into a smoky, uncomfortable space. If you're searching for
          reliable kitchen chimney repair in Indore, this guide covers the
          most common problems, what a repair visit typically involves, and
          how Ayush Home Appliances gets your chimney back to full suction
          power.
        </p>

        {/* Section: Common problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Wind className="w-5 h-5 text-blue-600" />
            Common Kitchen Chimney Problems We Fix
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Chimneys go through daily exposure to heat, smoke and grease,
            which can lead to motor strain, electrical faults and reduced
            suction over time. Some issues are simple, like a clogged
            filter, while others involve the motor, wiring or control panel.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Ignoring early warning signs like weak suction or unusual noise
            often leads to bigger repairs later — which is why timely
            kitchen chimney repair in Indore is always worth it.
          </p>
        </section>

        {/* Section: Signs you need a repair */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-600" />
            Signs Your Chimney Needs Repair
          </h2>
          <ul className="flex flex-col gap-2">
            {[
              "Chimney not turning on or no response from the control panel",
              "Very weak or no suction even with filters clean",
              "Loud grinding, rattling or buzzing noise from the motor",
              "Chimney lights not working while the motor still runs",
              "Burning smell or the unit overheating during use",
              "Buttons or touch controls not responding properly",
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
            When you book kitchen chimney repair in Indore with Ayush Home
            Appliances, our technicians follow a structured process to
            diagnose and fix the issue correctly the first time:
          </p>
          <ul className="flex flex-col gap-2">
            {[
              "Complete diagnosis of motor, capacitor and wiring",
              "Repairing or replacing faulty motors and capacitors",
              "Fixing electrical faults in the control panel or switches",
              "Clearing blockages in ducting affecting suction",
              "Repairing or replacing chimney lights and indicators",
              "Final testing to confirm suction and overall performance",
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
            Why Choose Ayush Home Appliances for Kitchen Chimney Repair in Indore
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            We believe in honest diagnosis, fair pricing and repairs that
            actually last. Whether it's a simple wiring fix or a full motor
            replacement, here's what sets our repair service apart:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            {[
              {
                title: "Doorstep Service",
                desc: "No need to remove the chimney — we repair it right at your home.",
              },
              {
                title: "Genuine Parts",
                desc: "Only quality-tested motors and components used for every repair.",
              },
              {
                title: "Skilled Technicians",
                desc: "Trained professionals who repair all major chimney brands.",
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
                q: "How long does a typical chimney repair take?",
                a: "Most common repairs like wiring fixes, light replacements or capacitor issues are completed within 30 to 60 minutes on the first visit.",
              },
              {
                q: "Do you repair all chimney brands?",
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