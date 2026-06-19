import React from "react";
import TitleHeader from "../components/TitleHeader";
import { expCards } from "../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ExperienceSection = () => {
  useGSAP(() => {
    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.set(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });
    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        xPercent: 0,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    });
  }, []);

  return (
    <section
      id="experience"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="Journey & Achievements" />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-16">
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="flex xl:flex-row flex-col items-center justify-between gap-10 xl:gap-10">
                  {/* Left: Content */}
                  <div className="xl:w-4/6 w-full xl:pr-50 pr-0">
                    <div className="flex items-start">
                      <div className="timeline-wrapper">
                        <div className="timeline" />
                        <div className="gradient-line w-1 h-full" />
                      </div>
                      <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20 min-w-0">
                        <div className="timeline-logo flex-shrink-0">
                          <img
                            src={card.logoPath}
                            alt="logo"
                            className="object-contain"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h1 className="font-semibold text-3xl break-words">
                            {card.title}
                          </h1>
                          <p className="my-5 text-white-50">📅{card.date}</p>
                          <p className="text-[#839cb5] italic">Highlights</p>
                          <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                            {card.responsibilities.map((responsibility) => (
                              <li key={responsibility} className="text-lg">
                                {responsibility}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Right: Image */}
                  <div className="expText w-full xl:w-2/6 flex items-center justify-center md:ml-0 ml-20 md:pr-0 pr-5">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full sm:max-w-xs max-w-[90vw] object-contain rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 