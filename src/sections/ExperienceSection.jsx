import React from "react";
import TitleHeader from "../components/TitleHeader";
import ExperienceCard from "../components/ExperienceCard";
import { expCards } from "../data/home";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
              <ExperienceCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 