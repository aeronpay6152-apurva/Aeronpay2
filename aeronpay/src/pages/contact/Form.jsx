import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Send,
} from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact-form" className="relative w-full overflow-hidden bg-[#040b1f] px-5 py-[100px] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(55,81,255,0.12),_transparent_42%),radial-gradient(circle_at_right,_rgba(120,49,255,0.16),_transparent_35%)]" />
      <div className="pointer-events-none absolute -bottom-[180px] -left-[120px] h-[360px] w-[420px] rounded-full bg-[#315cff] opacity-15 blur-[85px]" />
      <div className="pointer-events-none absolute -bottom-[180px] -right-[100px] h-[380px] w-[420px] rounded-full bg-[#8b5cf6] opacity-20 blur-[90px]" />

      <div className="relative z-10 mx-auto grid max-w-[1300px] grid-cols-1 gap-[30px] lg:grid-cols-[520px_1fr]">

        {/* =====================================================
            LEFT - LET'S CONNECT
        ====================================================== */}
        <div
          className="
            rounded-[20px]
            border border-white/[0.14]
            bg-white/[0.035]
            backdrop-blur-[14px]
            p-[28px]
            shadow-[0_8px_40px_rgba(0,0,0,0.15)]
          "
        >
          {/* Heading */}
          <h2 className="text-[24px] font-bold tracking-[-0.4px] text-white">
            Let's Connect
          </h2>

          <div className="mt-[11px] h-[3px] w-[36px] rounded-full bg-[#8135ee]" />

          {/* Description */}
          <p className="mt-[18px] max-w-[450px] text-[14px] leading-[1.9] text-[#9b9bad]">
            We're always open to discussing new projects, partnerships, or
            opportunities to be part of your journey.
          </p>

          {/* ================= EMAIL ================= */}
          <div
            className="
              mt-[24px]
              flex
              min-h-[78px]
              items-center
              gap-[16px]
              rounded-[15px]
              border border-white/[0.10]
              bg-white/[0.025]
              backdrop-blur-[8px]
              px-[16px]
              transition-all
              duration-300
              hover:border-[#8135ee]/40
              hover:bg-white/[0.04]
            "
          >
            {/* Icon */}
            <div
              className="
                flex
                h-[45px]
                w-[45px]
                shrink-0
                items-center
                justify-center
                rounded-[11px]
                bg-[#762bea]
                shadow-[0_8px_25px_rgba(118,43,234,0.25)]
              "
            >
              <Mail size={21} strokeWidth={1.8} />
            </div>

            <div>
              <h3 className="text-[14px] font-semibold text-white">
                Email Us
              </h3>

              <p className="mt-[4px] text-[13px] text-[#8e8ea2]">
                support@aeronpay.in
              </p>
            </div>
          </div>

          {/* ================= WHATSAPP ================= */}
          <div
            className="
              mt-[16px]
              flex
              min-h-[78px]
              items-center
              gap-[16px]
              rounded-[15px]
              border border-white/[0.10]
              bg-white/[0.025]
              backdrop-blur-[8px]
              px-[16px]
              transition-all
              duration-300
              hover:border-[#21b5ed]/40
              hover:bg-white/[0.04]
            "
          >
            {/* Icon */}
            <div
              className="
                flex
                h-[45px]
                w-[45px]
                shrink-0
                items-center
                justify-center
                rounded-[11px]
                bg-[#19afe6]
                shadow-[0_8px_25px_rgba(25,175,230,0.20)]
              "
            >
              <Phone size={21} strokeWidth={1.8} />
            </div>

            <div>
              <h3 className="text-[14px] font-semibold text-white">
                Whatsapp Support
              </h3>

              <p className="mt-[4px] text-[13px] text-[#8e8ea2]">
                +91-8062178365
              </p>
            </div>
          </div>

          {/* ================= ADDRESS ================= */}
          <div
            className="
              mt-[16px]
              flex
              min-h-[110px]
              items-center
              gap-[16px]
              rounded-[15px]
              border border-white/[0.10]
              bg-white/[0.025]
              backdrop-blur-[8px]
              px-[16px]
              py-[15px]
              transition-all
              duration-300
              hover:border-[#21cf9b]/40
              hover:bg-white/[0.04]
            "
          >
            {/* Icon */}
            <div
              className="
                flex
                h-[45px]
                w-[45px]
                shrink-0
                items-center
                justify-center
                rounded-[11px]
                bg-[#18c995]
                shadow-[0_8px_25px_rgba(24,201,149,0.18)]
              "
            >
              <MapPin size={21} strokeWidth={1.8} />
            </div>

            <div>
              <h3 className="text-[14px] font-semibold text-white">
                Corporate Address
              </h3>

              <p className="mt-[5px] max-w-[350px] text-[13px] leading-[1.35] text-[#8e8ea2]">
                306, SKD Surya Icon 132 Feet Ring Road, AEC Cross Rd,
                opp. Torrent Power, Naranpura, Ahmedabad, Gujarat 380013
              </p>
            </div>
          </div>

          {/* ================= RESPONSE BOX ================= */}
          <div
            className="
              relative
              mt-[24px]
              min-h-[136px]
              overflow-hidden
              rounded-[15px]
              border border-[#8b4cff]/30
              bg-gradient-to-br
              from-[#8b4cff]/10
              via-[#6931c9]/10
              to-transparent
              px-[24px]
              py-[24px]
            "
          >
            {/* Glow */}
            <div className="absolute -right-[35px] -top-[35px] h-[100px] w-[100px] rounded-full bg-[#8135ee]/10 blur-[30px]" />

            <h3 className="relative text-[16px] font-bold text-white">
              We reply within 24 hours
            </h3>

            <div className="mt-[10px] h-[3px] w-[30px] rounded-full bg-[#8135ee]" />

            <p className="relative mt-[12px] max-w-[330px] text-[13px] leading-[1.7] text-[#9b82d8]">
              Our team is dedicated to providing you with the best support
              possible.
            </p>

            <MessageSquare
              size={34}
              strokeWidth={1.5}
              className="absolute bottom-[25px] right-[25px] text-[#8135ee]"
            />
          </div>
        </div>

        {/* =====================================================
            RIGHT - FORM
        ====================================================== */}
        <div
          className="
            rounded-[20px]
            border border-white/[0.14]
            bg-white/[0.035]
            backdrop-blur-[14px]
            p-[28px]
            shadow-[0_8px_40px_rgba(0,0,0,0.15)]
          "
        >
          {/* Heading */}
          <h2 className="text-[24px] font-bold tracking-[-0.4px] text-white">
            Send Us a Message
          </h2>

          <div className="mt-[11px] h-[3px] w-[36px] rounded-full bg-[#8135ee]" />

          {/* Description */}
          <p className="mt-[18px] text-[14px] text-[#9b9bad]">
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>

          {/* ================= FORM ================= */}
          <form className="mt-[38px]">

            {/* Name */}
            <div>
              <label className="mb-[8px] block text-[13px] font-medium text-[#ddddea]">
                Name <span className="text-[#ff4f70]">*</span>
              </label>

              <input
                type="text"
                placeholder="Enter Your Name"
                className="
                  h-[59px]
                  w-full
                  rounded-[13px]
                  border border-white/[0.18]
                  bg-transparent
                  px-[16px]
                  text-[14px]
                  text-white
                  outline-none
                  placeholder:text-[#77778b]
                  transition-all
                  duration-300
                  focus:border-[#8135ee]
                  focus:bg-white/[0.04]
                  focus:ring-1
                  focus:ring-[#8135ee]/30
                "
              />
            </div>

            {/* Mobile + Email */}
            <div className="mt-[25px] grid grid-cols-1 gap-[30px] md:grid-cols-2">

              {/* Mobile */}
              <div>
                <label className="mb-[8px] block text-[13px] font-medium text-[#ddddea]">
                  Mobile Number <span className="text-[#ff4f70]">*</span>
                </label>

                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="
                    h-[59px]
                    w-full
                    rounded-[13px]
                    border border-white/[0.18]
                    bg-transparent
                    px-[16px]
                    text-[14px]
                    text-white
                    outline-none
                    placeholder:text-[#77778b]
                    transition-all
                    duration-300
                    focus:border-[#8135ee]
                    focus:bg-white/[0.04]
                    focus:ring-1
                    focus:ring-[#8135ee]/30
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-[8px] block text-[13px] font-medium text-[#ddddea]">
                  Email <span className="text-[#ff4f70]">*</span>
                </label>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="
                    h-[59px]
                    w-full
                    rounded-[13px]
                    border border-white/[0.18]
                    bg-transparent
                    px-[16px]
                    text-[14px]
                    text-white
                    outline-none
                    placeholder:text-[#77778b]
                    transition-all
                    duration-300
                    focus:border-[#8135ee]
                    focus:bg-white/[0.04]
                    focus:ring-1
                    focus:ring-[#8135ee]/30
                  "
                />
              </div>
            </div>

            {/* Query */}
            <div className="mt-[25px]">
              <label className="mb-[8px] block text-[13px] font-medium text-[#ddddea]">
                Enter Your Query <span className="text-[#ff4f70]">*</span>
              </label>

              <textarea
                rows={5}
                placeholder="Your Message"
                className="
                  w-full
                  resize-none
                  rounded-[13px]
                  border border-white/[0.18]
                  bg-transparent
                  px-[16px]
                  py-[16px]
                  text-[14px]
                  text-white
                  outline-none
                  placeholder:text-[#77778b]
                  transition-all
                  duration-300
                  focus:border-[#8135ee]
                  focus:bg-white/[0.04]
                  focus:ring-1
                  focus:ring-[#8135ee]/30
                "
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="
                mt-[24px]
                flex
                h-[55px]
                w-full
                items-center
                justify-center
                gap-[10px]
                rounded-[12px]
                bg-gradient-to-r
                from-[#7124dc]
                to-[#8b3df1]
                text-[15px]
                font-semibold
                text-white
                shadow-[0_10px_30px_rgba(119,43,226,0.25)]
                transition-all
                duration-300
                hover:-translate-y-[1px]
                hover:shadow-[0_14px_35px_rgba(119,43,226,0.35)]
              "
            >
              <Send size={19} strokeWidth={1.8} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;