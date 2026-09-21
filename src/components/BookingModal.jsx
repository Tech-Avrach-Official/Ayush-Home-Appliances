import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  User,
  Phone,
  Wrench,
  FileText,
  Send,
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

export default function BookingModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleClose = () => {
    setForm({ name: "", phone: "", service: "", message: "" });
    setErrors({});
    setDropdownOpen(false);
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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

      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 1500);
    } catch (err) {
      console.error("Booking submission failed:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            px-4
            bg-blue-950/45
            backdrop-blur-sm
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={handleClose}
        >
          {/* Modal */}
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.92, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="
              relative
              w-full
              max-w-md
              bg-white
              rounded-3xl
              shadow-2xl
              overflow-hidden
              max-h-[90vh]
              overflow-y-auto
            "
          >
            {/* Top Blue Area */}
            <div className="relative bg-blue-950 px-6 md:px-8 pt-7 pb-8">
              <div className="
                absolute
                -right-10
                -top-10
                w-32
                h-32
                rounded-full
                bg-blue-600/20
              " />

              {/* Close */}
              <button
                onClick={handleClose}
                aria-label="Close"
                className="
                  absolute
                  top-4
                  right-4
                  w-9
                  h-9
                  cursor-pointer
                  rounded-full
                  bg-white/10
                  hover:bg-white/20
                  flex items-center justify-center
                  transition-colors
                  z-10
                "
              >
                <X className="w-4 h-4 text-white" />
              </button>

              <p className="
                relative
                text-[11px]
                font-bold
                tracking-[0.2em]
                text-blue-300
                mb-1
              ">
                AYUSH HOME APPLIANCES
              </p>

              <h3 className="
                relative
                text-2xl
                md:text-3xl
                font-extrabold
                text-white
                leading-tight
              ">
                Book a Service
              </h3>

              <p className="
                relative
                text-blue-100
                text-sm
                mt-2
                max-w-sm
              ">
                Tell us what you need and our team will get back to you
                shortly.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-6 md:px-8 py-7">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
                    <Check className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-gray-800 font-semibold text-sm">
                    Request received! We'll call you shortly.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">
                      Your Name
                    </label>
                    <div
                      className={`group flex items-center gap-3 border rounded-xl px-4 py-3 bg-gray-50 focus-within:bg-white transition-all ${
                        errors.name
                          ? "border-red-400 bg-red-50"
                          : "border-gray-200 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-50"
                      }`}
                    >
                      <User
                        className={`w-4 h-4 shrink-0 transition-colors ${
                          errors.name
                            ? "text-red-500"
                            : "text-gray-400 group-focus-within:text-blue-600"
                        }`}
                      />
                      <input
                        type="text"
                        placeholder="Enter your name"
                        value={form.name}
                        onChange={handleChange("name")}
                        className="w-full bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400"
                      />
                    </div>
                    {errors.name && (
                      <p className="flex items-center gap-1 text-xs text-red-500 mt-1.5 ml-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Contact Number */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">
                      Contact Number
                    </label>
                    <div
                      className={`group flex items-center gap-3 border rounded-xl px-4 py-3 bg-gray-50 focus-within:bg-white transition-all ${
                        errors.phone
                          ? "border-red-400 bg-red-50"
                          : "border-gray-200 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-50"
                      }`}
                    >
                      <Phone
                        className={`w-4 h-4 shrink-0 transition-colors ${
                          errors.phone
                            ? "text-red-500"
                            : "text-gray-400 group-focus-within:text-blue-600"
                        }`}
                      />
                      <input
                        type="tel"
                        placeholder="Enter contact number"
                        value={form.phone}
                        onChange={handleChange("phone")}
                        maxLength={10}
                        className="w-full bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400"
                      />
                    </div>
                    {errors.phone && (
                      <p className="flex items-center gap-1 text-xs text-red-500 mt-1.5 ml-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">
                      Select Service
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setDropdownOpen((prev) => !prev)}
                        className={`w-full flex items-center gap-3 border rounded-xl px-4 py-3 bg-gray-50 transition-all ${
                          errors.service
                            ? "border-red-400 bg-red-50"
                            : dropdownOpen
                            ? "border-blue-500 bg-white ring-4 ring-blue-50"
                            : "border-gray-200"
                        }`}
                      >
                        <Wrench
                          className={`w-4 h-4 shrink-0 ${
                            errors.service ? "text-red-500" : "text-gray-400"
                          }`}
                        />
                        <span
                          className={`w-full text-left text-sm ${
                            form.service
                              ? "text-gray-800 font-medium"
                              : "text-gray-400"
                          }`}
                        >
                          {form.service || "Choose a service"}
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
                              {form.service === s && (
                                <Check className="w-4 h-4" />
                              )}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    {errors.service && (
                      <p className="flex items-center gap-1 text-xs text-red-500 mt-1.5 ml-1">
                        <AlertCircle className="w-3 h-3" /> {errors.service}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">
                      Service Requirement
                    </label>
                    <div
                      className={`group flex items-start gap-3 border rounded-xl px-4 py-3 bg-gray-50 focus-within:bg-white transition-all ${
                        errors.message
                          ? "border-red-400 bg-red-50"
                          : "border-gray-200 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-50"
                      }`}
                    >
                      <FileText
                        className={`w-4 h-4 mt-0.5 shrink-0 transition-colors ${
                          errors.message
                            ? "text-red-500"
                            : "text-gray-400 group-focus-within:text-blue-600"
                        }`}
                      />
                      <textarea
                        placeholder="Describe your issue or service requirement"
                        value={form.message}
                        onChange={handleChange("message")}
                        rows={3}
                        className="w-full bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400 resize-none"
                      />
                    </div>
                    {errors.message && (
                      <p className="flex items-center gap-1 text-xs text-red-500 mt-1.5 ml-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={{ scale: submitting ? 1 : 1.02 }}
                    whileTap={{ scale: submitting ? 1 : 0.98 }}
                    className={`
                      w-full flex items-center justify-center gap-2
                      text-white font-bold text-sm px-6 py-3.5 rounded-xl
                      transition-colors shadow-lg shadow-blue-600/20 mt-1
                      ${
                        submitting
                          ? "bg-blue-400 cursor-not-allowed"
                          : "bg-blue-600 hover:bg-blue-700"
                      }
                    `}
                  >
                    {submitting ? "Sending..." : "Submit Request"}
                    <Send className="w-4 h-4" />
                  </motion.button>
                </div>
              )}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}