import React from "react";
import ContactForm from "./Form";
import ContactMap from "./Map";
import FAQ from "./FAQ";
import ContactCTA from "./ContactCTA";
import SiteFooter from "../Components/Footer";

const ContactHero = () => {
  return (
    <section className="relative h-[430px] w-full overflow-hidden bg-[#040b1f] text-white sm:h-[502px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(55,81,255,0.12),_transparent_42%),radial-gradient(circle_at_right,_rgba(120,49,255,0.16),_transparent_35%)]" />

      {/* Left Bottom Glow */}
      <div className="absolute -bottom-[150px] -left-[90px] h-[330px] w-[360px] rounded-full bg-[#315cff] opacity-20 blur-[75px]" />

      {/* Right Bottom Glow */}
      <div className="absolute -bottom-[150px] -right-[80px] h-[350px] w-[400px] rounded-full bg-[#8b5cf6] opacity-25 blur-[80px]" />

      {/* Top Left Spark */}
      <div className="absolute left-[121px] top-[39px] h-[20px] w-[20px]">
        <span className="absolute left-1/2 top-0 h-[6px] w-[1px] -translate-x-1/2 bg-[#718cff]" />
        <span className="absolute bottom-0 left-1/2 h-[6px] w-[1px] -translate-x-1/2 bg-[#718cff]" />
        <span className="absolute left-0 top-1/2 h-[1px] w-[6px] -translate-y-1/2 bg-[#718cff]" />
        <span className="absolute right-0 top-1/2 h-[1px] w-[6px] -translate-y-1/2 bg-[#718cff]" />

        <span className="absolute left-[3px] top-[3px] h-[1px] w-[5px] rotate-45 bg-[#718cff]" />
        <span className="absolute right-[3px] top-[3px] h-[1px] w-[5px] -rotate-45 bg-[#718cff]" />
        <span className="absolute bottom-[3px] left-[3px] h-[1px] w-[5px] -rotate-45 bg-[#718cff]" />
        <span className="absolute bottom-[3px] right-[3px] h-[1px] w-[5px] rotate-45 bg-[#718cff]" />
      </div>

      {/* Left Dots */}
      <div className="absolute left-[48px] top-[220px] grid grid-cols-7 gap-[9px] opacity-60">
        {Array.from({ length: 35 }).map((_, index) => (
          <span
            key={index}
            className="h-[3px] w-[3px] rounded-full bg-[#718cff]"
          />
        ))}
      </div>

      {/* Right Dots */}
      <div className="absolute right-[48px] top-[220px] grid grid-cols-7 gap-[9px] opacity-60">
        {Array.from({ length: 35 }).map((_, index) => (
          <span
            key={index}
            className="h-[3px] w-[3px] rounded-full bg-[#718cff]"
          />
        ))}
      </div>

      {/* Bottom Left Plus */}
      <div className="absolute bottom-[40px] left-[160px] h-[18px] w-[18px]">
        <span className="absolute left-1/2 top-0 h-full w-[1.5px] -translate-x-1/2 bg-[#718cff]" />
        <span className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-[#718cff]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1000px] flex-col items-center px-5 pt-[82px] text-center sm:px-8 sm:pt-[108px]">

        {/* Badge */}
        <div className="mb-[18px] flex h-[36px] items-center gap-[9px] rounded-full border border-[#2a3d70] bg-[#0d1735]/90 px-[17px] shadow-[0_0_25px_rgba(99,102,241,0.18)] backdrop-blur-sm">
          <span className="h-[6px] w-[6px] rounded-full bg-[#8b5cf6] shadow-[0_0_10px_#8b5cf6]" />

          <span className="text-[12px] font-semibold tracking-[1px] text-[#a9c4ff]">
            REACH OUT TODAY
          </span>
        </div>

       
        <h1 className="w-full text-2xl font-semibold leading-[0.96] tracking-[-0.06em] text-[#dbeafe] sm:text-4xl lg:text-[4.1rem]">
              <span className="mb-3 block whitespace-normal lg:whitespace-nowrap bg-gradient-to-r from-[#dfe8ff] via-[#a9c4ff] to-[#6d7cfb] bg-clip-text text-transparent">
               Every Great Partnership Starts
              </span>
              <span className="block">
                  <span className="bg-gradient-to-r from-[#3b82f6] via-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">with a Message</span>
              </span>
            </h1>
        {/* Description */}
        <p className="mt-[32px] max-w-[680px] text-[16px] leading-[1.8] text-[#a9b7d7]">
          Tell us about your goals, challenges, or ideas. We'll connect you with
          <br className="hidden sm:block" />
          the right experts and help you find the best path forward.
        </p>

      </div>
    </section>
  );
};

export default function Contact() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <ContactMap />
      <FAQ />
      <ContactCTA />
      <SiteFooter />
    </main>
  );
}