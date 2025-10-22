export default function LiveStats() {
  const match = {
    team1: "Red Tigers",
    team2: "Blue Bulls",
    score1: "142/6 (20)",
    score2: "138/9 (20)",
    result: "Red Tigers won by 4 runs",
    playerOfMatch: "Rohit Sen – 64(32)",
  };

  return (
    <div className="bg-[#1c2541] p-8 rounded-2xl shadow-2xl text-white text-center">
      <h2 className="text-3xl font-extrabold mb-4 text-[#f6c90e]">
        Final Match Result
      </h2>
      <p className="text-xl mb-3">
        {match.team1} ({match.score1}) <br /> VS <br /> {match.team2} ({match.score2})
      </p>
      <p className="text-2xl font-semibold mb-3 text-[#f6c90e]">
        {match.result}
      </p>
      <p className="italic text-lg text-gray-300">
        Player of the Match: <span className="text-[#f6c90e]">{match.playerOfMatch}</span>
      </p>
    </div>
  );
}

