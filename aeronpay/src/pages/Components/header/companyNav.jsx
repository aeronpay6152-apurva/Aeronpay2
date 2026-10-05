import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  UserRound,
  BriefcaseBusiness,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

const companyItems = [
  {
    title: "About us",
    description: "The story and vision behind our platform",
    icon: UserRound,
    type: "about",
  },
  {
    title: "Careers",
    description: "Join us in building the future of fintech",
    icon: BriefcaseBusiness,
    type: "careers",
  },
  {
    title: "Contact us",
    description: "Connect with our team to get started",
    icon: MessageSquare,
    type: "contact",
  },
];

function CompanyItem({ item }) {
  const Icon = item.icon;
  const ItemWrapper = item.type === "contact" ? Link : "div";
  const itemWrapperProps = item.type === "contact"
    ? {
        to: "/contact",
      }
    : {};

  return (
    <ItemWrapper {...itemWrapperProps} className="group flex h-[80px] items-center">
      {/* Icon */}
      <div
        className={`
          flex h-[44px] w-[44px] shrink-0
          items-center justify-center
          rounded-[12px]
          ${
            item.type === "about"
              ? "bg-[#222344] text-[#7467ff]"
              : item.type === "careers"
              ? "bg-[#12332f] text-[#00c994]"
              : "bg-[#122d42] text-[#009dff]"
          }
        `}
      >
        <Icon size={20} strokeWidth={1.7} />
      </div>

      {/* Text */}
      <div className="ml-[14px] min-w-0">
        <div className="flex items-center gap-[9px]">
          <h3 className="text-[19px] font-semibold leading-[18px] text-white">
            {item.title}
          </h3>

          {item.type === "careers" && (
            <span
              className="
                rounded-full
                bg-[#073c31]
                px-[8px]
                py-[3px]
                text-[11px]
                font-semibold
                leading-none
                text-[#00c995]
              "
            >
              We're hiring
            </span>
          )}
        </div>

        <p
          className="
            mt-[5px]
            text-[13px]
            font-medium
            leading-[16px]
            text-[#81848a]
          "
        >
          {item.description}
        </p>
      </div>

      {/* Arrow */}
      <ArrowRight
        size={15}
        className="
          ml-auto
          mr-[4px]
          text-[#5d6065]
          transition-all
          duration-300
          group-hover:translate-x-[3px]
          group-hover:text-[#9b9da2]
        "
      />
    </ItemWrapper>
  );
}

function TrustCard() {
  return (
    <div
      className="
        relative
        h-[291px]
        w-full
        overflow-hidden
        rounded-[19px]
        border
        border-[#1d4163]
        bg-[#09182b]
      "
    >
      {/* Blue glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-70px]
          top-[-100px]
          h-[220px]
          w-[220px]
          rounded-full
          bg-[#096bd7]/25
          blur-[55px]
        "
      />

      {/* Content */}
      <div className="relative z-10 px-[24px] pt-[30px]">
        {/* Label */}
        <p
          className="
            text-[10px]
            font-semibold
            uppercase
            tracking-[1.4px]
            text-[#009dff]
          "
        >
          Trusted Infrastructure
        </p>

        {/* Heading */}
        <h2
          className="
            mt-[14px]
            max-w-[265px]
            text-[21px]
            font-semibold
            leading-[24px]
            tracking-[-0.3px]
            text-white
          "
        >
          Built to Power Modern Business
         
          Payments
        </h2>

        {/* Stats */}
        <div className="mt-[26px] flex items-start">
          {/* 24x7 */}
          <div className="w-[70px]">
            <p className="text-[22px] font-bold leading-[24px] text-white">
              24×7
            </p>

            <p className="mt-[7px] text-[12px] leading-[14px] text-[#3c8ac7]">
              Real-Time
              <br />
              Processing
            </p>
          </div>

          {/* Divider */}
          <div className="mx-[10px] h-[58px] w-px bg-[#18334c]" />

          {/* Enterprise */}
          <div className="w-[112px]">
            <p className="text-[20px] font-bold leading-[24px] text-white">
              Enterprise
            </p>

            <p className="mt-[7px] text-[12px] leading-[14px] text-[#3c8ac7]">
              Security Standards
            </p>
          </div>

          {/* Divider */}
          <div className="mx-[7px] h-[58px] w-px bg-[#18334c]" />

          {/* Banking */}
          <div>
            <p className="text-[20px] font-bold leading-[24px] text-white">
              Banking
            </p>

            <p className="mt-[7px] text-[12px] leading-[14px] text-[#3c8ac7]">
              Support
            </p>
          </div>
        </div>

        {/* Button */}
        <button
          className="
            mt-[22px]
            flex
            h-[39px]
            items-center
            gap-[7px]
            rounded-full
            border
            border-[#008de8]
            px-[16px]
            text-[11px]
            font-semibold
            text-[#009dff]
            transition-all
            duration-300
            hover:bg-[#009dff]/10
          "
        >
          Learn about us
          <ArrowRight size={13} />
        </button>
      </div>
    </div>
  );
}

function CompanyMenu() {
  const [open, setOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#050608] text-white">
      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <nav
        className="
          fixed
          left-0
          top-0
          z-50
          h-[78px]
          w-full
          bg-[#0b0b0c]
        "
      >
        <div
          className="
            mx-auto
            flex
            h-full
            max-w-[1300px]
            items-center
            justify-between
            px-[28px]
          "
        >
          {/* LOGO */}
          <div className="flex items-center gap-[10px]">
            <div
              className="
                flex
                h-[42px]
                w-[42px]
                items-center
                justify-center
                rounded-[11px]
                bg-white
              "
            >
              <div className="relative h-[25px] w-[28px]">
                <span className="absolute left-0 top-[9px] h-[9px] w-[14px] rotate-[43deg] rounded-[4px] bg-[#ed5d98]" />
                <span className="absolute left-[8px] top-[5px] h-[16px] w-[8px] rotate-[20deg] rounded-[4px] bg-[#7459dd]" />
                <span className="absolute right-0 top-[9px] h-[9px] w-[14px] rotate-[-43deg] rounded-[4px] bg-[#58b9d2]" />
              </div>
            </div>

            <span
              className="
                text-[26px]
                font-semibold
                tracking-[-1.2px]
              "
            >
              aeronpay
            </span>
          </div>

          {/* NAV LINKS */}
          <div className="flex items-center gap-[40px]">
            <button className="flex items-center gap-[5px] text-[15px] font-medium">
              Products
              <ChevronDown size={14} />
            </button>

            <button className="flex items-center gap-[5px] text-[15px] font-medium">
              Solutions
              <ChevronDown size={14} />
            </button>

            <button
              onClick={() => setOpen((prev) => !prev)}
              className="
                flex
                items-center
                gap-[5px]
                text-[15px]
                font-medium
              "
            >
              Company

              {open ? (
                <ChevronUp
                  size={14}
                  className="text-[#00aaff]"
                />
              ) : (
                <ChevronDown size={14} />
              )}
            </button>

            <button className="text-[15px] font-medium">
              Our Blogs
            </button>
          </div>

          {/* LOGIN */}
          <button
            className="
              flex
              h-[40px]
              items-center
              gap-[8px]
              rounded-full
              bg-[#087ff5]
              px-[22px]
              text-[14px]
              font-semibold
              transition-all
              duration-300
              hover:bg-[#168cf5]
            "
          >
            Log In
            <ArrowRight size={15} />
          </button>
        </div>
      </nav>

      {/* =====================================================
          COMPANY MEGA MENU
      ===================================================== */}
      {open && (
        <div
          className="
            fixed
            left-1/2
            top-[78px]
            z-40
            w-[790px]
            -translate-x-1/2
          "
        >
          <div
            className="
              grid
              min-h-[348px]
              grid-cols-[380px_410px]
              overflow-hidden
              rounded-[27px]
              border
              border-white/[0.09]
              bg-[#1b1d1f]
              shadow-[0_30px_100px_rgba(0,0,0,.72)]
            "
          >
            {/* =================================================
                LEFT
            ================================================= */}
            <div
              className="
                border-r
                border-white/[0.08]
                px-[38px]
                py-[35px]
              "
            >
              {/* Heading */}
              <p
                className="
                  mb-[27px]
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[1.6px]
                  text-[#777a80]
                "
              >
                Company
              </p>

              {/* Items */}
              <div className="space-y-[4px]">
                {companyItems.map((item) => (
                  <CompanyItem
                    key={item.title}
                    item={item}
                  />
                ))}
              </div>
            </div>

            {/* =================================================
                RIGHT
            ================================================= */}
            <div className="px-[27px] py-[28px]">
              <TrustCard />
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          BACKGROUND DEMO
      ===================================================== */}
      <main
        className="
          relative
          flex
          min-h-screen
          items-center
          overflow-hidden
          px-[10%]
          pt-[100px]
        "
      >
        <div className="max-w-[720px]">
          {/* pill */}
          <div
            className="
              mb-[43px]
              inline-flex
              items-center
              gap-[9px]
              rounded-full
              border
              border-[#17314e]
              px-[17px]
              py-[9px]
              text-[12px]
              tracking-[1.3px]
              text-[#3983bb]
            "
          >
            <span className="h-[7px] w-[7px] rounded-full bg-[#5955dc]" />
            PAYMENTS INFRASTRUCTURE
          </div>

          {/* heading */}
          <h1
            className="
              text-[65px]
              font-semibold
              leading-[1.04]
              tracking-[-3.5px]
              text-white/60
            "
          >
            Enterprise
            <br />
            Payments
            <br />
            APIs for{" "}
            <span className="text-[#314b9c]">
              B2B Growth
            </span>
          </h1>

          {/* paragraph */}
          <p
            className="
              mt-[36px]
              max-w-[620px]
              text-[16px]
              leading-[29px]
              text-[#3d5a72]
            "
          >
            Built for the moments you never notice but always
            depend on—when money moves instantly, systems respond
            flawlessly and everything works exactly as expected,
            creating the kind of payment experience modern
            businesses should never have to think twice about.
          </p>

          {/* bottom cards */}
          <div className="mt-[30px] flex gap-[22px]">
            {[
              "Enterprise Security",
              "Fast Processing",
              "Integration Ready",
            ].map((item) => (
              <div
                key={item}
                className="
                  flex
                  h-[56px]
                  items-center
                  gap-[12px]
                  rounded-[10px]
                  bg-[#101418]
                  px-[16px]
                  text-[13px]
                  font-medium
                  text-[#555a5e]
                "
              >
                <span className="h-[24px] w-[24px] rounded-full bg-[#102c27]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default function CompanyNav({ isOpen, onOpen, onToggle, onClose }) {
  const navbarRef = useRef(null);
  const closeTimerRef = useRef(null);
  const [isPinned, setIsPinned] = useState(false);

  const cancelClose = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimerRef.current = setTimeout(() => {
      if (!isPinned) onClose?.();
    }, 180);
  };

  const handleToggle = () => {
    if (isOpen && !isPinned) {
      setIsPinned(true);
      return;
    }

    setIsPinned((pinned) => !pinned);
    onToggle?.();
  };

  const handleClose = () => {
    setIsPinned(false);
    onClose?.();
  };

  useEffect(() => {
    return () => cancelClose();
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  const handleMouseEnter = () => {
    cancelClose();
    if (!isOpen) setIsPinned(false);
    onOpen?.();
  };

  return (
    <div
      ref={navbarRef}
      className="relative h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={(event) => {
        const movedInside = event.relatedTarget instanceof Node && navbarRef.current?.contains(event.relatedTarget);

        if (!isPinned && !movedInside) {
          scheduleClose();
        }
      }}
    >
      <button type="button" onClick={handleToggle} className={`group flex items-center gap-[6px] whitespace-nowrap text-[17px] font-semibold transition-colors duration-200 ${isOpen ? "text-blue-400" : "text-white hover:text-blue-400"}`}>
        Company
        {isOpen ? <ChevronUp size={18} strokeWidth={1.8} className="text-blue-400" /> : <ChevronDown size={18} strokeWidth={1.8} className="text-white/70 transition-colors duration-200 group-hover:text-blue-400" />}
      </button>
      {isOpen && <div className="absolute left-1/2 top-[40px] z-50 w-[min(850px,calc(100vw-32px))] -translate-x-1/2 pt-[8px] max-md:w-[calc(100vw-24px)]" onMouseEnter={cancelClose} onMouseDown={(event) => event.stopPropagation()}>
        <div className="rounded-[22px] border border-white/10 bg-[#191b1f] p-6 text-white shadow-[0_25px_80px_rgba(0,0,0,.6)]">
        <div className="grid grid-cols-[1fr_360px] gap-8 max-md:grid-cols-1">
          <div className="divide-y divide-white/10">{companyItems.map((item) => <CompanyItem key={item.title} item={item} />)}</div>
          <TrustCard />
        </div>
        <button type="button" className="sr-only" onClick={handleClose}>Close</button>
        </div>
      </div>}
    </div>
  );
}