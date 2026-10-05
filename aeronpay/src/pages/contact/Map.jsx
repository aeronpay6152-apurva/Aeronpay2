import React from "react";

const OfficeMap = () => {
  // EXACT GOOGLE MAPS LOCATION
  const officeName = "Amrit Shree";

  const officeAddress =
    "University Rd, Digamber Jain Mandir, Shakti Nagar, Udaipur, Rajasthan 313001";

  // Google Maps search URL
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    `${officeName}, ${officeAddress}`
  )}&z=17&output=embed`;

  // Open Google Maps
  const openMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${officeName}, ${officeAddress}`
  )}`;

  // Directions
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    `${officeName}, ${officeAddress}`
  )}`;

  return (
    <section className="relative w-full overflow-hidden bg-[#040b1f] py-16 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(55,81,255,0.12),_transparent_42%),radial-gradient(circle_at_right,_rgba(120,49,255,0.16),_transparent_35%)]" />
      <div className="pointer-events-none absolute -bottom-[180px] -left-[120px] h-[360px] w-[420px] rounded-full bg-[#315cff] opacity-15 blur-[85px]" />
      <div className="pointer-events-none absolute -bottom-[180px] -right-[100px] h-[380px] w-[420px] rounded-full bg-[#8b5cf6] opacity-20 blur-[90px]" />

      <div className="mx-auto w-[92%] max-w-[1300px]">

        {/* MAP CONTAINER */}
        <div className="relative h-[380px] w-full overflow-hidden sm:h-[500px]">

          {/* GOOGLE MAP */}
          <iframe
            title="Amrit Shree Office Location"
            src={mapUrl}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* =================================
              LEFT TOP ADDRESS CARD
          ================================= */}
          <div className="absolute left-3 top-3 z-20 w-[calc(100%-1.5rem)] max-w-[310px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.25)]">

            <div className="p-4">

              {/* TOP */}
              <div className="flex items-start justify-between gap-3">

                <div>
                  <h3 className="text-[16px] font-semibold leading-5 text-[#202124]">
                    Amrit Shree
                  </h3>

                  <p className="mt-1 text-[13px] leading-[18px] text-[#5f6368]">
                    University Rd,
                    <br />
                    Digamber Jain Mandir,
                    <br />
                    Shakti Nagar,
                    <br />
                    Udaipur, Rajasthan
                    <br />
                    313001
                  </p>
                </div>

                {/* OPEN GOOGLE MAP */}
                <a
                  href={openMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f1f3f4] transition hover:bg-[#e8eaed]"
                  title="Open in Google Maps"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <defs>
                      <linearGradient id="mapExternalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#7124dc" />
                        <stop offset="100%" stopColor="#8b3df1" />
                      </linearGradient>
                    </defs>
                    <path stroke="url(#mapExternalGradient)" d="M14 3h7v7" />
                    <path stroke="url(#mapExternalGradient)" d="M10 14L21 3" />
                    <path stroke="url(#mapExternalGradient)" d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
                    <path d="M14 3h7v7" />
                    <path d="M10 14L21 3" />
                    <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
                  </svg>
                </a>

              </div>

              {/* DIVIDER */}
              <div className="my-3 h-px bg-[#eeeeee]" />

              {/* GET DIRECTIONS */}
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-[13px] font-medium"
              >

                {/* DIRECTIONS ICON */}
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <defs>
                    <linearGradient id="directionsGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#7124dc" />
                      <stop offset="100%" stopColor="#8b3df1" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#directionsGradient)" d="M21.71 11.29l-9-9a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 0 1.42l9 9a1 1 0 0 0 1.42 0l9-9a1 1 0 0 0 0-1.42zM12 18.59L5.41 12 12 5.41 18.59 12 12 18.59z" />
                  <path fill="url(#directionsGradient)" d="M12 8v3H9v2h3v3l4-4-4-4z" />
                  <path d="M21.71 11.29l-9-9a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 0 1.42l9 9a1 1 0 0 0 1.42 0l9-9a1 1 0 0 0 0-1.42zM12 18.59L5.41 12 12 5.41 18.59 12 12 18.59z" />
                  <path d="M12 8v3H9v2h3v3l4-4-4-4z" />
                </svg>

                <span className="bg-gradient-to-r from-[#7124dc] to-[#8b3df1] bg-clip-text text-transparent group-hover:underline">
                  Get directions
                </span>

              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OfficeMap;