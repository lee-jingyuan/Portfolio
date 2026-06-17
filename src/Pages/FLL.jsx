import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TitleHeader from "../components/TitleHeader";
import {
  fllNavLinks,
  stats,
  runs,
  scubathonStages,
  FLLtechStack,
} from "../constants";
import AnimatedCounter from "../components/AnimatedCounter";
import { Stage } from "@react-three/drei";
import FeatureCards from "../sections/FeatureCards";

gsap.registerPlugin(ScrollTrigger);

const FLL = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  useGSAP(() => {
    gsap.fromTo(
      ".fll-page",
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power2.inOut" },
    );

    gsap.fromTo(
      ".fll-hero-line",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.4,
      },
    );

    gsap.fromTo(
      ".stat-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: { trigger: ".stats-section", start: "top 80%" },
      },
    );

    gsap.utils.toArray(".fade-up").forEach((el) => {
      gsap.fromTo(
        el,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: { trigger: el, start: "top 80%" },
        },
      );
    });

    gsap.fromTo(
      ".stage-card",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        scrollTrigger: { trigger: "#scubathon", start: "top 75%" },
      },
    );

    gsap.fromTo(
      ".result-card",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: { trigger: "#results", start: "top 80%" },
      },
    );
  }, []);

  return (
    <div className="fll-page text-white bg-black min-h-screen">
      <NavBar constant={fllNavLinks} showBack={true} />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute top-0 left-0 z-0">
          <img src="/images/bg.png" alt="" />
        </div>
        <div className="absolute inset-0 z-[1] bg-black/60" />

        <div className="absolute bottom-12 md:bottom-16 left-6 md:left-20 z-10 max-w-2xl">
          <div className="flex gap-2 flex-wrap mb-5">
            <span className="fll-hero-line hero-badge">Deep Fried Lobster</span>
            <span className="fll-hero-line hero-badge">FLL SUBMERGED 2025</span>
          </div>

          <h1 className="fll-hero-line text-5xl md:text-7xl font-bold leading-tight mb-4">
            Dive Deep.
            <br />
            Surface First.
          </h1>

          <p className="fll-hero-line text-white-50 md:text-xl max-w-lg mb-6">
            Team Deep Fried Lobster's campaign at FIRST LEGO League Challenge
            2025 — SUBMERGED. 8 robot runs, a diver safety innovation project,
            and a National Championship.
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="fll-hero-line px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20">
              🥇 National Champion
            </span>
            <span className="fll-hero-line px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20">
              🏆 Best Robot Run
            </span>
            <span className="fll-hero-line px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20">
              🌏 Houston Invite
            </span>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 md:right-20 z-10 text-white-50 text-sm flex items-center gap-2 animate-bounce">
          <span>Scroll</span>
          <span>↓</span>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section-padding padding-x-lg">
        <TitleHeader title="FLL SUBMERGED 2025" />
        <div className="mt-16 grid-2-cols items-center gap-10">
          <div className="flex flex-col gap-4">
            <p className="fade-up text-white-50 text-lg leading-relaxed">
              FIRST LEGO League Challenge is an international robotics
              competition for students aged 9–16. Teams design, build, and
              program autonomous robots to complete missions on a themed game
              board, while also developing an innovation project addressing a
              real-world problem.
            </p>
            <p className="fade-up text-white-50 text-lg leading-relaxed">
              The 2024-2025 season was SUBMERGED — an ocean-themed challenge
              where teams explored the layers of the ocean and innovated for a
              better future with healthy oceans. There were 15 missions on the
              game board, each worth varying points.
            </p>
            <p className="fade-up text-white-50 text-lg leading-relaxed">
              Team Deep Fried Lobster competed at the Singapore National Finals,
              executing 8 strategic robot runs and presenting SCUBATHON — a
              diver safety innovation device — to claim the National
              Championship and Best Robot Run award.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Team", value: "Deep Fried Lobster" },
              { label: "Season", value: "SUBMERGED 2025" },
              { label: "Controller", value: "SPIKE Prime" },
              { label: "Firmware", value: "PyBricks" },
            ].map((item) => (
              <div key={item.label} className="card-border rounded-xl p-5">
                <p className="text-white-50 text-sm">{item.label}</p>
                <p className="text-white font-semibold text-lg mt-1">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-section padding-x-lg mt-10">
        <AnimatedCounter constant={stats} />
      </div>

      {/* ROBOT DESIGN */}
      <section id="robot" className="section-padding padding-x-lg">
        <TitleHeader title="Robot Design" />
        <div className="mt-16 grid-2-cols items-center gap-10">
          <div className="fade-up flex items-center justify-center">
            <img
              src="images/fll-robot.png"
              alt="FLL Robot"
              className="w-full max-w-md rounded-xl border border-black-50 shadow-lg object-contain"
            />
          </div>

          <div className="flex flex-col gap-8">
            <div className="fade-up flex flex-col gap-3">
              <h3 className="text-white font-semibold text-xl">
                Design Philosophy
              </h3>
              <ul className="flex flex-col gap-3">
                {[
                  "Compact shape — minimises footprint on the game board for precise mission navigation.",
                  "Quick attachment swap — modular attachment design for fast changeovers between missions.",
                ].map((point, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-white-50 leading-relaxed"
                  >
                    <span className="text-white font-mono text-sm mt-1 flex-none">
                      {i + 1}.
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="fade-up flex flex-col gap-3">
              <h3 className="text-white font-semibold text-xl">
                Why PyBricks?
              </h3>
              <ul className="flex flex-col gap-3">
                {[
                  "Better performance and more responsive than SPIKE 3 firmware.",
                  "More precise motor control for consistent mission execution.",
                  "Lightweight firmware with more features and Python flexibility.",
                ].map((point, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-white-50 leading-relaxed"
                  >
                    <span className="text-white font-mono text-sm mt-1 flex-none">
                      {i + 1}.
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROBOT RUNS */}
      <section id="runs" className="section-padding padding-x-lg">
        <TitleHeader title="Robot Runs" />

        {/* Full run */}
        <div className="mt-16 fade-up">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <h3 className="text-xl font-semibold">Ideal Full Run</h3>
          </div>
          <video
            src="videos/fll25/full-run.mp4"
            controls
            playsInline
            className="w-[80%] rounded-xl border border-black-50 bg-zinc-900"
          />
        </div>

        {/* Individual runs */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
            <h3 className="text-xl font-semibold">Individual Runs</h3>
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="px-3 py-1 card-border rounded-lg text-white-50 hover:text-white transition-colors"
              >
                ←
              </button>
              <button
                onClick={() => scroll("right")}
                className="px-3 py-1 card-border rounded-lg text-white-50 hover:text-white transition-colors"
              >
                →
              </button>
            </div>
          </div>
          <div
            ref={scrollRef}
            className="flex gap-4 pb-4"
            style={{
              overflowX: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {runs.map((run) => (
              <div
                key={run.id}
                className={`flex-none w-72 flex flex-col gap-3 rounded-xl border p-1 ${
                  run.highlight ? "border-white/40" : "border-black-50"
                }`}
              >
                <video
                  src={run.videoSrc}
                  controls
                  playsInline
                  className="w-full rounded-lg bg-zinc-900"
                  style={{ height: "160px", objectFit: "cover" }}
                />
                <div className="px-2 pb-2 flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold text-sm">
                      Run {run.id}
                      {run.highlight && (
                        <span className="ml-2 text-xs text-yellow-400">
                          ★ Best
                        </span>
                      )}
                    </span>
                    <span className="text-white-50 text-xs font-mono">
                      {run.time}
                    </span>
                  </div>
                  <p className="text-white font-semibold text-sm">
                    {run.points} pts
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCUBATHON */}
      <section id="scubathon" className="section-padding padding-x-lg">
        <TitleHeader title="Innovation Project - SCUBATHON" />
        <div className="mt-16 flex flex-col gap-16">
          {/* Problem */}
          <div className="fade-up max-w-3xl">
            <p className="text-white-50 text-sm mb-2">Problem Statement</p>
            <p className="text-xl leading-relaxed">
              How can divers easily monitor other divers' status, manage gauges,
              and avoid collisions to ensure safety?
            </p>
          </div>

          {/* Demo video + description */}
          <div className="grid-2-cols items-center gap-10">
            <div className="fade-up flex flex-col gap-4">
              <p className="text-white-50 text-lg leading-relaxed">
                SCUBATHON is a modular diver safety device that combines a
                camera, HUD overlay, ultrasonic collision detection, LED status
                indicators, and voice commands into a wearable system for
                divers.
              </p>
              <p className="text-white-50 text-lg leading-relaxed">
                Built using Python, C++, OpenCV, YOLO, and an ESP32
                microcontroller — with custom 3D printed housing designed in
                TinkerCAD.
              </p>
            </div>
            <div className="fade-up">
              <video
                src="videos/fll25/scubathon-demo.mp4"
                controls
                playsInline
                className="h-100 rounded-xl border border-black-50 bg-zinc-900"
              />
            </div>
          </div>

          {/* Stages */}
          <TitleHeader title="Development Stages" />
          <FeatureCards constant={scubathonStages} />

          {/* Tech stack */}
          <TitleHeader title="Tech Stack" />
          <FeatureCards constant={FLLtechStack} />
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="section-padding padding-x-lg">
        <TitleHeader title="Results" />
        <div className="mt-16 grid-2-cols items-center gap-10">
          <div className="result-card card-border rounded-xl p-8 flex flex-col gap-6">
            <div>
              <p className="text-white-50 text-sm">2025 · Singapore</p>
              <h3 className="text-xl font-semibold mt-2">
                FLL Challenge — SUBMERGED National Finals
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { icon: "🥇", label: "National Champion" },
                { icon: "🏆", label: "Best Robot Run Award" },
                {
                  icon: "🌏",
                  label:
                    "Invited to FLL Open International Championship — Houston, Texas",
                },
              ].map((ach) => (
                <div key={ach.label} className="flex items-center gap-3">
                  <span className="text-2xl">{ach.icon}</span>
                  <span className="text-white-50 text-lg">{ach.label}</span>
                </div>
              ))}
            </div>
            <p className="text-white-50 text-sm italic">
              Note: The team was unable to attend the Houston international
              championship due to logistical constraints and time
              considerations.
            </p>
          </div>

          {/* Photo */}
          <div className="flex items-center justify-center">
            <img
              src="images/fll-result.jpeg"
              alt="FLL 2025 team with award"
              className="w-full max-w-md rounded-xl border border-black-50 shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FLL;
