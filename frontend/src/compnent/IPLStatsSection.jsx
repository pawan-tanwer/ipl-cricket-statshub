import {
  Users,
  PenTool,
  Trophy,
  Award,
  Star,
} from "lucide-react";

export default function IPLStatsSection() {
  const stats = [
    {
      icon: <Users size={28} />,
      value: "1100+",
      label: "Players",
    },
    {
      icon: <PenTool size={28} />,
      value: "400K+",
      label: "Runs",
    },
    {
      icon: <Trophy size={28} />,
      value: "40K+",
      label: "Wickets",
    },
    {
      icon: <Award size={28} />,
      value: "18",
      label: "Seasons",
    },
    {
      icon: <Star size={28} />,
      value: "Countless",
      label: "Memories",
    },
  ];

  return (
    <section className="relative text-white py-12 px-4 overflow-hidden">
      {/* Top Golden Divider */}
      <div className="flex items-center justify-center mb-6">
        <div className="h-[2px] w-32 bg-yellow-500"></div>
        <div className="mx-3 text-yellow-500 text-xl">✦</div>
        <div className="h-[2px] w-32 bg-yellow-500"></div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-lg leading-relaxed">
          From <span className="text-yellow-400 font-semibold">unforgettable</span>{" "}
          matches to{" "}
          <span className="text-yellow-400 font-semibold">
            record-breaking
          </span>{" "}
          performances,
          <br />
          the IPL has redefined cricket. Dive into the complete statistics of{" "}
          <span className="text-yellow-400 font-semibold">
            every player
          </span>
          <br />
          who has been part of this incredible journey since 2008.
        </p>

        <p className="mt-4 text-xl font-semibold text-yellow-400">
          Every run, every wicket, every milestone
          <span className="text-white font-normal">
            {" "}
            – all in one place.
          </span>
        </p>

        {/* Stats Card */}
        <div className="mt-8  backdrop-blur-sm rounded-2xl md:rounded-full border border-yellow-500/20 px-6 py-5 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {stats.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 md:border-r md:border-white/20 last:border-r-0"
              >
                <div className="text-yellow-400">{item.icon}</div>

                <div className="text-left">
                  <h3 className="font-bold text-2xl">{item.value}</h3>
                  <p className="text-sm text-gray-300">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}