export default function KeyMoments() {
  const moments = [
    "Amazing catch by player 7",
    "Fastest 50 runs by player 3",
    "Hat-trick by player 11",
  ];

  return (
    <div className="space-y-4">
      {moments.map((moment, index) => (
        <div
          key={index}
          className="p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow"
        >
          <p className="text-lg font-semibold text-[#0b132b]">{moment}</p>
        </div>
      ))}
    </div>
  );
}
