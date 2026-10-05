import React, { useState } from "react";

const faqData = [
  {
    question:
      "How quickly can I expect a response after submitting an inquiry?",
    answer:
      "We review every inquiry carefully and typically respond within 24 business hours to ensure you receive timely assistance from the right team.",
  },
  {
    question: "What types of businesses do you work with?",
    answer:
     " We work with startups, growing businesses, enterprises, and organizations across different industries, providing solutions tailored to their specific needs." },
  {
    question: "What information should I provide when contacting your team?",
    answer:
      "Simply share your objectives, challenges, or project requirements. The more context you provide, the better we can guide you toward the right solution.", },
  {
    question: "Do you offer ongoing support after implementation?",
    answer:
      "Yes. We provide continuous assistance, guidance, and support to help ensure smooth operations and long-term success after deployment.",
  },
  {
    question: "How can I explore partnership opportunities with your company?",
    answer:
      "Simply reach out through the contact form or our direct communication channels, and our team will connect with you to discuss potential collaboration opportunities.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#040b1f] px-5 py-20 text-white sm:px-8 md:px-10 lg:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(55,81,255,0.12),_transparent_42%),radial-gradient(circle_at_right,_rgba(120,49,255,0.16),_transparent_35%)]" />
      <div className="pointer-events-none absolute -bottom-[180px] -left-[120px] h-[360px] w-[420px] rounded-full bg-[#315cff] opacity-15 blur-[85px]" />
      <div className="pointer-events-none absolute -bottom-[180px] -right-[100px] h-[380px] w-[420px] rounded-full bg-[#8b5cf6] opacity-20 blur-[90px]" />

      <div className="relative z-10 mx-auto max-w-[900px]">

        {/* Badge */}
        <div className="mb-7 flex justify-center">
          <div
            className="
              inline-flex items-center gap-3
              rounded-full
              border border-[#e2e2eb]
              bg-white
              px-4 py-2
              shadow-[0_3px_12px_rgba(0,0,0,0.04)]
            "
          >
            <span className="h-[5px] w-[5px] rounded-full bg-[#b895ff]" />

            <span
              className="
                text-[12px]
                font-medium
                tracking-[1px]
                text-[#5d21d1]
              "
            >
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>
        </div>

        
        <h1 className="w-full text-center text-2xl font-semibold leading-[1.05] tracking-normal text-[#dbeafe] sm:text-4xl lg:text-[4.1rem]">
          <span className="mb-3 block">
            <span className="text-[#a9c4ff]">Everything</span>{" "}
            <span className="bg-gradient-to-r from-[#3b82f6] via-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">You Need to Know</span>

          </span> 
        </h1>


      
      {/* Description */}
      <p
        className="
            mx-auto
            mt-7
            max-w-[700px]
            text-center
            text-[16px]
            font-normal
            leading-[1.9]
            tracking-[0.1px]
            text-[#a9b7d7]
            sm:text-[16px]
          "
      >
        Find quick answers to common questions about our services, support
        process, partnerships,
        <br className="hidden sm:block" />
        and how our team can help you achieve your goals more efficiently.
      </p>

      {/* FAQ List */}
      <div className="mt-14 flex flex-col gap-4">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`
                  overflow-hidden
                  rounded-[18px]
                  border
                  border-[#e0e3e8]
                  bg-[#eef6ff]
                  transition-all
                  duration-300
                  ${isOpen ? "shadow-[0_2px_8px_rgba(0,0,0,0.01)]" : ""}
                `}
            >
              {/* Question */}
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-5
                    px-6
                    py-[25px]
                    text-left
                    sm:px-6
                  "
              >
                <span
                  className="
                      text-[17px]
                      font-semibold
                      leading-[3.5]
                      text-[#071b35]
                      sm:text-[17px]
                    "
                >
                  {faq.question}
                </span>

                {/* Plus / Minus */}
                <span
                  className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      text-[22px]
                      font-light
                      leading-none
                      text-[#52606d]
                    "
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`
                    grid
                    transition-all
                    duration-300
                    ease-in-out
                    ${isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                  }
                  `}
              >
                <div className="overflow-hidden">
                  <p
                    className="
                        px-6
                        pb-6
                        pr-10
                        text-[17px]
                        font-normal
                        leading-[1.7]
                        text-[#6680a3]
                        sm:text-[16px]
                      "
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
    </section >
  );
};

export default FAQ;