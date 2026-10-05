import React from "react";
import { Link } from "react-router-dom";
import footerIndiaMonuments from "../../assets/images/footer-india-monuments.webp";
import logoDark from "../../assets/images/logo-dark.svg";
import {
  ChevronRight,
  ShieldCheck,
  Building2,
  LockKeyhole,
  ArrowUp,
} from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const SiteFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const companyLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-us/" },
    { label: "Careers", href: "/careers/", hiring: true },
    { label: "Contact Us", href: "/contact#contact-form" },
  ];

  const resourceLinks = [
    { label: "Developer Docs", href: "#" },
    { label: "Blogs", href: "#" },
    { label: "FAQ", href: "#" },
  ];

  const policyLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Fraud Awareness", href: "#" },
    { label: "Grievance Policy", href: "#" },
    { label: "Cancellation & Refund Policy", href: "#" },
    { label: "Trust & Safety", href: "#" },
    { label: "E-Waste Policy", href: "#" },
  ];

  return (
    <footer className="relative w-full overflow-hidden bg-[#040b1f] px-3 py-8 text-white sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(55,81,255,0.12),_transparent_42%),radial-gradient(circle_at_right,_rgba(120,49,255,0.16),_transparent_35%)]" />
      <div className="pointer-events-none absolute -bottom-[180px] -left-[120px] h-[360px] w-[420px] rounded-full bg-[#315cff] opacity-15 blur-[85px]" />
      <div className="pointer-events-none absolute -bottom-[180px] -right-[100px] h-[380px] w-[420px] rounded-full bg-[#8b5cf6] opacity-20 blur-[90px]" />
      <div className="relative z-10 mx-auto max-w-[1280px]">
        
        {/* ================= DISCLAIMER ================= */}
        <div className="mb-12 grid grid-cols-1 items-center gap-8 rounded-[28px] border border-[#ded8f1] bg-white/70 px-7 py-7 shadow-[0_15px_40px_rgba(62,55,100,0.05)] lg:grid-cols-2 lg:px-8">
          
          <div className="flex items-start gap-5">
            <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-[22px] border border-[#d8d0ec] bg-[#f7f7fc] text-[#7854db]">
              <ShieldCheck size={32} strokeWidth={1.8} />
            </div>

            <div>
              <h3 className="text-[21px] font-semibold text-[#3d434c]">
                Disclaimer
              </h3>

              <p className="mt-1 max-w-[630px] text-[15px] leading-[1.8] text-[#626c7b]">
                Never share your password, card number, expiry date, CVV, PIN,
                OTP, or other confidential information with anyone even if the
                person claims to be from AeronPay.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5 lg:justify-end">
            <div className="flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-[20px] border border-[#dddce5] bg-white text-[#7651d4] shadow-sm">
              <Building2 size={26} strokeWidth={1.7} />
            </div>

            <p className="max-w-[430px] text-[16px] leading-[1.85] text-[#566171]">
              AeronPay delivers innovative prepaid card solutions and secure
              financial services tailored to meet the needs of Indian retailers
              and customers.
            </p>
          </div>
        </div>

        {/* ================= MAIN FOOTER ================= */}
        <div className="overflow-hidden rounded-[32px] border border-white bg-[#fff] shadow-[0_18px_55px_rgba(55,60,90,0.07)]">

          {/* TOP CONTENT */}
          <div className="grid grid-cols-1 gap-12 px-6 py-12 sm:px-10 lg:grid-cols-[1.65fr_0.8fr_0.8fr_0.95fr] lg:gap-10 lg:px-14 lg:py-14">
            
            {/* LEFT COLUMN */}
            <div>
              {/* LOGO */}
              <div className="flex items-center gap-3">
                
                  <img
                    src={logoDark}
                    alt="AeronPay Logo"
                    className="logo-zoom-pulse h-auto w-60 object-contain sm:w-72"
                  />
               
              </div>

              {/* DESCRIPTION */}
              <p className="mt-9 max-w-[480px] text-[22px] leading-[1.9] text-[#687484] sm:text-[17px]">
                AeronPay is a technology-driven platform offering digital
                payment services in partnership with RBI-registered Prepaid
                Payment Instrument issuers, various banks, and NPCI's UPI
                system. Customer funds in bank accounts and prepaid instruments
                are insured as per RBI's deposit insurance guidelines.
              </p>

              {/* SOCIAL */}
              <div className="mt-9">
                <h4 className="mb-5 text-[21px] font-bold text-[#333a44]">
                  Follow us
                </h4>

                <div className="flex flex-wrap gap-4">
                  <SocialIcon>
                    <FaXTwitter size={20} />
                  </SocialIcon>

                  <SocialIcon>
                    <FaFacebookF size={18} />
                  </SocialIcon>

                  <SocialIcon>
                    <FaLinkedinIn size={19} />
                  </SocialIcon>

                  <SocialIcon>
                    <FaYoutube size={20} />
                  </SocialIcon>

                  <SocialIcon>
                    <FaInstagram size={20} />
                  </SocialIcon>
                </div>
              </div>
            </div>

            {/* COMPANY */}
            <FooterColumn
              title="Company"
              links={companyLinks}
            />

            {/* RESOURCES */}
            <FooterColumn
              title="Resources"
              links={resourceLinks}
            />

            {/* POLICIES */}
            <FooterColumn
              title="Policies"
              links={policyLinks}
            />
          </div>

          {/* ================= INDIA SECTION ================= */}
          <div className="grid grid-cols-1 items-end gap-10 px-6 pt-4 sm:px-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:px-11">
            
            {/* LEFT INDIA IMAGE */}
            <div className="flex min-h-[230px] items-end">
              <img
                src={footerIndiaMonuments}
                alt="India Monuments"
                className="h-auto w-full max-w-[620px] object-contain object-bottom"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="pb-7 lg:pb-9">
              <h2 className="text-[33px] font-semibold leading-tight tracking-[1px] text-[#535b66] sm:text-[40px]">
                Truly by India, for India.
              </h2>

              <p className="mt-4 text-[17px] text-[#667282] sm:text-[16px]">
                Built with trust. Backed by regulations. Powered by innovation.
              </p>

              {/* LINE */}
              <div className="relative mt-8 h-px w-full bg-[#dde1e7]">
                <div className="absolute left-[45%] top-[-1px] h-[3px] w-[60px] rounded-full bg-[#7c51df]" />
              </div>

              {/* FEATURES */}
              <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-10">
                <Feature
                  icon={<ShieldCheck size={24} strokeWidth={1.8} />}
                  text="RBI Guidelines Compliant"
                />

                <Feature
                  icon={<Building2 size={24} strokeWidth={1.8} />}
                  text="Secure Banking Partners"
                />
              </div>
            </div>
          </div>

          {/* ================= BOTTOM PURPLE BAR ================= */}
          <div className="mx-6 mb-6 flex flex-col gap-6 rounded-b-[28px] bg-gradient-to-r from-[#24163f] via-[#2c1d50] to-[#3c2764] px-7 py-6 text-white sm:mx-10 md:flex-row md:items-center md:justify-between lg:mx-11">
            
            {/* COPYRIGHT */}
            <div className="flex items-center gap-4">
              <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[14px] bg-white/[0.08] text-white">
                <ShieldCheck size={21} strokeWidth={1.8} />
              </div>

              <p className="text-[14px] font-medium text-[#d6d2df] sm:text-[16px]">
                © 2026 AeronPay. All rights reserved.
              </p>
            </div>

            {/* SECURITY TEXT */}
            <div className="flex items-center gap-4">
              <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[14px] bg-white/[0.08]">
                <LockKeyhole size={20} strokeWidth={1.8} />
              </div>

              <p className="text-[14px] font-medium text-[#d6d2df] sm:text-[16px]">
                Your security is our priority. Stay safe, stay secure.
              </p>
            </div>

            {/* TOP BUTTON */}
            <button
              onClick={scrollToTop}
              className="flex h-[56px] w-[56px] shrink-0 items-center justify-center self-end rounded-[17px] bg-gradient-to-br from-[#8b63f0] to-[#6840c5] text-white shadow-[0_8px_20px_rgba(118,72,220,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 md:self-auto"
              aria-label="Scroll to top"
            >
              <ArrowUp size={22} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};


/* =========================================================
   FOOTER COLUMN
========================================================= */

const FooterColumn = ({ title, links }) => {
  return (
    <div>
      <h3 className="text-[22px] font-semibold text-[#343b44]">
        {title}
      </h3>

      <div className="mt-3 h-[3px] w-[43px] rounded-full bg-[#7a51d7]" />

      <ul className="mt-6 space-y-4">
        {links.map((item) => (
          <li key={item.label}>
            {item.href.startsWith("/") ? (
              <Link
                to={item.href}
                className="group flex items-start gap-2 text-[15px] leading-[1.8] text-[#596575] transition-all duration-300 hover:translate-x-1 hover:text-[#7650d8] sm:text-[16px]"
              >
                <ChevronRight size={15} className="mt-[6px] shrink-0" />
                <span>{item.label}</span>
                {item.hiring && (
                  <span className="mt-[2px] ml-1 rounded-full bg-[#7650d8] px-3 py-[3px] text-[10px] font-bold tracking-[1px] text-white">
                    HIRING
                  </span>
                )}
              </Link>
            ) : (
              <a
                href={item.href}
                className="group flex items-start gap-2 text-[15px] leading-[1.8] text-[#596575] transition-all duration-300 hover:translate-x-1 hover:text-[#7650d8] sm:text-[16px]"
              >
              <ChevronRight
                size={15}
                className="mt-[6px] shrink-0"
              />

              <span>{item.label}</span>

              {item.hiring && (
                <span className="mt-[2px] ml-1 rounded-full bg-[#7650d8] px-3 py-[3px] text-[10px] font-bold tracking-[1px] text-white">
                  HIRING
                </span>
              )}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};


/* =========================================================
   SOCIAL ICON
========================================================= */

const SocialIcon = ({ children }) => {
  return (
    <button className="flex h-[53px] w-[53px] items-center justify-center rounded-[18px] border border-[#d9e0e8] bg-white text-[#596575] shadow-[0_4px_12px_rgba(40,50,70,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#8b64e9] hover:text-[#7952dc] hover:shadow-[0_10px_20px_rgba(110,70,220,0.12)]">
      {children}
    </button>
  );
};


/* =========================================================
   FEATURE
========================================================= */

const Feature = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-[#d8d0ee] bg-[#f3f1fa] text-[#7953da]">
        {icon}
      </div>

      <span className="whitespace-nowrap text-[14px] text-[#596574] sm:text-[15px]">
        {text}
      </span>
    </div>
  );
};


export default SiteFooter;