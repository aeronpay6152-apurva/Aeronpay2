import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  CreditCard,
  SlidersHorizontal,
  Zap,
  BarChart3,
  Gift,
  CheckCircle,
  Coins,
  IndianRupee,
  TrendingUp,
  WalletCards,
  Building2,
  PieChart,
} from "lucide-react";
import prepaidImg from "../../assets/images/prepaid-card-scroll.png";
import giftCardImg from "../../assets/images/gift-card-scroll.png";
import digitalGoldVideo from "../../assets/images/digital-gold-scroll-animation.webm";
import expenseImg from "../../assets/images/expense-card-scroll.png";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    tag: "SMART FINANCE",
    title: "AeronPay",
    highlight: "Prepaid Card",
    description:
      "Load your card and spend with full control using a prepaid solution designed for secure flexible and everyday transactions",
    color: "green",
    features: [
      { icon: CreditCard, text: "Spend securely without a bank account" },
      { icon: SlidersHorizontal, text: "Set limits and stay in control" },
      { icon: Zap, text: "Load money and use instantly" },
      { icon: BarChart3, text: "Track every transaction in real time" },
    ],
    button: "Explore Card",
  },
  {
    tag: "GIFTING REIMAGINED",
    title: "Gift",
    highlight: "Cards",
    description:
      "Turn every moment into something memorable with digital gifts that feel personal effortless and instantly delivered",
    color: "orange",
    features: [
      { icon: Gift, text: "Send something they'll actually love" },
      { icon: Zap, text: "Delivered instantly no waiting no delays" },
      { icon: SlidersHorizontal, text: "Flexible choices for every mood and moment" },
      { icon: CheckCircle, text: "Designed to feel simple smooth and secure" },
    ],
    button: "Send a Gift",
  },
  {
    tag: "WEALTH BUILDING",
    title: "Digital",
    highlight: "Gold",
    description:
      "A modern way to build wealth where gold becomes flexible accessible and always within reach whenever you need it.",
    color: "yellow",
    features: [
      { icon: Coins, text: "Start small grow steadily over time" },
      { icon: IndianRupee, text: "Buy sell or hold anytime effortlessly" },
      { icon: TrendingUp, text: "Real value that moves with the market" },
      { icon: WalletCards, text: "Stored securely without the hassle" },
    ],
    button: "Start Investing",
  },
  {
    tag: "INSTANT PAYMENTS",
    title: "Expense",
    highlight: "Card",
    description:
      "A smarter way to manage business spending with complete visibility control and flexibility across every transaction",
    color: "blue",
    features: [
      { icon: WalletCards, text: "Set limits before money moves" },
      { icon: TrendingUp, text: "Track every expense as it happens" },
      { icon: Building2, text: "Pay via any bank account, debit or credit card" },
      { icon: PieChart, text: "Turn spending data into clear insights" },
    ],
    button: "Manage Expenses",
  },
];

const colorClasses = {
  green: {
    tag: "bg-emerald-50 border-emerald-200 text-emerald-500",
    highlight: "text-emerald-500",
    line: "bg-emerald-400",
    icon: "bg-emerald-50 border-emerald-200 text-emerald-500",
    button: "bg-gradient-to-r from-emerald-400 to-emerald-500 hover:shadow-emerald-200",
  },
  orange: {
    tag: "bg-orange-50 border-orange-200 text-orange-500",
    highlight: "text-orange-500",
    line: "bg-orange-400",
    icon: "bg-orange-50 border-orange-200 text-orange-500",
    button: "bg-gradient-to-r from-orange-400 to-orange-500 hover:shadow-orange-200",
  },
  yellow: {
    tag: "bg-amber-50 border-amber-200 text-amber-500",
    highlight: "text-amber-500",
    line: "bg-amber-400",
    icon: "bg-amber-50 border-amber-200 text-amber-500",
    button: "bg-gradient-to-r from-amber-400 to-yellow-400 hover:shadow-amber-200",
  },
  blue: {
    tag: "bg-blue-50 border-blue-200 text-blue-500",
    highlight: "text-blue-500",
    line: "bg-blue-400",
    icon: "bg-blue-50 border-blue-200 text-blue-500",
    button: "bg-gradient-to-r from-blue-400 to-blue-500 hover:shadow-blue-200",
  },
};

const products = [
  {
    id: "prepaid",
    label: "AeronPay Prepaid Card",
    eyebrow: "SMART FINANCE",
    title: "AeronPay\nPrepaid Card",
    description: "Spend with confidence using a card built for everyday control, security and flexibility.",
    image: prepaidImg,
    accent: "#10b981",
  },
  {
    id: "gift-cards",
    label: "Gift Cards",
    eyebrow: "THOUGHTFUL GIVING",
    title: "Gifts that\nfeel personal",
    description: "Make every occasion memorable with digital gift cards that are simple to send and easy to use.",
    image: giftCardImg,
    accent: "#f59e0b",
  },
  {
    id: "digital-gold",
    label: "Digital Gold",
    eyebrow: "GROW YOUR WEALTH",
    title: "Own gold,\nwithout the vault",
    description: "Buy and hold digital gold securely, with a simple way to build value over time.",
    video: digitalGoldVideo,
    accent: "#eab308",
  },
  {
    id: "expense-card",
    label: "Expense Card",
    eyebrow: "SIMPLE CONTROL",
    title: "Every expense,\nin one place",
    description: "Give teams the freedom to spend while keeping every business expense visible and managed.",
    image: expenseImg,
    accent: "#3b82f6",
  },
];

export default function ProductsSection() {
  const [activeProduct, setActiveProduct] = useState(products[0].id);
  const sectionRef = useRef(null);
  const horizontalRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const panels = gsap.utils.toArray("[data-product-panel]");
      if (panels.length < 2) return;

      const horizontalScroll = gsap.to(trackRef.current, {
        x: () => -(trackRef.current.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: horizontalRef.current,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          end: () => `+=${trackRef.current.scrollWidth - window.innerWidth}`,
          onUpdate: (trigger) => {
            const activeIndex = Math.min(
              panels.length - 1,
              Math.round(trigger.progress * (panels.length - 1)),
            );
            setActiveProduct(panels[activeIndex].dataset.productPanel);
          },
        },
      });

      return () => horizontalScroll.scrollTrigger?.kill();
    }, sectionRef);

    return () => context.revert();
  }, []);

  const scrollToProduct = (productId) => {
    const panelIndex = products.findIndex((product) => product.id === productId);
    const horizontalScroll = ScrollTrigger.getAll().find(
      (trigger) => trigger.trigger === horizontalRef.current,
    );

    if (horizontalScroll && trackRef.current) {
      const scrollDistance = trackRef.current.scrollWidth - window.innerWidth;
      window.scrollTo({
        top: horizontalScroll.start + scrollDistance * (panelIndex / (products.length - 1)),
        behavior: "smooth",
      });
    }
  };

  return (
    <section ref={sectionRef} className="relative bg-[#040b1f] text-white">
      <div className="px-6 pb-14 pt-20 text-center md:pb-20 md:pt-28">
        <div className="mb-6 flex justify-center">
          <span className="rounded-full border border-[#8fc9f3] bg-[#eaf6ff] px-5 py-2 text-[12px] font-semibold tracking-[5px] text-[#2874b7] shadow-sm">
            OUR PRODUCTS
          </span>
        </div>
        <h2 className="text-5xl font-medium tracking-wide text-[#dbeafe] lg:text-[54px]">
          Smarter Tools For{" "}
          <span className="bg-gradient-to-r from-[#1572c8] via-[#4c7ec9] to-[#7c63c8] bg-clip-text text-transparent">
            Money
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#9aaad1]">
          Powering how you spend, save, invest and manage
        </p>
      </div>

      <div className="sticky top-0 z-40 px-4 pb-3 pt-3 md:px-8">
        <div className="mx-auto flex w-max max-w-[calc(100vw-2rem)] items-center justify-center gap-3 rounded-full border border-white/10 bg-[#07182c]/85 p-1.5 shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          {products.map((product) => (
            <button
              key={product.id}
              type="button"
              onClick={() => scrollToProduct(product.id)}
              className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition md:px-5 md:text-sm ${
                activeProduct === product.id
                  ? "bg-[#dff7f1] text-[#0d9d7a] shadow-[0_0_0_1px_rgba(13,157,122,0.08)]"
                  : "bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span
                className={`inline-block h-2 w-2 rounded-full ${
                  activeProduct === product.id ? "bg-[#1ec298]" : "bg-slate-300"
                }`}
              />
              {product.label}
            </button>
          ))}
        </div>
      </div>

      <div ref={horizontalRef} className="relative z-10 overflow-hidden">
        <div ref={trackRef} className="flex w-max">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              activeProduct={activeProduct}
              setActiveProduct={setActiveProduct}
              scrollToProduct={scrollToProduct}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, activeProduct, setActiveProduct, scrollToProduct }) {
  const slideIndex = products.findIndex((item) => item.id === product.id);
  const slide = slides[slideIndex] ?? slides[0];
  const colors = colorClasses[slide.color];

  return (
    <article data-product-panel={product.id} className="relative flex h-[calc(100vh-73px)] w-[100vw] max-w-[100vw] shrink-0 items-center overflow-hidden px-6 py-12 md:px-16 lg:px-[10vw]">
      <div className="grid w-full items-center gap-8 md:grid-cols-2 lg:gap-16">
        <div className="relative z-10 max-w-[550px]">
          <div
            className={`inline-flex items-center rounded-full border px-4 py-1.5 text-[11px] font-semibold tracking-[2px] ${colors.tag}`}
          >
            {slide.tag}
          </div>

          <h1 className="mt-5 text-[58px] leading-[0.98] tracking-[-3px] font-medium ">
            {slide.title}{" "}
            <span className={colors.highlight}>{slide.highlight}</span>
          </h1>

          <div className={`mt-5 mb-6 h-[3px] w-[56px] rounded-full ${colors.line}`} />

          <p className="max-w-[500px] text-[16px] leading-[1.7] text-slate-500">
            {slide.description}
          </p>

          <div className="mt-7 space-y-2.5">
            {slide.features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div key={`${product.id}-${index}`} className="flex items-center gap-3">
                  <div
                    className={`flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[10px] border ${colors.icon}`}
                    style={{
                      backgroundColor: `${product.accent}14`,
                      color: product.accent,
                      boxShadow: `0 0 0 1px ${product.accent}66, 0 0 18px ${product.accent}66, 0 0 30px ${product.accent}55`,
                    }}
                  >
                    <Icon size={17} strokeWidth={2} />
                  </div>
                  <span className="text-[15px] text-slate-600">{feature.text}</span>
                </div>
              );
            })}
          </div>


          <button
            className={`group mt-7 flex items-center gap-3 rounded-full px-7 py-4 text-[14px] font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${colors.button}`}
          >
            {slide.button}
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition group-hover:bg-white/30">
              →
            </span>
          </button>

          <div className="mt-7 flex items-center gap-2">
            {products.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToProduct?.(item.id)}
                className={`h-[4px] rounded-full transition-all duration-300 ${
                  activeProduct === item.id
                    ? `w-[32px] ${colors.line}`
                    : "w-[16px] bg-slate-200"
                }`}
                aria-label={`View ${item.label}`}
              />
            ))}
          </div>
        </div>

        <ProductVisual product={product} />
      </div>
    </article>
  );
}

function ProductVisual({ product }) {
  return (
    <div className="relative mt-8 flex min-h-[360px] min-w-0 translate-y-2 items-center justify-center overflow-visible md:mt-12 md:min-h-[560px] md:translate-y-4">
      <div className="absolute h-[min(24rem,90vw)] w-[min(24rem,90vw)] rounded-full opacity-70 md:h-[min(42rem,46vw)] md:w-[min(42rem,46vw)]" style={{ backgroundColor: `${product.accent}18` }} />
      <div className="absolute h-[min(24rem,90vw)] w-[min(24rem,90vw)] animate-[spin_18s_linear_infinite] rounded-full border md:h-[min(42rem,46vw)] md:w-[min(42rem,46vw)]" style={{ borderColor: `${product.accent}55` }}>
        <span className="absolute -top-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 animate-pulse rounded-full" style={{ backgroundColor: product.accent, boxShadow: `0 0 18px ${product.accent}` }} />
        <span className="absolute -bottom-1 right-[18%] h-2 w-2 animate-pulse rounded-full" style={{ backgroundColor: product.accent, animationDelay: "0.8s" }} />
      </div>
      <div className="absolute h-[20rem] w-[38rem] rotate-[-22deg] animate-[spinReverse_24s_linear_infinite] rounded-[50%] border opacity-60 md:h-[24rem] md:w-[36rem]" style={{ borderColor: `${product.accent}45` }} />
      {product.video ? (
        <video autoPlay loop muted playsInline className="relative z-10 max-h-[315px] max-w-full object-contain drop-shadow-2xl md:max-h-[430px]">
          <source src={product.video} type="video/webm" />
        </video>
      ) : (
        <img src={product.image} alt={product.label} className="relative z-10 max-h-[315px] max-w-full object-contain drop-shadow-2xl md:max-h-[430px]" />
      )}
    </div>
  );
}
