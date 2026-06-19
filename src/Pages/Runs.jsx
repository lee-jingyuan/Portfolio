import { Link } from "react-router-dom";
import { useRef } from "react";
import { fllRuns24 } from "../data/fll";

const Runs = () => {
  const scrollFLLRef = useRef(null);

  const scrollFLL = (direction) => {
    if (scrollFLLRef.current) {
      const scrollAmount = 400;
      scrollFLLRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="text-white bg-black min-h-screen px-5 md:px-20 py-16">
      {/* Header */}
      <div className="mb-12 flex items-center justify-between flex-wrap gap-4">
        <div>
          <p className="text-white-50 text-sm mb-1">
            AstroNuts · Deep Fried Lobster
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">Competition Runs</h1>
        </div>
        <Link
          to="/"
          className="text-white-50 hover:text-white transition-colors text-sm"
        >
          ← Back to Portfolio
        </Link>
      </div>

      {/* FLL 2025 */}
      <section className="mb-20">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
            <div>
              <h2 className="text-2xl font-semibold">FLL Challenge 2023/24 — MASTERPIECE</h2>
              <p className="text-white-50 text-sm mt-1">Ideal Runs · 8 runs</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => scrollFLL("left")}
                className="px-3 py-1 card-border rounded-lg text-white-50 hover:text-white transition-colors"
              >
                ←
              </button>
              <button
                onClick={() => scrollFLL("right")}
                className="px-3 py-1 card-border rounded-lg text-white-50 hover:text-white transition-colors"
              >
                →
              </button>
            </div>
          </div>
        </div>
        <div
          ref={scrollFLLRef}
          className="flex gap-4 pb-4"
          style={{
            overflowX: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {fllRuns24.map((run) => (
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
                <p className="text-white-50 text-xs">Missions {run.missions}</p>
                <p className="text-white font-semibold text-sm">{run.points} pts</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WRO 2024 */}
      <section>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">WRO RoboMission 2024</h2>
          <p className="text-white-50 text-sm mt-1">Ideal Full Run</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-border rounded-xl overflow-hidden flex flex-col gap-3">
            <video
              src="videos/wro24-full-run.mp4"
              controls
              playsInline
              className="w-full bg-zinc-900"
            />
            <div className="px-4 pb-4">
              <p className="text-white font-semibold">Full Competition Run</p>
              <p className="text-white-50 text-xs mt-1">WRO 2024</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Runs;
