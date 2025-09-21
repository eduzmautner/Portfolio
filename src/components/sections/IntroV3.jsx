import { useMemo } from "react";
import { TypewriterRich, RenderRunsForSizer } from "../ui/TypewriterRich";

/* ===========================================================
   IntroV3 — fixed height + animated typing + variable speeds
   =========================================================== */

const IntroV3 = () => {
  // Define your styled runs once (memoized).
  const runs = useMemo(
    () => [
      {
        __type: "styled",
        className: "",
        text: "Eduardo ",
        render: (t) => <span className="">{t}</span>,
      },
      {
        __type: "styled",
        className: "uppercase",
        text:
          "is a NY-based Generalist designer, currently working as an Industrial Designer @ ",
        render: (t) => <span className="uppercase">{t}</span>,
      },
      {
        __type: "link",
        text: "Merkury Innovations",
        linkHref: "https://merkuryinnovations.com/",
        linkClassName:
          "lg:text-6xl hover:text-neutral-300 tracking-tighter underline",
        render: (t) => (
          <a
            href="https://merkuryinnovations.com/"
            target="_blank"
            rel="noopener noreferrer"
            /* font-['UnifrakturMaguntia'] */
            className="lg:text-6xl font-['UnifrakturMaguntia'] hover:text-neutral-300 tracking-tighter underline"
          >
            {t}
          </a>
        ),
      },
      {
        __type: "styled",
        className: "uppercase",
        text: ". Previously @ ",
        render: (t) => <span className="uppercase">{t}</span>,
      },
      {
        __type: "link",
        text: "Kikkerland Design Inc.",
        linkHref: "https://www.kikkerland.com/",
        linkClassName:
          "lg:text-6xl hover:text-n=stone-300 tracking-tighter underline",
        render: (t) => (
          <a
            href="https://www.kikkerland.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:text-6xl font-['UnifrakturMaguntia'] hover:text-stone-300 tracking-tighter underline"
          >
            {t}
          </a>
        ),
      },
      {
        __type: "styled",
        className: "uppercase",
        text: " and A Lot of Brasil",
        render: (t) => <span className="uppercase">{t}</span>,
      },
      { __type: "plain", text: ".", render: (t) => <span>{t}</span> },
    ],
    []
  );

  // Your desired per-character speeds (ms), loops automatically
  const speedValues = [10, 25, 75, 50, 10, 35, 75];

  return (
    <section id="introV3" className="w-full">
      <div className="w-full">
        {/* Text Column */}
        <div className=""></div>
        <div className="w-full h-screen lg:py-0 border-b border-[#7F7F7F] flex justify-center items-center px-4 lg:px-56 2xl:px-72 animated-background bg-gradient-to-r from-indigo-50 to-white via-sky-200 relative">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white to-white/1 pointer-events-none"></div>
          {/* 
            Fixed-height typing area:
            - The outer wrapper is relative + w-full.
            - Hidden "sizer" with the FULL final text to reserve height immediately.
            - Absolutely position the animated text over it.
          */}
          <div className="relative w-full text-left lg:text-justify">
            {/* Sizer: reserves final height from the start */}
            <p
              aria-hidden="true"
              className="invisible select-none pointer-events-none text-[2.8rem] leading-[3rem] lg:text-6xl  lg:leading-none font-medium font-['Geist'] tracking-tighter lg:leading-none"
            >
              <RenderRunsForSizer runs={runs} />
            </p>

            {/* Animated text positioned on top */}
            <p className="absolute inset-0 text-stone-900 text-[2.8rem] lg:text-6xl font-medium font-['Geist'] tracking-tighter leading-[3rem] lg:leading-none">
              <TypewriterRich
                runs={runs}
                speedValues={speedValues}
                startDelay={150}
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroV3;
