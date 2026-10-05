import React from "react";
import { useNavigate } from "react-router-dom";

const ContactCTA = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact#contact-form");

    window.setTimeout(() => {
      document.getElementById("contact-form")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#040b1f] px-5 py-20 sm:px-8 md:px-10 lg:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(55,81,255,0.12),_transparent_42%),radial-gradient(circle_at_right,_rgba(120,49,255,0.16),_transparent_35%)]" />
      <div className="pointer-events-none absolute -bottom-[180px] -left-[120px] h-[360px] w-[420px] rounded-full bg-[#315cff] opacity-15 blur-[85px]" />
      <div className="pointer-events-none absolute -bottom-[180px] -right-[100px] h-[380px] w-[420px] rounded-full bg-[#8b5cf6] opacity-20 blur-[90px]" />

      <div className="relative z-10">
      <div className="mx-auto max-w-[900px] rounded-[20px] border border-[#e3e8ef] bg-[#f7faff] px-6 py-12 text-center shadow-[0_8px_30px_rgba(31,56,88,0.05)] sm:px-10">
        <h2 className="text-4xl font-semibold text-[#071b35] sm:text-4xl">
           
            <span className="bg-gradient-to-r from-[#3b82f6] via-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">Still have questions?</span>

        </h2>

        <p className="mx-auto mt-4 max-w-[680px] text-[15px] leading-[1.8] text-[#40546f] sm:text-[17px]">
          Can&apos;t find the answer you&apos;re looking for? Our support team is here
          to help and typically responds within 24 hours.
        </p>

        <button
          type="button"
          onClick={handleContactClick}
          className="mt-7 inline-flex items-center justify-center rounded-[10px] bg-gradient-to-r from-[#3b82f6] via-[#6366f1] to-[#a855f7] px-6 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90"
        >
          Contact Us
        </button>
      </div>
      </div>
    </section>
  );
};

export default ContactCTA;