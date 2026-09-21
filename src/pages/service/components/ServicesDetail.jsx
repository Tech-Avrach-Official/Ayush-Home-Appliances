import React from "react";
import { CheckCircle2 } from "lucide-react";

function CheckItem({ text }) {
  return (
    <li className="flex items-center gap-2.5 text-[13px] md:text-sm text-gray-600 font-medium">
      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
      <span>{text}</span>
    </li>
  );
}

export default function ServicesDetail() {
  return (
    <section className="w-full bg-white py-14 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-20 md:gap-24">

        {/* =====================================================
            1. CHIMNEY SERVICE
        ====================================================== */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Image */}
          <div className="w-full aspect-[5/3] rounded-2xl overflow-hidden shadow-sm">
            <img
              src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1788780774/1422eea5-dc1d-4664-ad68-0faa329e0e29_svbbsn.png"
              alt="Chimney repair and servicing"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-3 md:gap-4">
            <p className="text-[10px] md:text-xs font-extrabold tracking-[0.18em] text-blue-600 uppercase">
              Chimney Services
            </p>

            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight text-gray-900">
              Chimney Repair &amp; Servicing
            </h2>

            <p className="text-sm md:text-[15px] leading-6 text-gray-500 max-w-lg">
              Keep your kitchen fresh and smoke-free with our professional
              chimney services. We ensure optimal performance and longer life
              for your appliance.
            </p>

            <ul className="flex flex-col gap-2 mt-1">
              <CheckItem text="Chimney Repair & Servicing" />
              <CheckItem text="Deep Cleaning" />
              <CheckItem text="New Installation" />
              <CheckItem text="Spare Parts Replacement" />
              <CheckItem text="Inspection & Diagnosis" />
            </ul>
          </div>
        </div>

        {/* =====================================================
            2. RO SERVICE
        ====================================================== */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Content */}
          <div className="flex flex-col gap-3 md:gap-4 md:order-1 order-2">
            <p className="text-[10px] md:text-xs font-extrabold tracking-[0.18em] text-blue-600 uppercase">
              RO Services
            </p>

            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight text-gray-900">
              RO Repair &amp; Servicing
            </h2>

            <p className="text-sm md:text-[15px] leading-6 text-gray-500 max-w-lg">
              Get clean and safe drinking water with our expert RO services.
              We handle all major brands and provide complete care for your
              RO system.
            </p>

            <ul className="flex flex-col gap-2 mt-1">
              <CheckItem text="RO Repair & Servicing" />
              <CheckItem text="Filter Replacement" />
              <CheckItem text="RO Cleaning" />
              <CheckItem text="Membrane / Parts Replacement" />
              <CheckItem text="New Installation" />
            </ul>
          </div>

          {/* Image */}
          <div className="w-full aspect-[5/3] rounded-2xl overflow-hidden shadow-sm md:order-2 order-1">
            <img
              src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1788780811/052be12a-6697-46db-9691-7b76642d15c9_k1g3yl.png"
              alt="RO repair and servicing"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* =====================================================
            3. INSTALLATION & MAINTENANCE
        ====================================================== */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Image */}
          <div className="w-full aspect-[5/3] rounded-2xl overflow-hidden shadow-sm">
            <img
              src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1788781101/bb52d00b-85c9-4764-b4f7-69dd5c7c57c5_hp9nqu.png"
              alt="Appliance installation and maintenance"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-3 md:gap-4">
            <p className="text-[10px] md:text-xs font-extrabold tracking-[0.18em] text-blue-600 uppercase">
              Installation &amp; Maintenance
            </p>

            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight text-gray-900">
              Appliance Installation &amp; Maintenance
            </h2>

            <p className="text-sm md:text-[15px] leading-6 text-gray-500 max-w-lg">
              Professional installation and regular maintenance to keep your
              appliances running like new. We ensure safety, efficiency and
              long-lasting performance.
            </p>

            {/* Two columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">

              {/* Installation */}
              <div>
                <h4 className="text-sm font-extrabold text-gray-900 mb-3">
                  Installation Services
                </h4>

                <ul className="flex flex-col gap-2">
                  <CheckItem text="New Appliance Installation" />
                  <CheckItem text="Professional Setup" />
                  <CheckItem text="Inspection & Diagnosis" />
                  <CheckItem text="All Major Brands" />
                </ul>
              </div>

              {/* Maintenance */}
              <div>
                <h4 className="text-sm font-extrabold text-gray-900 mb-3">
                  Maintenance Services
                </h4>

                <ul className="flex flex-col gap-2">
                  <CheckItem text="Regular Maintenance" />
                  <CheckItem text="Performance Check" />
                  <CheckItem text="Parts Replacement" />
                  <CheckItem text="Preventive Service" />
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* =====================================================
            4. WATER PURIFIER
        ====================================================== */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Content */}
          <div className="flex flex-col gap-3 md:gap-4 md:order-1 order-2">
            <p className="text-[10px] md:text-xs font-extrabold tracking-[0.18em] text-blue-600 uppercase">
              Water Purifier Services
            </p>

            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight text-gray-900">
              Water Purifier Repair &amp; Servicing
            </h2>

            <p className="text-sm md:text-[15px] leading-6 text-gray-500 max-w-lg">
              Ensure pure and healthy water for your family with our expert
              water purifier services. We repair and service all major brands.
            </p>

            <ul className="flex flex-col gap-2 mt-1">
              <CheckItem text="Water Purifier Repair" />
              <CheckItem text="Filter Replacement" />
              <CheckItem text="UV Replacement" />
              <CheckItem text="New Installation" />
              <CheckItem text="Complete Servicing" />
            </ul>
          </div>

          {/* Image */}
          <div className="relative md:order-2 order-1">
            <div className="w-full aspect-[5/3] rounded-2xl overflow-hidden shadow-sm">
              <img
                src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1788781194/eede7a9a-ee88-4a3b-a303-4b56dd44f593_f6ngqp.png"
                alt="Water purifier repair and servicing"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Handwritten note */}
           
          </div>

        </div>

      </div>
    </section>
  );
}