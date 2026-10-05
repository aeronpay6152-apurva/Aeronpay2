import {
  ArrowRight,
  MessageCircle,
  ChevronUp,
} from "lucide-react";

export default function Community() {
  return (
    <section className="relative overflow-hidden bg-[#040b1f] py-24 lg:py-32">
      {/* Gradient Overlays - Similar to Hero */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-[#6366f1]/8 blur-3xl" />
        <div className="absolute left-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-[#a855f7]/6 blur-3xl" />
      </div>

      {/* Grid Pattern Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.08),_transparent_90%)]" />

      <div className="relative z-10 mx-auto max-w-[1300px] px-5 lg:px-8">
        {/* Top heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2a3d70] bg-[#0d1735]/90 px-5 py-2 text-[13px] font-medium tracking-[0.08em] text-[#9ec3ff] shadow-[0_0_25px_rgba(99,102,241,0.15)] backdrop-blur-sm">
            <span className="relative flex h-3 w-3 items-center justify-center">
              <span className="absolute h-3 w-3 rounded-full bg-[#6366f1] opacity-60 animate-pulse"></span>
              <span className="relative h-2 w-2 rounded-full bg-[#6366f1]"></span>
            </span>
            STAY CONNECTED
          </div>

          <h2 className="mt-6 text-[42px] font-bold leading-tight tracking-[-0.03em] text-[#dbeafe] md:text-[52px] lg:text-[62px]">
            <span className="block mb-2">Join the AeronPay</span>
            <span className="block bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent">
              Community
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[650px] text-[15px] leading-7 text-[#9aaad1]">
            Get instant updates, product news, business insights, and exclusive
            announcements across all our channels.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {/* WhatsApp */}
          <div className="group rounded-[24px] border border-[#2a3d70] bg-[#0d1735]/60 p-7 shadow-[0_20px_50px_rgba(99,102,241,0.15)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(99,102,241,0.25)]">
            <div className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-gradient-to-br from-[#6366f1]/20 to-[#8b5cf6]/20 border border-[#2a3d70]">
              <MessageCircle
                size={29}
                strokeWidth={2}
                className="text-[#60a5fa]"
              />
            </div>

            <div className="mt-6 flex items-center gap-3">
              <h3 className="text-[20px] font-semibold text-[#dbeafe]">
                WhatsApp
              </h3>

              <span className="rounded-full bg-[#6366f1]/30 border border-[#2a3d70] px-3 py-1 text-[10px] font-bold tracking-[0.12em] text-[#60a5fa]">
                LIVE
              </span>
            </div>

            <p className="mt-2 text-[13px] font-medium text-[#6366f1]">
              Instant Updates & Support
            </p>

            <p className="mt-3 max-w-[330px] text-[15px] leading-7 text-[#9aaad1]">
              Get real-time assistance, important updates, and quick support
              directly on WhatsApp.
            </p>

            <button className="mt-5 flex h-[50px] w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-[14px] font-semibold text-white shadow-[0_10px_20px_rgba(99,102,241,0.4)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_30px_rgba(99,102,241,0.5)]">
              Join WhatsApp
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Social Media */}
          <div className="rounded-[24px] border border-[#2a3d70] bg-[#0d1735]/60 p-7 shadow-[0_20px_50px_rgba(99,102,241,0.15)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(99,102,241,0.25)]">
            <div className="flex h-[56px] w-[56px] items-center justify-center rounded-2xl bg-gradient-to-br from-[#6366f1]/30 to-[#8b5cf6]/30 border border-[#2a3d70]">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-[#60a5fa]">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
              </svg>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <h3 className="text-[20px] font-semibold text-[#dbeafe]">
                Social Media
              </h3>

              <span className="rounded-full bg-[#6366f1]/30 border border-[#2a3d70] px-3 py-1 text-[10px] font-bold tracking-[0.12em] text-[#60a5fa]">
                POPULAR
              </span>
            </div>

            <p className="mt-2 text-[13px] font-medium text-[#6366f1]">
              Latest News & Updates
            </p>

            <p className="mt-3 text-[15px] leading-7 text-[#9aaad1]">
              Follow us for product updates, fintech insights, feature
              launches, and company announcements.
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#3974bd] text-white transition hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(57,116,189,0.5)]"
              >
                <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#6d3ee8,#ef314c,#ffad3d)] text-white transition hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(109,62,232,0.5)]"
              >
                <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                </svg>
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black transition hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              >
                <span className="text-[18px] font-light">𝕏</span>
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ff120d] text-white transition hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,18,13,0.5)]"
              >
                <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            <button className="mt-5 flex h-[50px] w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-[14px] font-semibold text-white shadow-[0_10px_20px_rgba(99,102,241,0.4)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_30px_rgba(99,102,241,0.5)]">
              Follow Us
              <ArrowRight size={18} />
            </button>
          </div>

          {/* LinkedIn */}
          <div className="rounded-[24px] border border-[#2a3d70] bg-[#0d1735]/60 p-7 shadow-[0_20px_50px_rgba(99,102,241,0.15)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(99,102,241,0.25)]">
            <div className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-gradient-to-br from-[#6366f1]/20 to-[#8b5cf6]/20 border border-[#2a3d70]">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#60a5fa" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.807 0-9.726h3.554v1.375c.43-.664 1.199-1.61 2.919-1.61 2.134 0 3.734 1.393 3.734 4.389v5.572zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.955.771-1.715 1.921-1.715 1.147 0 1.912.759 1.935 1.715 0 .953-.788 1.715-1.941 1.715zm1.581 11.597H3.771V9.726h3.147v10.726zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <h3 className="text-[20px] font-semibold text-[#dbeafe]">
                LinkedIn
              </h3>

              <span className="rounded-full bg-[#6366f1]/30 border border-[#2a3d70] px-3 py-1 text-[10px] font-bold tracking-[0.12em] text-[#60a5fa]">
                NETWORK
              </span>
            </div>

            <p className="mt-2 text-[13px] font-medium text-[#6366f1]">
              Professional Updates
            </p>

            <p className="mt-3 text-[15px] leading-7 text-[#9aaad1]">
              Connect with us for industry insights, company updates,
              partnerships, and professional opportunities.
            </p>

            <button className="mt-5 flex h-[50px] w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-[14px] font-semibold text-white shadow-[0_10px_20px_rgba(99,102,241,0.4)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_30px_rgba(99,102,241,0.5)]">
              Connect on LinkedIn
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-16 flex items-center justify-center gap-3 text-center text-[15px] tracking-wide text-[#6b7c9f]">
          <span className="text-[#6366f1]">✦</span>

          <span>
            Connecting businesses with smarter financial experiences.
          </span>

          <span className="text-[#6366f1]">✦</span>
        </div>
      </div>

      
    </section>
  );
}