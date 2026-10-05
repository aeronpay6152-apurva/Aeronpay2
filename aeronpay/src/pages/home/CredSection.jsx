import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import coinAnimation from "../../assets/images/coin-animation.mp4";

gsap.registerPlugin(ScrollTrigger);

const CredSection = () => {
  const headingRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const headingLines = gsap.utils.toArray(".cred-heading-line");

      gsap.set(".cred-heading", { autoAlpha: 0, perspective: 600 });
      gsap.set(headingLines, { xPercent: -100, autoAlpha: 0 });

      gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })
        .to(".cred-heading", { autoAlpha: 1, duration: 0.35 })
        .to(headingLines[0], { xPercent: 0, autoAlpha: 1, duration: 0.65, ease: "power2.out" }, 0)
        .to(headingLines[1], { xPercent: 0, autoAlpha: 1, duration: 0.65, ease: "power2.out" }, 0.12);
    }, headingRef);

    return () => context.revert();
  }, []);

  return (
  <section className="relative min-h-[75vh] overflow-hidden bg-black">

  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 h-full w-full object-cover"
  >
    <source src={coinAnimation} type="video/mp4" />
  </video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/75" />

  {/* Purple Gradient Overlay */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(55,45,130,0.45),transparent_55%)]" />

  {/* Content */}
  <div className="relative z-10 flex min-h-[75vh] items-center justify-center px-6 text-center">
    <div className="max-w-4xl">

      <h1 ref={headingRef} className="cred-heading overflow-hidden text-xl font-medium leading-[0.90] tracking-tight text-white md:text-6xl">
        <span className="cred-heading-line logo block">The Engine Behind</span>
        <span className="cred-heading-line into mt-2 block md:mt-3">Modern Finance</span>
      </h1>

      <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/70 md:text-lg">
        Where APIs handle complexity behind the scenes so every connection
        interaction and flow feels smooth fast and natural
      </p>

      <button className="mt-9 rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20">
        Know More →
      </button>

    </div>
  </div>

</section>
  );
};

export default CredSection;