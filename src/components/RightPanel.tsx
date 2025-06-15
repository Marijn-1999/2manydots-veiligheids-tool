
import { Gift } from "lucide-react";

const RightPanel = () => {
  const topUsers = [
    { rank: 1, name: "Arjan van Esdoorn", avatar: "👨" },
    { rank: 2, name: "Julian Wilgen", avatar: "👨" },
    { rank: 3, name: "Iris Meesters", avatar: "👩" },
  ];

  return (
    <div className="w-80 bg-white h-screen p-6 space-y-6 overflow-y-auto">
      {/* Reward notification */}
      <div className="bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-lg p-4 relative">
        <div className="absolute top-4 right-4">
          <Gift className="w-8 h-8 text-yellow-300" />
        </div>
        <h3 className="font-bold text-lg mb-1">Je bent er bijna!</h3>
        <p className="text-sm opacity-90">Verzamel nog 30 ⭐ voor je beloning</p>
      </div>

      {/* Challenge of the month */}
      <div className="bg-white border border-gray-100 rounded-lg p-4">
        <h3 className="font-semibold text-gray-800 mb-2">Challenge van de maand</h3>
        <div className="mb-4">
          <h4 className="font-medium text-gray-700 mb-1">Spot the risk</h4>
          <p className="text-sm text-gray-500">
            Herken de fout in een realistische situatie. Hoe snel zie jij het gevaar?
          </p>
        </div>
        <button className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-700 transition-colors">
          Ga naar de challenge
        </button>
      </div>

      {/* Top 3 leaderboard */}
      <div className="bg-white border border-gray-100 rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-gray-800">Top 3</h3>
          <span className="text-sm text-gray-500">Bekijk</span>
        </div>
        <div className="space-y-3">
          {topUsers.map((user) => (
            <div key={user.rank} className="flex items-center space-x-3">
              <span className="font-bold text-gray-700 w-4">{user.rank}</span>
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm">
                {user.avatar}
              </div>
              <span className="text-sm text-gray-700">{user.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Welcome message */}
      <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 relative">
        <p className="text-sm text-gray-700 mb-0">Welkom terug bij DotSecure</p>
        <div className="absolute bottom-2 right-2">
          <div className="w-8 h-8 rounded-full bg-pink-200 flex items-center justify-center">
            <span className="text-sm">🦉</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
