export default function MatchCard({ match }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
      <h3 className="text-2xl font-bold text-[#0b132b] mb-2">
        {match.team1} <span className="text-gray-500">vs</span> {match.team2}
      </h3>
      <p className="text-lg font-medium text-[#f6c90e]">
        Score: {match.score}
      </p>
    </div>
  );
}
