import { useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../data/home";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );

    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.15 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        },
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <TitleHeader title="What I've Built" />
        <div className="showcaselayout mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-10">
            {projects.map((project, index) => (
              <div
                key={project.title}
                ref={(el) => (cardRefs.current[index] = el)}
                className="card-border rounded-xl overflow-hidden flex flex-col"
              >
                {/* Thumbnail */}
                <div className="w-full h-100 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.alt}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <div className="text-content flex flex-col gap-3 p-6">
                  <h2 className="text-white font-semibold text-xl">
                    {project.title}
                  </h2>
                  <p className="text-white-50 text-sm">{project.tagline}</p>
                  <Link to={project.link} className="project-btn mt-2 w-fit">
                    <div className="inner">
                      <span>Read More</span>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
