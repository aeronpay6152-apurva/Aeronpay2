import { useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  BookOpen,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  FileText,
  GraduationCap,
  House,
  ReceiptText,
  ShieldCheck,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { allBlogPosts } from "../../blog/blog";

const industries = [
  { title: "E-Commerce", description: "Payments built for online retail", icon: ShoppingBag, iconBg: "bg-blue-500/10", iconColor: "text-blue-500" },
  { title: "Logistics", description: "Fast and reliable delivery payments", icon: Truck, iconBg: "bg-yellow-500/10", iconColor: "text-yellow-500" },
  { title: "Insurance", description: "Secure premium and claim collections", icon: ShieldCheck, iconBg: "bg-emerald-500/10", iconColor: "text-emerald-500" },
  { title: "Healthcare", description: "Built for critical payment moments", icon: Activity, iconBg: "bg-red-500/10", iconColor: "text-red-500" },
  { title: "Marketplace", description: "Split payments for multiple vendors", icon: House, iconBg: "bg-violet-500/10", iconColor: "text-violet-500" },
  { title: "Education", description: "Easy fee and payment management", icon: GraduationCap, iconBg: "bg-orange-500/10", iconColor: "text-orange-500" },
  { title: "FMCG", description: "High volume payments at scale", icon: ReceiptText, iconBg: "bg-cyan-500/10", iconColor: "text-cyan-500" },
];

const resources = [
  { title: "Documentation", subtitle: "API references & guides", icon: FileText, iconBg: "bg-blue-500/10", iconColor: "text-blue-400" },
  { title: "Case Studies", subtitle: "Real customer success stories", icon: BookOpen, iconBg: "bg-emerald-500/10", iconColor: "text-emerald-400" },
  { title: "Blog", subtitle: "Payments insights & updates", icon: FileText, iconBg: "bg-orange-500/10", iconColor: "text-orange-400" },
];

const recentBlog = allBlogPosts[0];

export default function SolutionNav({ isOpen, onOpen, onToggle, onClose }) {
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
          event.stopPropagation();
          handleToggle();
        }}
        className={`group flex items-center gap-[5px] whitespace-nowrap text-[17px] font-semibold transition-colors duration-200 ${isOpen ? "text-blue-400" : "text-white hover:text-blue-400"}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Solutions
        {isOpen ? <ChevronUp size={16} className="text-blue-400" /> : <ChevronDown size={16} className="text-white/70 transition-colors duration-200 group-hover:text-blue-400" />}
      </button>

      {isOpen && (
        <>
          <div className="pointer-events-none fixed inset-x-0 bottom-0 top-[68px] z-40 bg-black/70 backdrop-blur-[1px]" />
          <div className="absolute left-1/2 top-[52px] z-50 w-[min(920px,calc(100vw-24px))] -translate-x-1/2 pt-[8px] max-md:w-[calc(100vw-24px)]" onMouseEnter={cancelClose}>
            <div className="grid min-h-[700px] max-h-[calc(100vh-84px)] grid-cols-1 overflow-auto rounded-[24px] border border-white/[0.14] bg-[#1b1d1f] shadow-[0_30px_100px_rgba(0,0,0,0.6)] md:grid-cols-[1.32fr_1fr]">
              <div className="px-6 py-7 sm:px-[37px] sm:py-[30px]">
                <p className="mb-7 text-[11px] font-medium tracking-[2px] text-[#74777b]">INDUSTRIES WE SERVE</p>
                <div className="grid grid-cols-1 gap-x-7 gap-y-6 sm:grid-cols-2 sm:gap-x-[28px] sm:gap-y-[30px]">
                  {industries.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button key={item.title} type="button" onClick={handleClose} className="group relative flex min-h-[86px] cursor-pointer flex-col text-left">
                        <div className={`flex h-[37px] w-[40px] shrink-0 items-center justify-center rounded-[10px] ${item.iconBg}`}>
                          <Icon size={27} strokeWidth={1.6} className={item.iconColor} />
                        </div>
                        <div className="mt-3 pr-1">
                          <h3 className="mt-1.5 text-[19px] font-semibold text-[#e9e9ea]">{item.title}</h3>
                          <p className="mt-1 max-w-[140px] text-[14px] leading-[16px] text-[#85888c]">{item.description}</p>
                        </div>
                        <span className="absolute right-0 top-[0px] rounded-full bg-[#073c58] px-4 py-1 text-[10px]  font-medium text-[#0ba9ff]">Coming Soon</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="border-l border-white/[0.09] px-5 py-7 sm:px-[24px] sm:py-[30px]">
                <p className="mb-5 text-[10px] font-medium tracking-[2px] text-[#74777b]">FEATURED</p>
                <div className="h-[200px] overflow-hidden rounded-[11px] border border-white/[0.08] bg-[#233b47]">
                  <img src={recentBlog.image} alt={recentBlog.title} className="h-full w-full object-cover" />
                </div>

                <div className="mt-3 inline-flex rounded-full bg-[#292347] px-2 py-1"><span className="text-[10px] font-medium text-[#9b8cff]">{recentBlog.category}</span></div>
                <h3 className="mt-2 text-[14px] font-semibold leading-4 text-[#e7e7e8]">{recentBlog.title}</h3>
                <Link to="/blog" onClick={handleClose} className="mt-2 flex items-center gap-1 text-[12px] font-medium text-[#009cff]">Read more <ArrowUpRight size={12} /></Link>

                <div className="mt-5 space-y-1">
                  {resources.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button key={item.title} type="button" onClick={handleClose} className="group flex w-full items-center rounded-lg px-5 py-5 text-left transition-colors hover:bg-white/[0.04]">
                        <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${item.iconBg}`}><Icon size={15} className={item.iconColor} /></div>
                        <div className="ml-2 flex-1"><p className="text-[17px] font-semibold text-[#d8d9da]">{item.title}</p><p className="text-[13px] text-[#777a7d]">{item.subtitle}</p></div>
                        <ChevronRight size={18} strokeWidth={2} className="shrink-0 text-[#66696c] transition-transform group-hover:translate-x-1" />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}


