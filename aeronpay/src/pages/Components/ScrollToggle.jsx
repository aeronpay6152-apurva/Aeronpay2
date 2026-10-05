import React, { useState, useEffect } from "react";
import {
  ChevronUp,
  MessageCircle,
  Mail,
  X,
} from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";

const ScrollToggle = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const contactLinks = [
    
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/91XXXXXXXXXX",
      className: "bg-green-500 hover:bg-green-600",
    },
    {
      name: "Facebook",
      icon: FaFacebookF,
      href: "https://facebook.com/",
      className: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://instagram.com/",
      className: "bg-pink-500 hover:bg-pink-600",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:yourmail@gmail.com",
      className: "bg-orange-500 hover:bg-orange-600",
    },
  ];

  return (
    <>
     
      {/* CONTACT DROPDOWN */}
    

      <div
        className="
          fixed
          right-6
          bottom-24
          z-[9999]
        "
      >
        <div className="relative flex flex-col items-center gap-3">

          {/* Contact Options */}

          <div
            className={`
              absolute
              bottom-16
              right-0

              flex
              flex-col
              items-center
              gap-3

              transition-all
              duration-300
              ease-out

              ${
                isContactOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible translate-y-4 opacity-0"
              }
            `}
          >
            {contactLinks.map((item, index) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.name}
                  style={{
                    transitionDelay: isContactOpen
                      ? `${index * 50}ms`
                      : "0ms",
                  }}
                  className={`
                    group
                    relative

                    flex
                    h-11
                    w-11
                    items-center
                    justify-center

                    rounded-full

                    text-white

                    shadow-lg
                    shadow-black/20

                    transition-all
                    duration-300

                    hover:scale-110

                    ${item.className}
                  `}
                >
                  <Icon size={19} strokeWidth={2} />

                  {/* Tooltip */}

                  <span
                    className="
                      pointer-events-none

                      absolute
                      right-14

                      whitespace-nowrap

                      rounded-lg
                      bg-black/85

                      px-3
                      py-1.5

                      text-xs
                      font-medium
                      text-white

                      opacity-0
                      translate-x-2

                      transition-all
                      duration-200

                      group-hover:translate-x-0
                      group-hover:opacity-100
                    "
                  >
                    {item.name}
                  </span>
                </a>
              );
            })}
          </div>

          {/* CONTACT MAIN BUTTON */}

          <button
            type="button"
            onClick={() => setIsContactOpen(!isContactOpen)}
            aria-label="Contact options"
            className="
              relative

              flex
              h-14
              w-14
              items-center
              justify-center

              rounded-full

              border
              border-violet-300/40

              bg-gradient-to-br
              from-violet-500
              via-purple-600
              to-indigo-700

              text-white

              shadow-[0_0_25px_rgba(124,58,237,0.55)]

              transition-all
              duration-300

              hover:scale-110
              hover:shadow-[0_0_35px_rgba(124,58,237,0.8)]

              active:scale-95
            "
          >
            {/* Outer Ring */}

            <span
              className="
                absolute
                inset-[-6px]

                rounded-full

                border
                border-violet-400/30
              "
            />

            {/* Icon */}

            <span
              className="
                relative
                z-10

                flex
                h-11
                w-11
                items-center
                justify-center

                rounded-full

                bg-violet-500
              "
            >
              {isContactOpen ? (
                <X size={21} />
              ) : (
                <MessageCircle size={21} />
              )}
            </span>
          </button>
        </div>
      </div>

     
      {/* SEPARATE SCROLL TO TOP BUTTON */}
      

      <button
        type="button"
        onClick={handleScrollTop}
        aria-label="Scroll to top"
        className={`
          fixed
          
          right-6
          bottom-6

          z-[9999]

          flex
          h-14
          w-14
          items-center
          justify-center

          rounded-full

          border
          border-violet-300/40

          bg-gradient-to-br
          from-violet-500
          via-purple-600
          to-indigo-700

          text-white

          shadow-[0_0_25px_rgba(124,58,237,0.55)]

          transition-all
          duration-300
          ease-out

          hover:scale-110
          hover:shadow-[0_0_35px_rgba(124,58,237,0.8)]

          active:scale-95

          ${
            showScrollTop
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-5 opacity-0"
          }
        `}
      >
        <span
          className="
            absolute
            inset-[-6px]

            rounded-full

            border
            border-violet-400/30
          "
        />

        <span
          className="
            relative
            z-10

            flex
            h-11
            w-11
            items-center
            justify-center

            rounded-full

            bg-violet-500
          "
        >
          <ChevronUp size={22} strokeWidth={2} />
        </span>
      </button>
    </>
  );
};

export default ScrollToggle;