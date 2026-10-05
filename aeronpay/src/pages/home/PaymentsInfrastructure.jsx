import { Check, LockKeyhole, Zap, Globe2, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import logo from "../../assets/images/light-logo.svg";

const PaymentsInfrastructure = () => {
  const featureCardsRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const cards = gsap.utils.toArray(".feature-card");

      gsap.set(".feature-card", { autoAlpha: 0, xPercent: -100 });
      gsap.set(".feature-card-icon", { autoAlpha: 0, scale: 0.7, rotate: -12 });
      gsap.set(".feature-card-copy", { autoAlpha: 0, x: -20 });
      gsap.set(".feature-card-arrow", { autoAlpha: 0, x: -12 });

      [...cards].reverse().forEach((card, index) => {
        const delay = index * 0.20;

        gsap.to(card, { autoAlpha: 1, xPercent: 0, duration: 0.45, delay, ease: "power3.out" });
        gsap.to(card.querySelector(".feature-card-icon"), {
          autoAlpha: 1,
          scale: 1,
          rotate: 0,
          duration: 0.3,
          delay: delay + 0.1,
          ease: "power3.out",
        });
        gsap.to(card.querySelector(".feature-card-copy"), {
          autoAlpha: 1,
          x: 0,
          duration: 0.3,
          delay: delay + 0.18,
          ease: "power3.out",
        });
        gsap.to(card.querySelector(".feature-card-arrow"), {
          autoAlpha: 1,
          x: 0,
          duration: 0.22,
          delay: delay + 0.26,
          ease: "power3.out",
        });
      });
    }, featureCardsRef);

    return () => context.revert();
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#040b1f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(55,81,255,0.12),_transparent_42%),radial-gradient(circle_at_right,_rgba(120,49,255,0.16),_transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 pb-14 pt-12 sm:px-8 lg:px-10 lg:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_1fr]">
          <div className="w-full max-w-[820px]">
            <div className="mb-15 inline-flex items-center gap-3 rounded-full border border-[#2a3d70] bg-[#0d1735]/90 px-4 py-2 shadow-[0_0_25px_rgba(99,102,241,0.18)] backdrop-blur-sm">
              <span className="relative flex h-4 w-4 items-center justify-center">
                <span className="absolute h-4 w-4 rounded-full bg-[#8b5cf6] opacity-60 animate-ping"></span>
                <span className="relative flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#8b5cf6] shadow-[0_0_14px_#8b5cf6]">
                  <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
                </span>
              </span>
              <span className="text-[11px] font-medium tracking-[0.25em] text-[#9ec3ff] uppercase">
                Payments Infrastructure
              </span>
            </div>

            <h1 className="w-full text-2xl font-semibold leading-[0.96] tracking-[-0.06em] text-[#dbeafe] sm:text-4xl lg:text-[4.1rem]">
              <span className="mb-3 block">Enterprise-Grade</span>
              <span className="mb-3 block bg-gradient-to-r from-[#dfe8ff] via-[#a9c4ff] to-[#6d7cfb] bg-clip-text text-transparent">
                Payment & Verification
              </span>
              <span className="block">
                APIs for <span className="bg-gradient-to-r from-[#3b82f6] via-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">B2B Growth</span>
              </span>
            </h1>

            <p className="mt-8 max-w-[620px] text-lg leading-8 text-[#9aaad1]">
              Built for the moments you never notice but always depend on—when
              money moves instantly, systems respond flawlessly and everything
              works exactly as expected, creating the kind of payment experience
              modern businesses should never have to think twice about.
            </p>

            <div ref={featureCardsRef} className="mt-9 grid max-w-[700px] grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <FeatureCard
                icon={<ShieldIcon />}
                title="Enterprise Security"
                subtitle="Bank-level security & compliance you can trust."
                accent="emerald"
              />

              <FeatureCard
                icon={<LightningIcon />}
                title="Fast Processing"
                subtitle="Lightning-fast transactions that never slow you down."
                accent="rose"
              />

              <FeatureCard
                icon={<IntegrationIcon />}
                title="Integration Ready"
                subtitle="Easy integration with powerful & flexible APIs."
                accent="cyan"
              />
            </div>

            <div className="mt-8 grid max-w-[720px] grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:grid-cols-4">
              <StatItem value="500+" label="Enterprise Clients" />
              <StatItem value="99.99%" label="Uptime Reliability" />
              <StatItem value="120+" label="Countries Supported" />
              <StatItem value="PCI DSS" label="Level 1 Compliant" />
            </div>
          </div>

          <HeroVisual />
        </div>
      </div>

    </section>
  );
};

export default PaymentsInfrastructure;

function HeroVisual() {
  const visualRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const orbitTimeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });

      orbitTimeline
        .set(".hero-orbit-ring", { autoAlpha: 0, scale: 0.65, rotation: 0 })
        .set(".dashboard", { autoAlpha: 0, scale: 0.72, y: 35 })
        .set(".hero-floating-card", { autoAlpha: 0, scale: 0.55, rotation: 0 })
        .set(".graph-line", { strokeDasharray: 1000, strokeDashoffset: 1000 })
        .to(".hero-orbit-ring", { autoAlpha: 1, scale: 1, duration: 1, ease: "power3.out" })
        .to(".dashboard", { autoAlpha: 1, scale: 1, y: 0, duration: 0.9, ease: "back.out(1.4)" }, "-=0.35")
        .to(".graph-line", { strokeDashoffset: 0, duration: 2, ease: "power2.out" }, "-=0.15")
        .to(".dashboard-stat", {
          keyframes: [
            { autoAlpha: 0, y: 18, scale: 0.8, duration: 0 },
            { autoAlpha: 1, y: 0, scale: 1, duration: 0.55, ease: "back.out(1.7)" },
            { y: -5, duration: 0.2, ease: "power1.out" },
            { y: 0, duration: 0.2, ease: "power1.inOut" },
          ],
          stagger: 0.12,
        }, "-=1.2")
        .to(".hero-floating-card", { autoAlpha: 1, scale: 1, duration: 0.55, stagger: 0.18, ease: "back.out(1.5)" }, "-=0.25")
        .to(".hero-orbit-ring", { rotation: -360, duration: 4, ease: "power2.inOut" }, "+=0.8")
        .to(".hero-floating-card", { rotation: 360, duration: 4, ease: "power2.inOut" }, "<")
        .to(".hero-orbit-ring", { rotation: 0, duration: 4, ease: "power2.inOut" })
        .to(".hero-floating-card", { rotation: 0, duration: 4, ease: "power2.inOut" }, "<");

      gsap.to(".hero-orbit-dot", { scale: 1.6, opacity: 0.4, duration: 1.2, repeat: -1, yoyo: true, stagger: 0.3, ease: "sine.inOut" });
      gsap.to(".dashboard", {
        boxShadow: "0 0 40px rgba(80,100,255,.18), 0 0 100px rgba(130,60,255,.08)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, visualRef);

    return () => context.revert();
  }, []);

  return (
    <div ref={visualRef} className="relative flex h-[520px] w-full items-center justify-center overflow-visible bg-transparent sm:h-[600px] lg:h-[650px] lg:translate-x-[1%]">
      <div className="absolute h-[520px] w-[550px] rounded-full bg-blue-600/10 blur-[100px]" />
      <div className="hero-orbit-ring absolute left-1/2 top-1/2 -ml-[250px] -mt-[250px] h-[500px] w-[500px] rounded-full border border-purple-500/40 shadow-[0_0_25px_rgba(120,70,255,.25)]">
        <span className="hero-orbit-dot absolute left-[65px] top-[65px] h-3 w-3 rounded-full bg-purple-500 shadow-[0_0_20px_#a855f7]" />
        <span className="hero-orbit-dot absolute right-[65px] top-[65px] h-3 w-3 rounded-full bg-yellow-400 shadow-[0_0_20px_#facc15]" />
        <span className="hero-orbit-dot absolute bottom-[65px] right-[65px] h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_20px_#38bdf8]" />
        <span className="hero-orbit-dot absolute bottom-[65px] left-[65px] h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />

        <FloatingCard className="hero-expense-card absolute left-[175px] top-[-35px]" icon="▣" title="Expense Card" subtitle="Track, Spend & Manage" gradient="from-purple-700 to-purple-900" />
        <FloatingCard className="hero-gold-card absolute left-[425px] top-[175px]" icon="◆" title="Digital Gold" subtitle="Buy, Sell & Secure" gradient="from-yellow-700 to-yellow-900" />
        <FloatingCard className="hero-gift-card absolute left-[175px] top-[500px]" icon="+" title="Gift Card" subtitle="Digital Gifting Made Easy" gradient="from-blue-700 to-blue-900" />
        <FloatingCard className="hero-prepaid-card absolute left-[-75px] top-[175px]" icon="▣" title="Prepaid Card" subtitle="Track & Control Spending" gradient="from-teal-700 to-cyan-900" />
      </div>

      <div className="dashboard relative z-8 w-[280px] max-w-[calc(100%-2rem)] rounded-2xl border border-blue-400/30 bg-gradient-to-br from-[#071b46] via-[#071634] to-[#050b1d] p-4 shadow-[0_0_40px_rgba(50,80,255,.15)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2"><img src={logo} alt="Aeronpay" className="h-6 w-auto" /></div>
          <span className="rounded-full border border-green-400/30 bg-green-500/10 px-3 py-1 text-xs text-green-400">● Live</span>
        </div>
        <div className="mt-5"><p className="text-xs tracking-widest text-cyan-400">ECOSYSTEM INSIGHTS</p><h3 className="mt-1 text-2xl text-white">Platform Momentum</h3><p className="mt-1 text-sm text-gray-400">Scaling together, relentlessly</p></div>
        <div className="relative mt-3 h-[140px] overflow-hidden"><svg viewBox="0 0 400 170" className="absolute inset-0 h-full w-full"><defs><linearGradient id="heroGraphGradient" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#a855f7" /><stop offset="100%" stopColor="#38bdf8" /></linearGradient></defs><path className="graph-line" d="M10 135 C45 95, 65 110, 90 120 C120 135, 135 90, 165 100 C195 110, 210 120, 235 90 C265 55, 280 100, 305 75 C330 50, 350 65, 385 20" fill="none" stroke="url(#heroGraphGradient)" strokeWidth="4" strokeLinecap="round" /><circle cx="165" cy="100" r="5" fill="#a855f7" /><circle cx="305" cy="75" r="5" fill="#38bdf8" /></svg><div className="absolute bottom-6 right-0 rounded border border-cyan-400/30 bg-cyan-500/10 px-2 py-1 text-xs text-cyan-300">+128%</div></div>
        <div className="dashboard-stats grid grid-cols-4 gap-2"><Stat icon="✓" value="99.99%" label="Uptime" /><Stat icon="↗" value="2.1B+" label="Transactions" /><Stat icon="◉" value="150+" label="Countries" /><Stat icon="⚡" value="<200ms" label="Success Rate" /></div>
      </div>

    </div>
  );
}

function FloatingCard({ className, icon, title, subtitle, gradient }) {
  return <div className={`${className} hero-floating-card z-20 w-[135px] rounded-xl border border-white/10 bg-gradient-to-br ${gradient} px-2.5 py-2.5 shadow-[0_10px_40px_rgba(0,0,0,.35)] backdrop-blur-xl`}><div className="flex items-center gap-1.5"><div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs text-white">{icon}</div><div className="min-w-0"><h4 className="truncate text-[11px] font-semibold text-white">{title}</h4><p className="mt-0.5 truncate text-[8px] text-white/60">{subtitle}</p></div></div></div>;
}

function Stat({ icon, value, label }) {
  return <div className="dashboard-stat rounded-xl border border-white/5 bg-white/[0.04] p-0 text-center"><div className="text-sm">{icon}</div><div className="mt-1 text-sm font-semibold text-white">{value}</div><div className="mt-1 text-[9px] text-gray-500">{label}</div></div>;
}

function OrbitFeature({ className, icon, tone, title, subtitle }) {
  return (
    <div className={`floating-card ${className}`}>
      <div className={`floating-icon ${tone}`}>{icon}</div>
      <div>
        <strong>{title}</strong>
        <small>{subtitle}</small>
      </div>
    </div>
  );
}

function RightHeroVisual() {
  return (
    <>
      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spinReverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        @keyframes globeRotate { 0% { transform: rotate(0deg) scale(1); } 50% { transform: rotate(180deg) scale(1.08); } 100% { transform: rotate(360deg) scale(1); } }
        @keyframes cardFloat { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        @keyframes badgeFloat { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes pingSlow { 0% { transform: scale(0.9); opacity: 0.8; } 70% { transform: scale(1.2); opacity: 0; } 100% { transform: scale(1.3); opacity: 0; } }
        @keyframes scan { 0% { transform: translateY(-16px); opacity: 0.3; } 50% { transform: translateY(18px); opacity: 1; } 100% { transform: translateY(-16px); opacity: 0.3; } }
      `}</style>

      <div className="relative h-[620px] w-full overflow-hidden">
        <div className="absolute right-[12%] top-[8%] h-[430px] w-[430px] rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="absolute right-[3%] bottom-[11%] h-[260px] w-[500px] rounded-full bg-violet-600/10 blur-[100px]" />

        <div className="absolute right-[-5%] top-[2%] h-[550px] w-[700px]">
          <div className="absolute left-1/2 top-1/2 h-[250px] w-[620px] -translate-x-1/2 -translate-y-1/2 rotate-[-18deg] rounded-[50%] border border-blue-500/50 shadow-[0_0_25px_rgba(59,130,246,.18)] animate-[spin_14s_linear_infinite]">
            <OrbitLight />
          </div>

          <div className="absolute left-1/2 top-1/2 h-[205px] w-[600px] -translate-x-1/2 -translate-y-1/2 rotate-[20deg] rounded-[50%] border border-violet-500/40 animate-[spinReverse_18s_linear_infinite]">
            <OrbitLight color="violet" />
          </div>

          <div className="absolute left-1/2 top-1/2 h-[155px] w-[540px] -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] rounded-[50%] border border-cyan-400/30 animate-[spin_22s_linear_infinite]">
            <OrbitLight color="cyan" />
          </div>

          <div className="absolute right-[25px] top-[0px] h-[470px] w-[470px] overflow-hidden rounded-full bg-[radial-gradient(circle_at_35%_30%,#2937ff,#080b38_55%,#02030d_75%)] shadow-[0_0_70px_rgba(72,80,255,.35)]">
            <div
              className="absolute inset-[-8%] rounded-full opacity-80 animate-[globeRotate_12s_linear_infinite]"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(115,120,255,.9) 1px, transparent 1.5px)`,
                backgroundSize: "8px 8px",
                maskImage: "radial-gradient(circle, black 55%, transparent 72%)",
                WebkitMaskImage: "radial-gradient(circle, black 55%, transparent 72%)",
              }}
            />
            <div className="absolute inset-[4%] rounded-full border border-blue-400/30 animate-[globeRotate_8s_linear_infinite]" />
            <div className="absolute inset-[15%] rotate-[60deg] rounded-full border border-violet-400/25" />
            <div className="absolute left-[5%] right-[5%] top-1/2 h-[120px] -translate-y-1/2 rounded-[50%] border border-blue-300/20" />
            <div className="absolute left-[12%] right-[12%] top-[35%] h-[90px] rounded-[50%] border border-blue-300/15" />
          </div>

          <PaymentCard />

          <FloatingBadge className="absolute right-[18px] top-[18px]" icon={<LockKeyhole size={20} />} title="Secure" subtitle="Bank-Level Security" color="cyan" />
          <FloatingBadge className="absolute left-[8px] top-[180px]" icon={<Zap size={20} />} title="Real-time" subtitle="Instant Processing" color="red" />
          <FloatingBadge className="absolute right-[-8px] top-[408px]" icon={<Globe2 size={20} />} title="Global" subtitle="120+ Countries" color="blue" />

          <div className="absolute bottom-[18px] left-1/2 -translate-x-1/2">
            <div
              className="absolute bottom-[86px] left-1/2 h-[200px] w-[150px] -translate-x-1/2 bg-gradient-to-t from-violet-500/40 via-blue-500/15 to-transparent blur-[20px] animate-pulse"
              style={{ clipPath: "polygon(45% 100%, 55% 100%, 85% 0, 15% 0)" }}
            />

            <div className="relative h-[55px] w-[420px]">
              <div className="absolute inset-0 rounded-[50%] border-2 border-blue-500/70 shadow-[0_0_30px_rgba(70,90,255,.5)]" />
              <div className="absolute left-[7%] right-[7%] top-[8px] h-[38px] rounded-[50%] border border-violet-500/60 animate-[spin_10s_linear_infinite]" />
              <div className="absolute left-[18%] right-[18%] top-[15px] h-[25px] rounded-[50%] border border-cyan-400/50" />
              <div className="absolute left-1/2 top-1/2 h-[12px] w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 blur-[8px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function PaymentCard() {
  return (
    <div className="absolute right-[78px] top-[168px] z-20 h-[345px] w-[255px] rotate-[9deg] rounded-[25px] border border-blue-400/70 bg-gradient-to-br from-[#17265d]/95 via-[#080d2b]/95 to-[#09031e]/95 p-5 shadow-[0_0_50px_rgba(70,80,255,.35)] animate-[cardFloat_4s_ease-in-out_infinite]">
      <div className="absolute -inset-[2px] -z-10 rounded-[27px] bg-gradient-to-br from-cyan-500 via-blue-500 to-violet-600 opacity-50 blur-md" />

      <div className="flex justify-end">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white font-black text-violet-600 shadow-lg">
          A
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="relative flex h-[100px] w-[100px] items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-[pingSlow_2.5s_ease-in-out_infinite]" />
          <div className="absolute inset-[10px] rounded-full border border-cyan-400/40" />
          <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full border-2 border-cyan-400 bg-cyan-400/10 shadow-[0_0_25px_rgba(34,211,238,.6)]">
            <Check size={34} className="text-cyan-300" strokeWidth={3} />
          </div>
        </div>
      </div>

      <div className="mt-5 text-center">
        <h3 className="text-xl font-semibold text-white">Payment Verified</h3>
        <p className="mt-1 text-xs text-slate-400">Transaction completed successfully</p>
      </div>

      <div className="absolute bottom-6 left-5 right-5 rounded-xl border border-white/5 bg-white/[0.04] p-4">
        <div className="grid grid-cols-3 gap-2 text-center">
          <Info title="Amount" value="$25,680.00" />
          <Info title="Status" value="Completed" valueClass="text-cyan-400" />
          <Info title="Time" value="2.4s" />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, subtitle, accent }) {
  const accentClass = {
    emerald: "border-emerald-400/25 bg-emerald-500/5 hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]",
    rose: "border-red-400/25 bg-red-500/5 hover:shadow-[0_0_30px_rgba(244,63,94,0.25)]",
    cyan: "border-cyan-400/25 bg-cyan-500/5 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]",
  };

  return (
    <div className={`feature-card group flex h-full min-h-[92px] items-start gap-3 rounded-xl border bg-[#111827]/60 px-4 py-3 transition-all duration-500 hover:-translate-y-1 ${accentClass[accent]}`}>
      <div className={`feature-card-icon mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-all duration-500 ${accent === "emerald"
          ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-400 group-hover:shadow-[0_0_24px_rgba(16,185,129,0.7)]"
          : accent === "rose"
            ? "border-red-400/30 bg-red-500/10 text-red-400 group-hover:shadow-[0_0_24px_rgba(244,63,94,0.7)]"
            : "border-cyan-400/30 bg-cyan-500/10 text-cyan-400 group-hover:shadow-[0_0_24px_rgba(34,211,238,0.7)]"
        }`}>
        {icon}
      </div>

      <div className="feature-card-copy min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0 flex-1 text-[17px] font-medium leading-5 text-white">{title}</h3>
          <span className="feature-card-arrow shrink-0 text-lg leading-5 text-white/80">→</span>
        </div>
        <p className="mt-1 text-[12px] leading-5 text-[#9aaad1]">{subtitle}</p>
      </div>
    </div>
  );
}

function StatItem({ value, label }) {
  const valueMatch = value.match(/^([^0-9]*)([0-9.]+)(.*)$/);
  const targetValue = valueMatch ? Number(valueMatch[2]) : 0;
  const decimalPlaces = valueMatch?.[2].split(".")[1]?.length ?? 0;
  const [count, setCount] = useState(valueMatch ? 0 : targetValue);
  const statRef = useRef(null);

  useEffect(() => {
    if (!valueMatch) return undefined;

    let animationFrame;
    let hasStarted = false;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || hasStarted) return;

      hasStarted = true;
      const duration = 1400;
      const startTime = performance.now();

      const animateCount = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        setCount(targetValue * easedProgress);

        if (progress < 1) animationFrame = requestAnimationFrame(animateCount);
      };

      animationFrame = requestAnimationFrame(animateCount);
    }, { threshold: 0.35 });

    observer.observe(statRef.current);
    return () => {
      observer.disconnect();
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [targetValue, value]);

  const displayValue = valueMatch
    ? `${valueMatch[1]}${count.toFixed(decimalPlaces)}${valueMatch[3]}`
    : value;

  return (
    <div ref={statRef} className="flex items-center gap-3 border border-white/10 bg-white/[0.02] px-3 py-3 rounded-xl backdrop-blur-sm">
      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-white/80">
        {label.includes("Clients") ? "👥" : label.includes("Uptime") ? "⚡" : label.includes("Countries") ? "🌍" : "🛡️"}
      </div>
      <div>
        <div className="text-xl font-semibold text-white">{displayValue}</div>
        <div className="text-[11px] text-[#a8b2d1]">{label}</div>
      </div>
    </div>
  );
}

function FloatingBadge({ icon, title, subtitle, color = "blue", className }) {
  const colors = {
    cyan: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30",
    blue: "text-blue-400 bg-blue-400/10 border-blue-400/30",
    red: "text-red-400 bg-red-400/10 border-red-400/30",
    violet: "text-violet-400 bg-violet-400/10 border-violet-400/30",
  };

  return (
    <div className={`${className} z-30 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#080c22]/90 px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,.35)] backdrop-blur-xl animate-[badgeFloat_4s_ease-in-out_infinite]`}>
      <div className={`flex h-11 w-11 items-center justify-center rounded-xl border ${colors[color]}`}>{icon}</div>
      <div>
        <div className="text-sm font-semibold text-white">{title}</div>
        <div className="mt-1 whitespace-nowrap text-[11px] text-slate-400">{subtitle}</div>
      </div>
    </div>
  );
}

function Info({ title, value, valueClass = "text-white" }) {
  return (
    <div>
      <p className="text-[10px] text-slate-500">{title}</p>
      <p className={`mt-1 text-[11px] font-semibold ${valueClass}`}>{value}</p>
    </div>
  );
}

function OrbitLight({ color = "blue" }) {
  return (
    <span
      className={`absolute left-1/2 -top-[5px] h-2.5 w-2.5 -translate-x-1/2 rounded-full shadow-[0_0_15px_currentColor] ${color === "violet"
          ? "bg-violet-400 text-violet-400"
          : color === "cyan"
            ? "bg-cyan-400 text-cyan-400"
            : "bg-blue-400 text-blue-400"
        }`}
    />
  );
}

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 5 6v6c0 4.4 3 7.5 7 9 4-1.5 7-4.6 7-9V6l-7-3Z" />
      <path d="m9.5 12 1.7 1.7 3.9-4.2" />
    </svg>
  );
}

function LightningIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 2 3 14h7l-1 8 11-14h-8l1-6Z" />
    </svg>
  );
}

function IntegrationIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M8 9h8M8 13h5" />
    </svg>
  );
}
