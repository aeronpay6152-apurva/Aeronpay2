import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Plus,
  Minus,
  ReceiptText,
  ShieldCheck,
  CreditCard,
  Gift,
  WalletCards,
  Landmark,
  Box,
  BadgeCheck,
  LockKeyhole,
  CircleDollarSign,
  FileText,
} from "lucide-react";
import bankingVisual from "../../../assets/images/banking-middle-nav.png";
import collectionVisual from "../../../assets/images/collection-middle-nav.png";
import orchestrationVisual from "../../../assets/images/orchestration-middle-nav.png";
import verificationVisual from "../../../assets/images/verification-middle-nav.png";

const menuItems = [
  {
    title: "Banking",
    icon: Landmark,
    visual: bankingVisual,
    heading: "Banking Built into Your Product",
    description:
      "Enable core banking capabilities directly within your platform with systems designed for scale, control and seamless financial operations",
    bullets: [
      "Launch and manage financial products",
      "Enable transactions and stored value systems",
      "Control flows with real-time visibility",
      "Built for scalable business operations",
    ],
    solutions: [
      { title: "Digital Gold", subtitle: "Own gold the modern way", icon: CircleDollarSign, iconBg: "bg-amber-500/15", iconColor: "text-amber-400" },
      { title: "Prepaid Card", subtitle: "Flexible prepaid built for control", icon: CreditCard, iconBg: "bg-cyan-500/15", iconColor: "text-cyan-400" },
      { title: "Gift Card", subtitle: "Instant digital gifting solutions", icon: Gift, iconBg: "bg-pink-500/15", iconColor: "text-pink-400" },
      { title: "Expense Card", subtitle: "Smart business expense management", icon: WalletCards, iconBg: "bg-emerald-500/15", iconColor: "text-emerald-400" },
    ],
  },
  {
    title: "Collection",
    icon: Box,
    visual: collectionVisual,
    heading: "Collections That Convert Better",
    description: "Build optimised collection flows that improve conversion rates across QR UPI and account-based payment methods without friction",
    bullets: [
      "Enable fast and flexible collection",
      "Support QR UPI and virtual accounts",
      "Improve conversions across payment journeys",
      "Simplify collection flows at scale",
    ],
    solutions: [
      { title: "Static QR", subtitle: "Simple QR for quick payments", icon: Box, iconBg: "bg-violet-500/15", iconColor: "text-violet-400", comingSoon: true },
      { title: "Dynamic QR", subtitle: "Smart QR for higher conversions", icon: ReceiptText, iconBg: "bg-blue-500/15", iconColor: "text-blue-400", comingSoon: true },
      { title: "Virtual Account", subtitle: "Track payments with virtual accounts", icon: Landmark, iconBg: "bg-amber-500/15", iconColor: "text-amber-400", comingSoon: true },
      { title: "UPI Intent", subtitle: "Faster UPI app-based payments", icon: CircleDollarSign, iconBg: "bg-emerald-500/15", iconColor: "text-emerald-400", comingSoon: true },
      { title: "UPI Autopay", subtitle: "Automate recurring UPI collections", icon: CreditCard, iconBg: "bg-rose-500/15", iconColor: "text-rose-400", comingSoon: true },
    ],
  },
  {
    title: "Orchestration",
    icon: ShieldCheck,
    visual: orchestrationVisual,
    heading: "Orchestration",
    description: "Route and manage transactions across systems with intelligent orchestration designed to improve success rates reduce failures and optimise performance",
    bullets: [
      "Route payments dynamically across providers",
      "Apply smart rules for better outcomes",
      "Reduce failures with intelligent retries",
      "Monitor flows with real-time control",
    ],
    solutions: [
      { title: "Payment Orchestration", subtitle: "Smart routing across payment systems", icon: Activity, iconBg: "bg-blue-500/15", iconColor: "text-blue-400" },
      { title: "Connecting Banking", subtitle: "Optimised payout routing and control", icon: CircleDollarSign, iconBg: "bg-emerald-500/15", iconColor: "text-emerald-400" },
      { title: "Verification Orchestration", subtitle: "Reduce risk with smart verification", icon: ShieldCheck, iconBg: "bg-violet-500/15", iconColor: "text-violet-400" },
    ],
  },
  {
    title: "Verification",
    icon: LockKeyhole,
    visual: verificationVisual,
    heading: "Verification",
    description: "Protect your ecosystem by implementing fast, reliable, and automated real-time identity verification services.",
    bullets: [
      "Automated KYC/KYB flows.",
      "Worldwide reach, local compliance.",
      "Zero-friction user signups.",
    ],
    solutions: [
      { title: "PAN Verification", subtitle: "Confirm identity instantly", icon: FileText, iconBg: "bg-blue-500/15", iconColor: "text-blue-400", comingSoon: true },
      { title: "GST Verification", subtitle: "Validate business tax info", icon: BadgeCheck, iconBg: "bg-orange-500/15", iconColor: "text-orange-400", comingSoon: true },
      { title: "UPI Verification", subtitle: "Verify VPA in real-time", icon: CircleDollarSign, iconBg: "bg-emerald-500/15", iconColor: "text-emerald-400", comingSoon: true },
      { title: "Bank Account Verification", subtitle: "Authenticate payouts fast", icon: Landmark, iconBg: "bg-violet-500/15", iconColor: "text-violet-400", comingSoon: true },
    ],
    viewLabel: "View all verifications",
  },
];

export const productLinks = menuItems;

export default function Navbar({ isOpen, activeProduct, onOpen, onToggle, onClose, onProductHover }) {
  const open = Boolean(isOpen);
  const activeItem = activeProduct || menuItems[0];
  const active = activeItem.title;
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
    if (open && !isPinned) {
      setIsPinned(true);
      return;
    }

    setIsPinned((pinned) => !pinned);
    onToggle?.();
  };

  useEffect(() => {
    return () => cancelClose();
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsPinned(false);
        onClose?.();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [open]);

  const handleMouseEnter = () => {
    cancelClose();
    if (!open) setIsPinned(false);
    onOpen?.();
  };

  return (
    <div
      ref={navbarRef}
      className="relative h-full text-white"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={(event) => {
        const movedInside = event.relatedTarget instanceof Node && navbarRef.current?.contains(event.relatedTarget);

        if (!isPinned && !movedInside) {
          scheduleClose();
        }
      }}
    >
      <button
        type="button"
        onClick={(event) => {
          event.preventDefault();
          handleToggle();
        }}
        className={`group flex items-center gap-[5px] whitespace-nowrap text-[17px] font-semibold transition-colors duration-200 ${open ? "text-blue-400" : "text-white hover:text-blue-400"}`}
        aria-expanded={open}
      >
        Products
        {open ? <ChevronUp size={16} className="text-blue-400" /> : <ChevronDown size={16} className="text-white/70 transition-colors duration-200 group-hover:text-blue-400" />}
      </button>

      {/* MEGA MENU */}
      {open && (
        <div className="fixed left-1/2 top-[68px] z-50 w-[min(1180px,calc(100vw-32px))] -translate-x-1/2 px-0 pt-[8px] max-md:w-[calc(100vw-24px)]" onMouseEnter={cancelClose}>
          <div
            className="
              overflow-hidden
              rounded-[28px]
              border border-white/[0.08]
              bg-[#1b1d1f]
              shadow-[0_30px_100px_rgba(0,0,0,.65)]
            "
          >
            <div className="grid min-h-[598px] grid-cols-[300px_500px_1fr] max-md:max-h-[calc(100vh-84px)] max-md:grid-cols-1 max-md:overflow-y-auto">
              {/* LEFT COLUMN */}
              <div className="border-r border-white/[0.08] px-[8px] py-[40px] max-md:border-b max-md:border-r-0 max-md:px-4 max-md:py-5">
                <p className="mb-[20px] px-[22px] text-[11px] font-medium uppercase tracking-[1.5px] text-[#777c88]">
                  For Merchants
                </p>

                <div className="space-y-[5px]">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = active === item.title;

                    return (
                      <button
                        key={item.title}
                        onMouseEnter={() => onProductHover?.(item)}
                        onClick={() => onProductHover?.(item)}
                        className={`
                          group flex h-[45px] w-full items-center
                          rounded-[12px]
                          px-[21px]
                          transition-all duration-200
                          ${
                            isActive
                              ? "bg-[#303342] text-white"
                              : "text-[#7e8086] hover:bg-white/[0.04]"
                          }
                        `}
                      >
                        <span
                          className={`
                            mr-[12px] flex h-[18px] w-[18px]
                            items-center justify-center
                            rounded-full
                            ${
                              isActive
                                ? "border border-white"
                                : "border border-[#73757b]"
                            }
                          `}
                        >
                          {isActive ? (
                            <Plus size={11} strokeWidth={2} />
                          ) : (
                            <Icon size={11} />
                          )}
                        </span>

                        <span className="text-[17px] font-semibold">
                          {item.title}
                        </span>

                        {isActive && (
                          <ArrowRight
                            size={14}
                            className="ml-auto"
                            strokeWidth={2}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* CENTER COLUMN */}
              <div className="border-r border-white/[0.08] px-[44px] py-[44px] max-md:border-b max-md:border-r-0 max-md:px-5 max-md:py-6">
                <h2 className="text-[23px] font-semibold tracking-[-0.5px] text-white">
                  {activeItem.heading}
                </h2>

                <p className="mt-[17px] max-w-[350px] text-[17px] font-medium leading-[1.65] text-[#c0c1c5]">
                  {activeItem.description}
                </p>

                <ul className="mt-[17px] space-y-[8px]">
                  {activeItem.bullets.map((text) => (
                    <li
                      key={text}
                      className="flex items-start gap-[10px] text-[14px] font-medium text-[#dedee1]"
                    >
                      <span className="mt-[5px] h-[4px] w-[4px] shrink-0 rounded-full bg-white" />
                      {text}
                    </li>
                  ))}
                </ul>

                <div className="mt-[28px] ">
                  <img
                    src={activeItem.visual}
                    alt={`${activeItem.title} product overview`}
                    className="h-[250px] w-full object-contain object-center"
                  />
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="px-[30px] py-[40px] max-md:px-5 max-md:py-6">
                <p className="mb-[24px] text-[11px] font-medium uppercase tracking-[1.5px] text-[#777c88]">
                  Industry Solutions
                </p>

                <div className="space-y-[27px]">
                  {activeItem.solutions.map((item) => {
                    const Icon = item.icon;

                    return (
                      <button
                        key={item.title}
                        className="group flex w-full items-center text-left"
                      >
                        <div
                          className={`
                            mr-[12px] flex h-[40px] w-[40px]
                            shrink-0 items-center justify-center
                            rounded-full
                            transition-all duration-300
                            ${item.iconBg || "bg-[#353638]"}
                            group-hover:brightness-125
                          `}
                        >
                          <Icon
                            size={20}
                            strokeWidth={1.7}
                            className={item.iconColor || "text-white"}
                          />
                        </div>

                        <div className="min-w-0">
                          <div className="flex min-w-0 items-center gap-2">
                            <h3 className="whitespace-nowrap text-[16px] font-semibold tracking-[-0.3px] text-white">
                              {item.title}
                            </h3>
                            {item.comingSoon && (
                              <span className="shrink-0 whitespace-nowrap rounded-full bg-[#073c31] px-2 py-1 text-[9px] font-semibold leading-none text-[#00c995]">
                                Coming Soon
                              </span>
                            )}
                          </div>

                          <p className="mt-[4px] text-[12px] font-medium text-[#9b9ca1]">
                            {item.subtitle}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {activeItem.viewLabel && (
                  <Link
                    to="/contact"
                    onClick={onClose}
                    className="mt-[28px] inline-flex items-center gap-1 text-[12px] font-medium text-[#009cff]"
                  >
                    {activeItem.viewLabel} <ArrowRight size={13} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}