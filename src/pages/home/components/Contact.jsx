import React, { useState } from "react";
import {
  User,
  Phone,
  Wrench,
  FileText,
  ArrowRight,
  ChevronDown,
  Check,
  AlertCircle,
} from "lucide-react";

const services = [
  "Chimney Service",
  "RO Service",
  "Installation & Maintenance",
  "Water Purifier",
  "Other",
];

const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbzrzbVM6RAg-aRF_nV94HKvq2uUwE9ArxMQha8dMU6dAdmX18hSGnL_T_DGBAIxBKeb/exec";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleServiceSelect = (service) => {
    setForm((prev) => ({ ...prev, service }));
    setDropdownOpen(false);
    if (errors.service) {
      setErrors((prev) => ({ ...prev, service: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name";
    } else if (form.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    } else if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!form.service) {
      newErrors.service = "Please select a service";
    }

    if (!form.message.trim()) {
      newErrors.message = "Please describe your requirement";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Please add a few more details (min 10 characters)";
    }

    return newErrors;
  };

  const handleSubmit = async () => {
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setSubmitting(true);
    try {
      await fetch(SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(form),
      });

      setSubmitted(true);
      setForm({ name: "", phone: "", service: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      console.error("Submission failed:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-bold tracking-widest text-blue-600 mb-2 relative inline-block">
            CONTACT US
            <span className="block w-8 h-0.5 bg-blue-600 mx-auto mt-2" />
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Have a question or need a service? Fill out the form and we'll
            get back to you soon.
          </p>
        </div>

        {/* Map + Form */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 min-h-[420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d336.87279004227776!2d75.84196370642438!3d22.68484019463775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd175de85f65%3A0x9bb13aea2f91e82d!2sAyush%20Home%20Appliances%2C%20RO%20Repair%20Service%20in%20Indore!5e0!3m2!1sen!2sin!4v1789460206773!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
            ></iframe>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-gray-200 p-6 md:p-8">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
              Send Us a Message
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Fill out the form below and we'll get back to you shortly.
            </p>

            {submitted && (
              <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-sm font-medium rounded-xl px-4 py-3 mb-4">
                <Check className="w-4 h-4 shrink-0" />
                Thanks! We've received your request.
              </div>
            )}

            <div className="flex flex-col gap-4">
              {/* Name + Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <div
                    className={`flex items-center gap-3 border rounded-xl px-4 py-3 transition-colors ${
                      errors.name
                        ? "border-red-400 bg-red-50"
                        : "border-gray-200 focus-within:border-blue-500"
                    }`}
                  >
                    <User
                      className={`w-4 h-4 shrink-0 ${
                        errors.name ? "text-red-500" : "text-blue-950"
                      }`}
                    />
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange("name")}
                      className="w-full text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
                    />
                  </div>
                  {errors.name && (
                    <p className="flex items-center gap-1 text-xs text-red-500 mt-1.5 ml-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <div
                    className={`flex items-center gap-3 border rounded-xl px-4 py-3 transition-colors ${
                      errors.phone
                        ? "border-red-400 bg-red-50"
                        : "border-gray-200 focus-within:border-blue-500"
                    }`}
                  >
                    <Phone
                      className={`w-4 h-4 shrink-0 ${
                        errors.phone ? "text-red-500" : "text-blue-950"
                      }`}
                    />
                    <input
                      type="tel"
                      placeholder="Your Contact Number"
                      value={form.phone}
                      onChange={handleChange("phone")}
                      maxLength={10}
                      className="w-full text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
                    />
                  </div>
                  {errors.phone && (
                    <p className="flex items-center gap-1 text-xs text-red-500 mt-1.5 ml-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Custom Service Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className={`w-full flex items-center gap-3 border rounded-xl px-4 py-3 transition-colors ${
                    errors.service
                      ? "border-red-400 bg-red-50"
                      : dropdownOpen
                      ? "border-blue-500"
                      : "border-gray-200"
                  }`}
                >
                  <Wrench
                    className={`w-4 h-4 shrink-0 ${
                      errors.service ? "text-red-500" : "text-blue-950"
                    }`}
                  />
                  <span
                    className={`w-full text-left text-sm font-semibold ${
                      form.service ? "text-gray-900" : "text-gray-400 font-normal"
                    }`}
                  >
                    {form.service || "Select Service"}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {dropdownOpen && (
                  <div className="absolute z-10 top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden py-1">
                    {services.map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => handleServiceSelect(s)}
                        className={`w-full flex items-center justify-between text-left text-sm px-4 py-2.5 transition-colors ${
                          form.service === s
                            ? "bg-blue-600 text-white font-semibold"
                            : "text-gray-700 hover:bg-blue-50"
                        }`}
                      >
                        {s}
                        {form.service === s && <Check className="w-4 h-4" />}
                      </button>
                    ))}
                  </div>
                )}

                {errors.service && (
                  <p className="flex items-center gap-1 text-xs text-red-500 mt-1.5 ml-1">
                    <AlertCircle className="w-3 h-3" /> {errors.service}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <div
                  className={`flex items-start gap-3 border rounded-xl px-4 py-3 transition-colors ${
                    errors.message
                      ? "border-red-400 bg-red-50"
                      : "border-gray-200 focus-within:border-blue-500"
                  }`}
                >
                  <FileText
                    className={`w-4 h-4 shrink-0 mt-1 ${
                      errors.message ? "text-red-500" : "text-blue-950"
                    }`}
                  />
                  <textarea
                    placeholder="Describe your issue or service requirement"
                    value={form.message}
                    onChange={handleChange("message")}
                    rows={4}
                    className="w-full text-sm text-gray-700 placeholder-gray-400 outline-none resize-none bg-transparent"
                  />
                </div>
                {errors.message && (
                  <p className="flex items-center gap-1 text-xs text-red-500 mt-1.5 ml-1">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={submitting}
                className={`flex items-center cursor-pointer justify-center gap-2 transition-colors text-white font-semibold text-base px-6 py-4 rounded-lg mt-2 ${
                  submitting
                    ? "bg-blue-900 cursor-not-allowed"
                    : "bg-blue-900 hover:bg-blue-800"
                }`}
              >
                {submitting ? "Sending..." : "Submit Request"}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}