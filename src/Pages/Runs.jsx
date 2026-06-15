import { Link } from "react-router-dom";

const fllRuns = [
  { id: 1, missions: "1+2+4+14", points: 95, time: "11s", videoSrc: "/videos/fll/run1.mp4" },
  { id: 2, missions: "6+7", points: 50, time: "7s", videoSrc: "/videos/fll/run2.mp4" },
  { id: 3, missions: "3+4+14", points: 50, time: "13s", videoSrc: "/videos/fll/run3.mp4" },
  { id: 4, missions: "2+14", points: 40, time: "13s", videoSrc: "/videos/fll/run4.mp4" },
  { id: 5, missions: "—", points: 45, time: "13s", videoSrc: "/videos/fll/run5.mp4" },
  { id: 6, missions: "9+13+14", points: 50, time: "16s", videoSrc: "/videos/fll/run6.mp4" },
  { id: 7, missions: "8+15", points: 45, time: "9s", videoSrc: "/videos/fll/run7.mp4" },
  { id: 8, missions: "3+5+9+10+11+12", points: 175, time: "25s", videoSrc: "/videos/fll/run8.mp4", highlight: true },
];

const Runs = () => {
  return (
    <div className="text-white bg-black min-h-screen px-5 md:px-20 py-16">
      {/* Header */}
      <div className="mb-12 flex items-center justify-between flex-wrap gap-4">
        <div>
          <p className="text-white-50 text-sm mb-1">AstroNuts · Deep Fried Lobster</p>
          <h1 className="text-3xl md:text-4xl font-bold">Competition Runs</h1>
        </div>
        <Link to="/" className="text-white-50 hover:text-white transition-colors text-sm">
          ← Back to Portfolio
        </Link>
      </div>

      {/* FLL 2025 */}
      <section className="mb-20">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">FLL Challenge 2023/24 — MASTERPIECE</h2>
          <p className="text-white-50 text-sm mt-1">Ideal Runs · 8 runs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {fllRuns.map((run) => (
            <div
              key={run.id}
              className={`flex flex-col gap-3 card-border rounded-xl overflow-hidden ${
                run.highlight ? "border-white/40" : ""
              }`}
            >
              <video
                src={run.videoSrc}
                controls
                playsInline
                className="w-full bg-zinc-900"
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="px-4 pb-4 flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold text-sm">
                    Run {run.id}
                    {run.highlight && <span className="ml-2 text-xs text-yellow-400">★ Best</span>}
                  </span>
                  <span className="text-white-50 text-xs font-mono">{run.time}</span>
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
          <p className="text-white-50 text-sm mt-1">National · Singapore</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-border rounded-xl overflow-hidden flex flex-col gap-3">
            <video
              src="/videos/wro/full-run.mp4"
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