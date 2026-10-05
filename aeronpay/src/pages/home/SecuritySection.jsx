import React from "react";
import {
  ShieldCheck,
  LockKeyhole,
  SlidersHorizontal,
  BarChart3,
  Puzzle,
  CheckCircle2,
  ArrowUpRight,
  Target,
} from "lucide-react";

const cards = [
  {
    title: (
      <>
        Always watching,
        <br />
        never slowing
      </>
    ),
    description:
      "Real-time intelligence that detects and stops threats without interrupting your business momentum.",
    icon: ShieldCheck,
    color: "blue",
  },
  {
    title: (
      <>
        Integrate freely,
        <br />
        operate securely
      </>
    ),
    description:
      "Plug into powerful APIs and systems without exposing your platform to unnecessary risk.",
    icon: Puzzle,
    color: "purple",
  },
  {
    title: (
      <>
        Complete clarity across
        <br />
        transactions
      </>
    ),
    description:
      "Get complete visibility with real-time insights that turn every transaction into something you understand and control.",
    icon: CheckCircle2,
    color: "cyan",
  },
  {
    title: (
      <>
        Control without
        <br />
        constant effort
      </>
    ),
    description:
      "Sets rules, limits and flows once—your system handles everything without manual intervention.",
    icon: SlidersHorizontal,
    color: "orange",
  },
];

const colorStyles = {
  blue: {
    border: "border-blue-500/40",
    glow: "shadow-[0_0_40px_rgba(37,99,235,0.12)]",
    hoverGlow: "hover:shadow-[0_0_55px_rgba(37,99,235,0.42)]",
    text: "text-blue-400",
    iconGlow: "group-hover:drop-shadow-[0_0_18px_rgba(96,165,250,0.95)]",
    line: "bg-blue-400",
    iconBorder: "border-blue-400/60",
    iconBg: "bg-blue-500/5",
    button:
      "border-blue-400/40 text-blue-300 shadow-[0_0_20px_rgba(37,99,235,0.2)]",
  },

  purple: {
    border: "border-purple-500/40",
    glow: "shadow-[0_0_40px_rgba(139,92,246,0.10)]",
    hoverGlow: "hover:shadow-[0_0_55px_rgba(139,92,246,0.38)]",
    text: "text-purple-400",
    iconGlow: "group-hover:drop-shadow-[0_0_18px_rgba(192,132,252,0.95)]",
    line: "bg-purple-400",
    iconBorder: "border-purple-400/60",
    iconBg: "bg-purple-500/5",
    button:
      "border-purple-400/40 text-purple-300 shadow-[0_0_20px_rgba(139,92,246,0.2)]",
  },

  cyan: {
    border: "border-cyan-400/40",
    glow: "shadow-[0_0_40px_rgba(34,211,238,0.10)]",
    hoverGlow: "hover:shadow-[0_0_55px_rgba(34,211,238,0.4)]",
    text: "text-cyan-300",
    iconGlow: "group-hover:drop-shadow-[0_0_18px_rgba(103,232,249,0.95)]",
    line: "bg-cyan-300",
    iconBorder: "border-cyan-300/60",
    iconBg: "bg-cyan-400/5",
    button:
      "border-cyan-300/40 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.2)]",
  },

  orange: {
    border: "border-orange-400/40",
    glow: "shadow-[0_0_40px_rgba(251,146,60,0.10)]",
    hoverGlow: "hover:shadow-[0_0_55px_rgba(251,146,60,0.4)]",
    text: "text-orange-400",
    iconGlow: "group-hover:drop-shadow-[0_0_18px_rgba(251,146,60,0.95)]",
    line: "bg-orange-400",
    iconBorder: "border-orange-400/60",
    iconBg: "bg-orange-500/5",
    button:
      "border-orange-400/40 text-orange-300 shadow-[0_0_20px_rgba(251,146,60,0.2)]",
  },
};

function SecurityCard({ card }) {
  const Icon = card.icon;
  const style = colorStyles[card.color];

  return (
    <div
      className={`
        group relative min-h-[418px] overflow-hidden rounded-[22px]
        border ${style.border}
        bg-[linear-gradient(145deg,rgba(20,32,58,0.9),rgba(8,16,35,0.96))]
        p-7 transition-all duration-500
        hover:-translate-y-2 hover:scale-[1.01]
        ${style.glow} ${style.hoverGlow}
      `}
    >
      {/* top glow */}
      <div
        className={`absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full ${style.iconBg} blur-3xl`}
      />

      {/* Icon */}
      <div className="relative flex justify-center pt-3">
        {/* Orbit */}
        <div
          className={`absolute top-4 h-[68px] w-[190px] rounded-[50%] border ${style.border} opacity-70`}
        />

        <div
          className={`
            relative z-10 flex h-[138px] w-[138px] items-center justify-center
            rounded-full border ${style.iconBorder}
            ${style.iconBg}
            transition-all duration-500 group-hover:scale-110 group-hover:border-opacity-100
            shadow-[inset_0_0_35px_rgba(50,100,255,0.08)]
          `}
        >
          <div
            className={`absolute inset-4 rounded-full border ${style.border} opacity-70`}
          />

          <Icon
            size={58}
            strokeWidth={1.6}
            className={`${style.text} ${style.iconGlow} relative z-10 transition-all duration-500 group-hover:scale-110`}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative mt-5 pr-12">
        <h3 className="text-[22px] font-semibold leading-[1.35] tracking-[-0.3px] text-white">
          {card.title}
        </h3>

        <div className={`mt-4 h-[2px] w-12 ${style.line}`} />

        <p className="mt-4 max-w-[310px] text-[16px] leading-[1.6] text-slate-400">
          {card.description}
        </p>
      </div>

      {/* Bottom button */}
      <button
        className={`
          absolute bottom-8 right-7 z-10 flex h-11 w-11 items-center justify-center
          rounded-full border ${style.button}
          transition-all duration-300
          group-hover:scale-110
        `}
      >
        <ArrowUpRight size={20} strokeWidth={1.8} />
      </button>

      {/* subtle corner light */}
      <div
        className={`absolute bottom-0 left-0 h-32 w-32 ${style.iconBg} blur-3xl`}
      />
    </div>
  );
}

function HeroSecurityGraphic() {
  return (
    <div className="relative mx-auto flex h-[360px] w-full max-w-[620px] items-center justify-center overflow-hidden">
      {/* Background circles */}
      <div className="absolute h-[500px] w-[500px] rounded-full border border-blue-500/10" />
      <div className="absolute h-[410px] w-[410px] rounded-full border border-blue-500/20" />
      <div className="absolute h-[320px] w-[320px] rounded-full border border-blue-400/20" />

      {/* orbit */}
      <div className="absolute h-[230px] w-[430px] rotate-[-10deg] rounded-[50%] border border-blue-500/40" />

      <div className="absolute h-[150px] w-[350px] rotate-[15deg] rounded-[50%] border border-blue-400/30" />

      {/* random dots */}
      <div className="absolute right-8 top-3 grid grid-cols-7 gap-3 opacity-40">
        {Array.from({ length: 35 }).map((_, i) => (
          <span
            key={i}
            className="h-[3px] w-[3px] rounded-full bg-blue-400"
          />
        ))}
      </div>

      {/* left floating */}
      <div className="absolute left-10 top-[145px] flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/50 bg-cyan-400/5 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
        <BarChart3 size={27} className="text-cyan-300" />
      </div>

      {/* top left floating */}
      <div className="absolute left-[23%] top-[15%] flex h-16 w-16 items-center justify-center rounded-full border border-purple-400/60 bg-purple-500/5 shadow-[0_0_30px_rgba(139,92,246,0.2)]">
        <Target size={27} className="text-purple-300" />
      </div>

      {/* right floating */}
      <div className="absolute right-8 top-[34%] flex h-16 w-16 items-center justify-center rounded-full border border-orange-400/60 bg-orange-500/5 shadow-[0_0_30px_rgba(249,115,22,0.2)]">
        <SlidersHorizontal size={27} className="text-orange-400" />
      </div>

      {/* dots on orbit */}
      <span className="absolute left-[33%] top-[22%] h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_15px_#60a5fa]" />
      <span className="absolute right-[20%] top-[27%] h-2 w-2 rounded-full bg-blue-400" />
      <span className="absolute bottom-[25%] left-[31%] h-2 w-2 rounded-full bg-blue-400" />

      {/* Platform */}
      <div className="absolute bottom-[32px] h-[80px] w-[310px] rounded-[50%] border border-blue-400/50 bg-blue-500/10 shadow-[0_0_45px_rgba(37,99,235,0.45)]">
        <div className="absolute inset-[16px] rounded-[50%] border border-blue-400/30" />
        <div className="absolute bottom-0 left-1/2 h-8 w-[200px] -translate-x-1/2 rounded-full bg-blue-500/40 blur-2xl" />
      </div>

      {/* Shield */}
      <div className="relative z-10 flex h-[245px] w-[200px] items-center justify-center">
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(145deg,rgba(142,160,255,0.9),rgba(38,74,200,0.8),rgba(13,30,104,0.95))]
            [clip-path:polygon(50%_0%,90%_15%,90%_58%,76%_82%,50%_100%,24%_82%,10%_58%,10%_15%)]
            shadow-[0_0_50px_rgba(73,110,255,0.55)]
          "
        />

        <div
          className="
            absolute inset-[18px]
            border border-blue-200/50
            bg-[linear-gradient(145deg,rgba(20,32,100,0.8),rgba(9,18,60,0.95))]
            [clip-path:polygon(50%_0%,90%_15%,90%_58%,76%_82%,50%_100%,24%_82%,10%_58%,10%_15%)]
          "
        />

        <div className="relative z-20 flex h-20 w-20 items-center justify-center rounded-xl border border-blue-200/70 bg-blue-400/20 shadow-[0_0_30px_rgba(96,165,250,0.5)]">
          <LockKeyhole size={42} className="text-blue-100" />
        </div>
      </div>

      {/* Bottom light */}
      <div className="absolute bottom-10 h-16 w-56 rounded-full bg-blue-500/30 blur-3xl" />
    </div>
  );
}

export default function SecuritySection() {
  return (
    <section className="relative overflow-hidden bg-[#030a1c] px-4 py-8 font-sans text-white md:px-8 lg:px-10">
      <div
        className="
          relative mx-auto max-w-[1580px] overflow-hidden
          rounded-[36px] border border-indigo-400/40
          bg-[radial-gradient(circle_at_top_left,rgba(31,55,130,0.28),transparent_35%),linear-gradient(135deg,#0a142b_0%,#050b1b_55%,#071226_100%)]
          px-6 py-12 shadow-[0_0_60px_rgba(20,40,120,0.12)]
          md:px-12 lg:px-[92px] lg:py-[54px]
        "
      >
        {/* decorative left dots */}
        <div className="absolute bottom-24 left-8 grid grid-cols-4 gap-3 opacity-40">
          {Array.from({ length: 28 }).map((_, i) => (
            <span
              key={i}
              className="h-[3px] w-[3px] rounded-full bg-blue-500"
            />
          ))}
        </div>

        {/* TOP */}
        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-400/35 bg-blue-500/[0.04] px-4 py-3 shadow-[0_0_30px_rgba(37,99,235,0.08)]">
              <ShieldCheck size={20} className="text-blue-400" />

              <span className="text-[15px] font-medium text-slate-200">
                Built to Protect. Designed to Perform.
              </span>
            </div>

            <h2 className="mt-7 max-w-[790px] text-[42px] font-semibold leading-[1.28] tracking-[-1.5px] text-slate-100 md:text-[52px] lg:text-[48px] xl:text-[50px]">
              Security isn’t a feature here;
              <br />
              it’s the{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
                foundation
              </span>{" "}
              everything runs on.
            </h2>

            <p className="mt-5 max-w-[700px] text-[18px] leading-[1.7] text-slate-400 md:text-[20px]">
              Every transaction, every API, every interaction is protected by
              systems designed to stay invisible yet unstoppable—so your
              business moves faster, safer and always in control without ever
              thinking about risk.
            </p>
          </div>

          {/* Right */}
          <HeroSecurityGraphic />
        </div>

        {/* CARDS */}
        <div className="relative z-10 mt-4 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => (
            <SecurityCard key={index} card={card} />
          ))}
        </div>
      </div>

    </section>
  );
}