import { useState, useEffect, useRef } from "react";
import { Play, X } from "lucide-react";
import gsap from "gsap";
import inStorePaymentsImg from "../../assets/images/in-store-payments-stack.png";
import moveMoneyImg from "../../assets/images/move-money-stack.png";
import accountActiveImg from "../../assets/images/account-active-stack.png";
import prepaidImg from "../../assets/images/prepaid-stack.png";
import dailyEssentialsImg from "../../assets/images/daily-essentials-stack.webp";

const VIDEO_URL = "https://www.w3schools.com/html/mov_bbb.mp4";

const WorkSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    let observer;
    const context = gsap.context(() => {
      const headingLines = gsap.utils.toArray(".works-heading-line");
      gsap.set(headingLines, { autoAlpha: 0, y: 42, rotateX: -18, transformOrigin: "left bottom" });

      observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;

        gsap.to(headingLines, {
          autoAlpha: 1,
          y: 0,
          rotateX: 0,
          duration: 0.9,
          stagger: 0.14,
          ease: "power3.out",
        });
        observer.disconnect();
      }, { threshold: 0.35 });

      if (headingRef.current) observer.observe(headingRef.current);
    }, headingRef);

    return () => {
      observer?.disconnect();
      context.revert();
    };
  }, []);

  return (
    <section id="works" className="relative min-h-screen overflow-hidden bg-[#040b1f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(55,81,255,0.12),_transparent_42%),radial-gradient(circle_at_right,_rgba(120,49,255,0.16),_transparent_35%)]" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">

        <div className="grid lg:grid-cols-[0.70fr_1.30fr] items-center gap-20">

          {/* ================= LEFT CONTENT ================= */}
          <div className="relative z-20 lg:-translate-x-[20%]">

            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#2a3d70] bg-[#0d1735]/90 px-5 py-3 shadow-[0_0_25px_rgba(99,102,241,0.18)] backdrop-blur-sm">
              <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#75a49b]">
                <svg
                  className="h-3 w-3 text-[#9ec3ff]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3l7 3v5c0 4.5-3 7.5-7 10-4-2.5-7-5.5-7-10V6l7-3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4"
                  />
                </svg>
              </div>

              <span className="text-sm text-[#b7c8ed]">
                Seamless
              </span>

              <span className="text-[#7486b0]">•</span>

              <span className="text-sm text-[#b7c8ed]">
                Secure
              </span>

              <span className="text-[#7486b0]">•</span>

              <span className="text-sm text-[#b7c8ed]">
                Effortless
              </span>
            </div>

            {/* Heading */}
            <h1 ref={headingRef} className="[perspective:700px] text-5xl font-medium leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[56px] xl:text-[58px]">
              <span className="works-heading-line inline-block">Where Your Money</span>
              <br />
              <span className="works-heading-line inline-block">Actually Works</span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-[360px] text-[15px] leading-6 text-[#9aaad1]">
              Everything from quick scans to daily
              <br />
              payments flows quietly in the background so
              <br />
              you never have to think twice
            </p>

            <div className="mt-8 flex items-center gap-5">
              <button className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#2d5ef3] via-[#4b67ff] to-[#7c5dff] px-5 py-3.5 text-base font-semibold text-white shadow-[0_0_28px_rgba(76,104,255,0.55)] transition hover:scale-[1.01]">
                <span>See How It Works</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                  →
                </span>
              </button>

              <button onClick={() => setIsVideoOpen(true)} className="inline-flex items-center gap-3 text-[#a8b2d1] transition hover:text-white">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5">
                  <Play size={12} className="ml-0.5 fill-current" />
                </span>
                <span className="text-sm">2 min overview</span>
              </button>
            </div>
          </div>


          {/* ================= RIGHT VISUAL ================= */}
          <div className="relative z-10 -my-10 lg:-my-16 lg:translate-x-[10%]">
            <CardCarousel setIsVideoOpen={setIsVideoOpen} />
          </div>
        </div>
      </div>

      {isVideoOpen && <VideoModal onClose={() => setIsVideoOpen(false)} />}
    </section>
  );
};

function VideoModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/15 bg-[#080d2b] shadow-[0_0_60px_rgba(76,104,255,0.35)]" onClick={(event) => event.stopPropagation()}>
        <button onClick={onClose} aria-label="Close video" className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-white/20">
          <X size={18} />
        </button>
        <video className="aspect-video w-full" controls autoPlay>
          <source src={VIDEO_URL} type="video/mp4" />
          Your browser does not support video playback.
        </video>
      </div>
    </div>
  );
}

export default WorkSection;



  function CardCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsRef = useRef([]);

  const cards = [
    {
      id: 0,
      title: "In-store Payments",
      image: inStorePaymentsImg,
    },
    {
      id: 1,
      title: "Move Money",
      image: moveMoneyImg,
    },
    {
      id: 2,
      title: "Account Status",
      image: accountActiveImg,
    },
    {
      id: 3,
      title: "Prepaid",
      image: prepaidImg,
    },
    {
      id: 4,
      title: "Daily Essentials",
      image: dailyEssentialsImg,
    },
  ];

  // Active card ke according har card ki position
  const getCardPosition = (index) => {
    let position = index - activeIndex;

    // Circular carousel logic
    if (position > Math.floor(cards.length / 2)) {
      position -= cards.length;
    }

    if (position < -Math.floor(cards.length / 2)) {
      position += cards.length;
    }

    return position;
  };

  // GSAP animation
  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const position = getCardPosition(index);

      let x = 0;
      let y = 0;
      let scale = 1;
      let rotation = 0;
      let opacity = 1;
      let zIndex = 10;

      // ==========================
      // CENTER ACTIVE CARD
      // ==========================
      if (position === 0) {
        x = 0;
        y = -10;
        scale = 1;
        rotation = 0;
        opacity = 1;
        zIndex = 50;
      }

      // ==========================
      // LEFT CARD
      // ==========================
      else if (position === -1) {
        x = -195;
        y = 25;
        scale = 0.78;
        rotation = -9;
        opacity = 0.72;
        zIndex = 30;
      }

      // ==========================
      // RIGHT CARD
      // ==========================
      else if (position === 1) {
        x = 195;
        y = 25;
        scale = 0.78;
        rotation = 9;
        opacity = 0.72;
        zIndex = 30;
      }

      // ==========================
      // FAR LEFT
      // ==========================
      else if (position < -1) {
        x = -325;
        y = 45;
        scale = 0.58;
        rotation = -15;
        opacity = 0.28;
        zIndex = 10;
      }

      // ==========================
      // FAR RIGHT
      // ==========================
      else {
        x = 325;
        y = 45;
        scale = 0.58;
        rotation = 15;
        opacity = 0.28;
        zIndex = 10;
      }

      gsap.to(card, {
        x,
        y,
        scale,
        rotation,
        opacity,
        zIndex,
        duration: 0.85,
        ease: "power3.out",

        boxShadow:
          position === 0
            ? "0px 35px 90px rgba(76, 104, 255, 0.35)"
            : "0px 20px 55px rgba(0, 0, 0, 0.25)",
      });
    });
  }, [activeIndex]);

  // Initial animation
  useEffect(() => {
    const validCards = cardsRef.current.filter(Boolean);

    gsap.fromTo(
      validCards,
      {
        opacity: 0,
        y: 100,
        scale: 0.75,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      }
    );
  }, []);

  const handleCardClick = (index) => {
    if (index === activeIndex) return;

    setActiveIndex(index);
  };

  const handlePrevious = () => {
    setActiveIndex((prev) =>
      prev === 0 ? cards.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === cards.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative flex h-[600px] w-full items-center justify-center overflow-visible">
      
      {/* Background Glow */}
      <div className="absolute h-[430px] w-[430px] rounded-full bg-[#315efb]/15 blur-[120px]" />

      {/* Top subtle glow */}
      <div className="absolute right-[20%] top-[15%] h-[180px] w-[180px] rounded-full bg-[#7c5dff]/15 blur-[90px]" />

      {/* ================= CARDS ================= */}
      <div className="relative flex h-[470px] w-full items-center justify-center">
        {cards.map((card, index) => {
          const position = getCardPosition(index);

          return (
            <div
              key={card.id}
              ref={(el) => (cardsRef.current[index] = el)}
              onClick={() => handleCardClick(index)}
              className={`absolute flex h-[400px] w-[255px] cursor-pointer flex-col overflow-hidden rounded-[24px] border border-white/15 bg-gradient-to-br from-[#132b5d]/70 via-[#0d1b42]/65 to-[#07122e]/60 p-4 shadow-2xl backdrop-blur-md transition-shadow duration-300 ${
                position === 0
                  ? "ring-1 ring-[#6887ff]/40"
                  : ""
              }`}
            >
              {/* Card title */}
              <div className="relative z-10 mb-3 flex items-center justify-between">
                <h3 className="text-[16px] font-medium text-[#b6c9ff]">
                  {card.title}
                </h3>

                {position === 0 && (
                  <span className="h-2 w-2 rounded-full bg-[#6d8cff] shadow-[0_0_15px_rgba(109,140,255,1)]" />
                )}
              </div>

              {/* Image */}
              <div className="relative flex flex-1 items-center justify-center overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-contain"
                />

                {/* Bottom gradient */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#081532]/50 to-transparent" />
              </div>

              {/* Active text */}
              <div
                className={`absolute bottom-5 left-5 transition-all duration-300 ${
                  position === 0
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }`}
              >
                <p className="text-xs text-[#8193c4]">
                  Explore feature
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= DOTS ================= */}
      <div className="absolute bottom-[58px] left-1/2 z-[60] flex -translate-x-1/2 items-center gap-2.5">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to card ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "w-8 bg-gradient-to-r from-[#4b67ff] to-[#8a5cff] shadow-[0_0_18px_rgba(99,102,241,0.8)]"
                : "w-2.5 bg-white/25 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* ================= PREVIOUS BUTTON ================= */}
      <button
        onClick={handlePrevious}
        aria-label="Previous card"
        className="absolute bottom-[22px] left-[calc(50%-105px)] z-[60] flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#101b3b]/80 text-lg text-[#aebde8] backdrop-blur-md transition duration-300 hover:scale-110 hover:border-[#5c78ff]/60 hover:bg-[#1b2b59] hover:text-white"
      >
        ←
      </button>

      {/* ================= NEXT BUTTON ================= */}
      <button
        onClick={handleNext}
        aria-label="Next card"
        className="absolute bottom-[22px] right-[calc(50%-105px)] z-[60] flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#101b3b]/80 text-lg text-[#aebde8] backdrop-blur-md transition duration-300 hover:scale-110 hover:border-[#5c78ff]/60 hover:bg-[#1b2b59] hover:text-white"
      >
        →
      </button>
    </div>
  );
}