import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Box,
  Check,
  ChevronDown,
  CircleDollarSign,
  Code2,
  FileCode2,
  Gauge,
  KeyRound,
  LayoutDashboard,
  Settings,
  ShieldCheck,
  Webhook,
  Zap,
} from "lucide-react";



const FeatureCard = React.forwardRef(
  ({ icon: Icon, title, description, align = "left", delay = 0, className = "" }, ref) => {
    return (
      <div
        className={`
          feature-card
          relative z-30 w-full lg:w-[210px]
          ${className}
          flex flex-col items-start
        `}
        style={{ animationDelay: `${delay}ms` }}
      >
        {/* Icon */}
        <div
          ref={ref}
          className="
            feature-icon
            relative
            flex
            h-[70px]
            w-[70px]
            items-center
            justify-center
            rounded-[18px]
            border border-indigo-500/70
            bg-[#101633]
            shadow-[0_0_28px_rgba(79,70,229,0.28)]
          "
        >
          <Icon
            size={36}
            strokeWidth={1.8}
            className="
              text-cyan-300
              drop-shadow-[0_0_10px_rgba(34,211,238,0.75)]
            "
          />

          {/* connector node (visual anchor only — the line itself
              is drawn by the SVG layer, aligned to this element) */}
          <span
            className={`
              connector-node
              absolute
              top-1/2
              h-[7px]
              w-[7px]
              -translate-y-1/2
              rounded-full
              bg-cyan-300
              ${align === "left" ? "-right-[4px]" : "-left-[4px]"}
            `}
          />
        </div>

        {/* Title */}
        <h3
          className="
            mt-4
            text-[18px]
            font-semibold
            leading-tight
            text-white
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={`
            mt-2
            max-w-[210px]
            text-[13px]
            leading-7
            text-slate-300
          `}
        >
          {description}
        </p>
      </div>
    );
  }
);
FeatureCard.displayName = "FeatureCard";

/* =========================================================
   SIDEBAR ITEM
========================================================= */

const SidebarItem = ({ icon: Icon, label, active = false }) => {
  return (
    <div
      className={`
        sidebar-item
        flex items-center gap-2
        rounded-[8px]
        px-2.5 py-2
        text-[11px]
        transition-all
        duration-200
        ${
          active
            ? `
              is-active
              bg-gradient-to-r
              from-indigo-600
              to-violet-600
              text-white
              shadow-[0_0_18px_rgba(99,102,241,0.3)]
            `
            : "text-slate-300 hover:bg-white/[0.04] hover:text-white"
        }
      `}
    >
      <Icon size={14} />
      <span>{label}</span>
    </div>
  );
};

/* =========================================================
   CODE LINE
========================================================= */

const CodeLine = ({ number, children, reveal = 0 }) => {
  return (
    <div
      className="code-line flex min-h-[25px] items-center font-mono text-[10px] sm:text-[11px]"
      style={{ animationDelay: `${reveal}ms` }}
    >
      <span className="w-[34px] shrink-0 select-none text-center text-slate-600">
        {number}
      </span>

      <span className="whitespace-nowrap">{children}</span>
    </div>
  );
};

/* =========================================================
   DASHBOARD
========================================================= */

const Dashboard = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="dashboard-float relative w-full">
      {/* Glow */}
      <div
        className="
          absolute
          -inset-[2px]
          rounded-[23px]
          bg-gradient-to-r
          from-cyan-500
          via-violet-500
          to-fuchsia-500
          opacity-90
          blur-[1px]
          dashboard-glow
        "
      />

      {/* Dashboard container */}
      <div
        className="
          relative
          z-10
          overflow-hidden
          rounded-[22px]
          border
          border-indigo-400/60
          bg-[#090e24]
          shadow-[0_0_50px_rgba(79,70,229,0.35)]
        "
      >
        <div className="flex min-h-[350px]">
          {/* ================= SIDEBAR ================= */}

          <aside className="hidden w-[165px] shrink-0 border-r border-white/[0.06] bg-[#0b1029] p-3 sm:block">
            {/* Logo */}
            <div className="mb-6 flex items-center gap-2">
              <div
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-br
                  from-blue-500
                  to-violet-500
                  shadow-[0_0_15px_rgba(99,102,241,0.7)]
                "
              >
                <CircleDollarSign size={18} className="text-white" />
              </div>

              <span className="text-[13px] font-semibold text-white">
                AeronPay
              </span>

              <ChevronDown size={13} className="ml-auto text-slate-400" />
            </div>

            {/* Menu */}
            <div className="space-y-1.5">
              <SidebarItem icon={LayoutDashboard} label="Dashboard" />
              <SidebarItem icon={KeyRound} label="API Keys" active />
              <SidebarItem icon={FileCode2} label="Documentation" />
              <SidebarItem icon={Webhook} label="Webhooks" />
              <SidebarItem icon={Gauge} label="Logs" />
              <SidebarItem icon={Settings} label="Settings" />
            </div>
          </aside>

          {/* ================= MAIN ================= */}

          <main className="min-w-0 flex-1 p-3 sm:p-4">
            {/* Quick start */}
            <div className="rounded-[13px] border border-indigo-400/20 bg-[#101630] p-3">
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="text-[13px] font-semibold text-white">
                    Quick Start
                  </h4>

                  <p className="mt-1 text-[10px] text-slate-300">
                    Integrate in a few lines of code and start building.
                  </p>
                </div>

                <button
                  className="
                    lang-btn
                    flex
                    shrink-0
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-indigo-400/30
                    bg-[#111936]
                    px-3
                    py-2
                    text-[10px]
                    text-slate-200
                    transition-colors
                    duration-200
                    hover:border-cyan-400/50
                  "
                >
                  <Code2 size={12} />
                  Node.js
                  <ChevronDown size={11} />
                </button>
              </div>

              {/* ================= CODE ================= */}

              <div className="mt-3 overflow-hidden rounded-[10px] border border-white/[0.05] bg-[#080d20] py-2">
                <CodeLine number="1" reveal={0}>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-white">{"{ AeronPay }"}</span>{" "}
                  <span className="text-purple-400">=</span>{" "}
                  <span className="text-blue-300">require</span>
                  <span className="text-white">(</span>
                  <span className="text-emerald-300">"@aeronpay/sdk"</span>
                  <span className="text-white">);</span>
                </CodeLine>

                <CodeLine number="2" reveal={40}>
                  &nbsp;
                </CodeLine>

                <CodeLine number="3" reveal={80}>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-white">client</span>{" "}
                  <span className="text-purple-400">= new</span>{" "}
                  <span className="text-yellow-300">AeronPay</span>
                  <span className="text-white">{"({"}</span>
                </CodeLine>

                <CodeLine number="4" reveal={120}>
                  &nbsp;&nbsp;apiKey:{" "}
                  <span className="text-emerald-300">"sk_live_xxxxxxxxx"</span>
                  ,
                </CodeLine>

                <CodeLine number="5" reveal={160}>
                  <span className="text-white">{"});"}</span>
                </CodeLine>

                <CodeLine number="6" reveal={200}>
                  &nbsp;
                </CodeLine>

                <CodeLine number="7" reveal={240}>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-white">payment</span>{" "}
                  <span className="text-purple-400">= await</span>{" "}
                  <span className="text-blue-300">client</span>
                  <span className="text-white">.</span>
                  <span className="text-yellow-300">payments</span>
                  <span className="text-white">.</span>
                  <span className="text-blue-300">create</span>
                  <span className="text-white">{"({"}</span>
                </CodeLine>

                <CodeLine number="8" reveal={280}>
                  &nbsp;&nbsp;amount: <span className="text-cyan-300">5000</span>,
                </CodeLine>

                <CodeLine number="9" reveal={320}>
                  &nbsp;&nbsp;currency: <span className="text-emerald-300">"INR"</span>,
                </CodeLine>

                <CodeLine number="10" reveal={360}>
                  <span className="text-white">{"});"}</span>
                </CodeLine>

                <CodeLine number="11" reveal={400}>
                  &nbsp;
                </CodeLine>

                <CodeLine number="12" reveal={440}>
                  <span className="text-blue-300">console</span>
                  <span className="text-white">.</span>
                  <span className="text-yellow-300">log</span>
                  <span className="text-white">(payment);</span>
                  <span className="code-cursor" />
                </CodeLine>
              </div>
            </div>
          </main>
        </div>

      </div>

      {/* ================= CONNECTED ================= */}

        <div
          className="
            connected-badge
            absolute
            bottom-[-26px]
            right-[-18px]
            z-30
            flex
            items-center
            gap-3
            rounded-[15px]
            border
            border-cyan-400/30
            bg-[#101938]/95
            px-3
            py-3
            shadow-[0_0_30px_rgba(34,211,238,0.18)]
            backdrop-blur-xl
            sm:bottom-[-30px]
            sm:right-[-55px]
          "
        >
          <div
            className="
              connected-pulse
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-emerald-400
              shadow-[0_0_20px_rgba(16,185,129,0.6)]
            "
          >
            <Check size={21} strokeWidth={3} className="text-[#06251a]" />
          </div>

          <div className="min-w-0">
            <p className="whitespace-nowrap text-[13px] font-semibold text-white">
              API Connected
            </p>

            <p className="mt-0.5 whitespace-nowrap text-[10px] text-slate-300">
              You're ready to build!
            </p>
          </div>
        </div>
    </div>
  );
});
Dashboard.displayName = "Dashboard";

/* =========================================================
   CONNECTOR LAYER
   Draws the 4 lines by measuring the real position of each
   icon box and the dashboard, on every resize/layout change,
   instead of relying on fixed guessed coordinates.
========================================================= */

const ConnectorLayer = ({ containerRef, nodeRefs, dashboardRef }) => {
  const [paths, setPaths] = useState(null);

  useLayoutEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      const dash = dashboardRef.current;
      if (!container || !dash) return;

      const cRect = container.getBoundingClientRect();
      const dRect = dash.getBoundingClientRect();

      const relative = (rect, edge) => {
        const x = edge === "right" ? rect.right : rect.left;
        const y = rect.top + rect.height / 2;
        return { x: x - cRect.left, y: y - cRect.top };
      };

      const dLeft = { x: dRect.left - cRect.left, y: dRect.top - cRect.top + dRect.height / 2 };
      const dRight = { x: dRect.right - cRect.left, y: dRect.top - cRect.top + dRect.height / 2 };

      const entries = nodeRefs.map(({ ref, side, target }) => {
        const box = ref.current;
        if (!box) return null;
        const bRect = box.getBoundingClientRect();
        const start = relative(bRect, side === "left" ? "right" : "left");
        const end = target === "left" ? dLeft : dRight;
        // adjust the dashboard-side y to roughly track the card's own y
        // so lines fan out from top/bottom rather than all meeting dead
        // center, matching the original top/bottom pairing.
        return { start, end: { x: end.x, y: start.y > cRect.height / 2 - cRect.top ? end.y + (dRect.height * 0.18) : end.y - (dRect.height * 0.18) } };
      });

      setPaths(entries);
    };

    measure();

    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [containerRef, nodeRefs, dashboardRef]);

  if (!paths) return null;

  const colors = ["#8B5CF6", "#4F9BFF", "#A855F7", "#4F9BFF"];

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-10 hidden h-full w-full lg:block"
      style={{ overflow: "visible" }}
    >
      {paths.map((p, i) => {
        if (!p) return null;
        const { start, end } = p;
        const midX = (start.x + end.x) / 2;
        const d = `M${start.x} ${start.y} C${midX} ${start.y} ${midX} ${end.y} ${end.x} ${end.y}`;
        const color = colors[i % colors.length];

        return (
          <g key={i}>
            <path
              d={d}
              stroke={color}
              strokeWidth="6"
              strokeLinecap="round"
              opacity="0.08"
              fill="none"
            />
            <path
              d={d}
              stroke={color}
              strokeWidth="1.5"
              strokeDasharray="3 7"
              strokeLinecap="round"
              opacity="0.95"
              fill="none"
              className="connector-flow"
            />
            <circle cx={start.x} cy={start.y} r="3" fill={color} className="connector-dot" />
            <circle cx={end.x} cy={end.y} r="3" fill={color} className="connector-dot" style={{ animationDelay: "0.6s" }} />
          </g>
        );
      })}
    </svg>
  );
};

/* =========================================================
   MAIN SECTION
========================================================= */

export default function ApiAccessSection() {
  const visualRef = useRef(null);
  const dashboardRef = useRef(null);

  const iconRefs = {
    fastIntegration: useRef(null),
    enterpriseGrade: useRef(null),
    flexibleSolutions: useRef(null),
    buildGrow: useRef(null),
  };

  const nodeRefs = [
    { ref: iconRefs.fastIntegration, side: "left", target: "left" },
    { ref: iconRefs.enterpriseGrade, side: "left", target: "left" },
    { ref: iconRefs.flexibleSolutions, side: "right", target: "right" },
    { ref: iconRefs.buildGrow, side: "right", target: "right" },
  ];

  // trigger measurement once fonts/images settle too
  useEffect(() => {
    const t = setTimeout(() => window.dispatchEvent(new Event("resize")), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#070b1b] px-5 py-16 text-white sm:px-8 lg:px-10">
      <style>{`
        @keyframes apiFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes apiDotPulse {
          0%, 100% { box-shadow: 0 0 12px rgba(52,211,153,0.9); transform: scale(1); }
          50% { box-shadow: 0 0 20px rgba(52,211,153,1); transform: scale(1.25); }
        }
        @keyframes apiFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes apiDashFlow {
          to { stroke-dashoffset: -40; }
        }
        @keyframes apiDotGlow {
          0%, 100% { opacity: 0.5; r: 3; }
          50% { opacity: 1; r: 4; }
        }
        @keyframes apiGradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes apiConnectedPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(16,185,129,0.6); }
          50% { box-shadow: 0 0 32px rgba(16,185,129,0.95); }
        }
        @keyframes apiCursorBlink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes apiShine {
          0% { transform: translateX(-120%) skewX(-15deg); }
          100% { transform: translateX(220%) skewX(-15deg); }
        }

        .anim-badge { animation: apiFadeUp 0.6s ease both; }
        .anim-heading { animation: apiFadeUp 0.7s ease 0.08s both; }
        .anim-subhead { animation: apiFadeUp 0.7s ease 0.16s both; }
        .anim-buttons { animation: apiFadeUp 0.7s ease 0.24s both; }
        .anim-visual { animation: apiFadeUp 0.8s ease 0.32s both; }

        .live-dot { animation: apiDotPulse 2.2s ease-in-out infinite; }

        .feature-card { animation: apiFadeUp 0.7s ease both; }
        .feature-icon { transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease; animation: apiFloat 5s ease-in-out infinite; }
        .feature-card:nth-child(1) .feature-icon,
        .feature-card:hover .feature-icon { }
        .feature-card:hover .feature-icon {
          transform: translateY(-4px) scale(1.04);
          border-color: rgba(34,211,238,0.8);
          box-shadow: 0 0 34px rgba(34,211,238,0.35);
        }
        .connector-node { animation: apiDotPulse 2.4s ease-in-out infinite; }

        .connector-flow { animation: apiDashFlow 1.6s linear infinite; }
        .connector-dot { animation: apiDotGlow 2.4s ease-in-out infinite; }

        .gradient-text {
          background-size: 200% 200%;
          animation: apiGradientShift 6s ease-in-out infinite;
        }

        .dashboard-float { animation: apiFloat 6s ease-in-out infinite; }
        .dashboard-glow { animation: apiGradientShift 8s ease-in-out infinite; background-size: 200% 200%; }

        .connected-pulse { animation: apiConnectedPulse 2.4s ease-in-out infinite; }
        .connected-badge { transition: transform 0.3s ease; }
        .connected-badge:hover { transform: translateY(-2px); }

        .code-line { opacity: 0; animation: apiFadeUp 0.4s ease both; }
        .code-cursor {
          display: inline-block;
          width: 6px;
          height: 12px;
          margin-left: 4px;
          background: #67e8f9;
          animation: apiCursorBlink 1s step-end infinite;
          vertical-align: middle;
        }

        .cta-primary { position: relative; overflow: hidden; }
        .cta-primary .shine {
          position: absolute;
          top: 0;
          left: 0;
          width: 40%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.35), transparent);
          transform: translateX(-120%) skewX(-15deg);
        }
        .cta-primary:hover .shine { animation: apiShine 0.9s ease forwards; }

        .sidebar-item.is-active { animation: apiFadeUp 0.4s ease both; }

        @media (prefers-reduced-motion: reduce) {
          .anim-badge, .anim-heading, .anim-subhead, .anim-buttons, .anim-visual,
          .live-dot, .feature-icon, .connector-node, .connector-flow, .connector-dot,
          .gradient-text, .dashboard-float, .dashboard-glow, .connected-pulse,
          .code-line, .code-cursor, .cta-primary:hover .shine {
            animation: none !important;
          }
        }
      `}</style>

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute -left-[250px] -top-[250px] h-[550px] w-[550px] rounded-full bg-indigo-900/25 blur-[2px]" />

      <div className="pointer-events-none absolute -right-[320px] -top-[280px] h-[600px] w-[600px] rounded-full bg-violet-900/20" />

      <div className="pointer-events-none absolute bottom-[-220px] left-1/2 h-[450px] w-[900px] -translate-x-1/2 rounded-full bg-indigo-700/15 blur-[100px]" />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* ================= BADGE ================= */}

        <div className="anim-badge flex justify-center">
          <div className="flex items-center gap-3 rounded-full border border-cyan-400/60 bg-[#11162d]/80 px-4 py-2 shadow-[0_0_20px_rgba(34,211,238,0.15)] backdrop-blur-xl">
            <span className="live-dot h-3 w-3 rounded-full bg-emerald-400" />
            <span className="text-[15px] font-medium">API Access</span>
          </div>
        </div>

        {/* ================= HEADING ================= */}

        <div className="mx-auto mt-7 max-w-[900px] text-center">
          <h1 className="anim-heading text-[40px] font-bold leading-[1.1] tracking-[-1.5px] sm:text-[52px] lg:text-[58px]">
            Power Your Product With
            <br />
            <span className="gradient-text bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Better Infrastructure
            </span>
          </h1>

          <p className="anim-subhead mx-auto mt-5 max-w-[670px] text-[16px] leading-7 text-slate-300 sm:text-[18px]">
            Complete the onboarding form to access powerful APIs built for
            modern business finance.
          </p>
        </div>

        {/* ================= BUTTONS ================= */}

        <div className="anim-buttons mt-8 flex flex-wrap justify-center gap-5">
          <button
            className="
              cta-primary
              group
              flex
              items-center
              gap-3
              rounded-full
              bg-gradient-to-r
              from-indigo-600
              via-violet-600
              to-fuchsia-500
              px-8
              py-4
              text-[15px]
              font-semibold
              shadow-[0_0_30px_rgba(124,58,237,0.5)]
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_0_45px_rgba(168,85,247,0.7)]
            "
          >
            <span className="shine" />
            Get API Access
            <ArrowRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

          <button
            className="
              rounded-full
              border
              border-indigo-400/50
              bg-[#0b1025]/70
              px-9
              py-4
              text-[15px]
              font-medium
              text-white
              transition-all
              duration-300
              hover:border-violet-400
              hover:bg-indigo-500/10
              hover:scale-105
            "
          >
            Contact Us
          </button>
        </div>

        {/* ==================================================
            MAIN VISUAL
        ================================================== */}

        <div ref={visualRef} className="anim-visual relative mt-14 mx-auto max-w-[1280px]">
          <ConnectorLayer
            containerRef={visualRef}
            nodeRefs={nodeRefs}
            dashboardRef={dashboardRef}
          />

          {/* ===============================================
              3 COLUMN LAYOUT
          =============================================== */}

          <div
            className="
              relative
              z-20
              grid
              grid-cols-1
              gap-15

              lg:min-h-[430px]
              lg:grid-cols-[210px_minmax(0,760px)_210px]
              lg:items-center
              lg:justify-center
              lg:gap-[50px]
            "
          >
            {/* ================= LEFT COLUMN ================= */}

            <div
              className="
                relative
                z-30
                order-2
                flex
                flex-col
                gap-18

                lg:order-1
                lg:h-[430px]
                lg:justify-between
                lg:gap-0
                lg:py-[25px]
                lg:-translate-x-11
              "
            >
              <FeatureCard
                ref={iconRefs.fastIntegration}
                icon={Zap}
                title="Fast Integration"
                description={
                  <>
                    Get started in minutes
                    <br />
                    with our simple APIs.
                  </>
                }
                align="left"
                delay={0}
              />

              <FeatureCard
                ref={iconRefs.enterpriseGrade}
                icon={ShieldCheck}
                title="Enterprise Grade"
                description={
                  <>
                    Secure, reliable and
                    <br />
                    built for scale.
                  </>
                }
                align="left"
                delay={80}
              />
            </div>

            {/* ================= CENTER ================= */}

            <div className="relative z-20 order-1 w-full lg:order-2">
              <Dashboard ref={dashboardRef} />
            </div>

            {/* ================= RIGHT COLUMN ================= */}

            <div
              className="
                relative
                z-30
                order-6
                flex
                flex-col
                gap-14

                lg:h-[430px]
                lg:justify-between
                lg:gap-0
                lg:py-[25px]
                lg:translate-x-49
              "
            >
              <FeatureCard
                ref={iconRefs.flexibleSolutions}
                icon={Box}
                title="Flexible Solutions"
                description={
                  <>
                    APIs for payments,
                    <br />
                    KYC, payouts and more.
                  </>
                }
                align="right"
                delay={160}
              />

              <FeatureCard
                ref={iconRefs.buildGrow}
                icon={BarChart3}
                title="Build & Grow"
                description={
                  <>
                    Focus on your product
                    <br />
                    while we handle the
                    <br />
                    infrastructure.
                  </>
                }
                align="right"
                delay={240}
                className="lg:translate-y-7"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}