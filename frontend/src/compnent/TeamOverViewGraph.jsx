import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Chart from "chart.js/auto";


const TeamOverViewGraph = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [activeFilter, setActiveFilter] = useState("titles");
  const [allData, setAllData] = useState(null); // cached data
  const [loading, setLoading] = useState(true);


  const iplTeams = [
    "Mumbai Indians", "Chennai Super Kings", "Royal Challengers Bangalore",
    "Kolkata Knight Riders", "Delhi Capitals", "Rajasthan Royals",
    "Sunrisers Hyderabad", "Punjab Kings", "Lucknow Super Giants", "Gujarat Titans",
  ];

  const filters = [
    { key: "titles", label: "Titles Won" },
    { key: "wins",   label: "Matches Won" },
    { key: "winPct", label: "Win Percentage" },
    { key: "matches",label: "Total Matches" },
  ];

  const teamColors = [
    "#005DA0", "#FDB913", "#EC1C24", "#3A225D", "#17479E",
    "#EC0374", "#FF822A", "#AA4545", "#A4C639", "#1C1C6E",
  ];

  const teamLabels = ["MI", "CSK", "RCB", "KKK", "DC", "RR", "SRH", "PBKS", "LSG", "GT"];

  // ── Sirf ek baar fetch ──
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const responses = await Promise.all(
          iplTeams.map((team) =>
            axios.get(`http://localhost:8000/ipl/final/team/${team}`)
          )
        );

        setAllData({
          titles:  responses.map((r) => r.data.teamTrophy),
          wins:    responses.map((r) => r.data.teamWin),
          winPct:  responses.map((r) => r.data.winningPercentage),
          matches: responses.map((r) => r.data.totalMatches),
        });
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // ← empty array — sirf mount pe ek baar

  // ── Filter change hone par sirf chart update ──
  useEffect(() => {
    if (!allData || !chartRef.current) return; // data aane ka wait karo

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: teamLabels,
        datasets: [{
          label: filters.find((f) => f.key === activeFilter)?.label,
          data: allData[activeFilter],
          backgroundColor: teamColors,
          borderRadius: 6,
          borderSkipped: false,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => {
                const v = ctx.parsed.y;
                return activeFilter === "winPct"
                  ? ` Win%: ${v}%`
                  : ` ${filters.find((f) => f.key === activeFilter)?.label}: ${v}`;
              },
            },
          },
        },
        scales: {
          x: {
            ticks: { color: "#9CA3AF" },
            grid: { display: false },
            border: { display: false },
          },
          y: {
            ticks: {
              color: "#9CA3AF",
              precision: 0,
              callback: (v) => activeFilter === "winPct" ? v + "%" : v,
            },
            grid: { color: "rgba(255,255,255,0.05)" },
            border: { display: false },
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) chartInstance.current.destroy();
    };
  }, [activeFilter, allData]); // allData aane par + filter change par

  return (
    <div className="w-full bg-[#0A1428] px-4 sm:px-6 py-6">

      <h2 className="text-white text-xl sm:text-2xl font-semibold mb-4">
        Teams Performance Overview
      </h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActiveFilter(f.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all
              ${activeFilter === f.key
                ? "bg-amber-400 text-black border-amber-400"
                : "bg-transparent text-white border-white/30 hover:border-white/60"
              }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Loading ya Chart */}
      {loading ? (
        <div className="w-full h-64 sm:h-80 lg:h-96 flex items-center justify-center">
          <p className="text-gray-400 animate-pulse">Loading chart data...</p>
        </div>
      ) : (
        <div className="w-full h-64 sm:h-80 lg:h-96">
          <canvas ref={chartRef} />
        </div>
      )}

    </div>
  );
};

export default TeamOverViewGraph;