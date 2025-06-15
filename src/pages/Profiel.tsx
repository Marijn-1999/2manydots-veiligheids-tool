
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Profiel = () => {
  const userStats = [
    { icon: "🔥", value: 3, label: "Dagreeks" },
    { icon: "⭐", value: 70, label: "Sterren" },
    { icon: "🏆", value: 0, label: "Top 3 plekken" },
  ];

  const subjects = [
    {
      number: "1.",
      title: "Bewustwording",
      currentLevel: 3,
      nextLevel: 4,
      progress: 75,
      isActive: true
    },
    {
      number: "2.",
      title: "Toegangsbeveiliging", 
      currentLevel: 1,
      nextLevel: 2,
      progress: 0,
      isActive: false
    },
    {
      number: "3.",
      title: "Netwerkveiligheid",
      currentLevel: 1,
      nextLevel: 2, 
      progress: 0,
      isActive: false
    },
    {
      number: "4.",
      title: "Systeemveiligheid",
      currentLevel: 1,
      nextLevel: 2,
      progress: 0,
      isActive: false
    }
  ];

  const topUsers = [
    { rank: 1, name: "Arjan van Esdoorn", avatar: "👨" },
    { rank: 2, name: "Julian Wilgen", avatar: "👨" },
    { rank: 3, name: "Iris Meesters", avatar: "👩" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex flex-1">
          <div className="flex-1 p-8">
            <div className="max-w-4xl mx-auto">
              {/* User Profile Section */}
              <div className="text-center mb-8">
                <div className="relative inline-block mb-4">
                  <div className="w-32 h-32 rounded-full bg-blue-500 flex items-center justify-center text-6xl mb-4">
                    👨
                  </div>
                  <div className="absolute bottom-2 right-2 bg-gray-800 text-white rounded-full p-1">
                    <span className="text-xs">✏️</span>
                  </div>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-1">Rik Hendriks</h1>
                <p className="text-gray-500 italic">Copywriter</p>
              </div>

              {/* Stats Cards */}
              <div className="flex justify-center space-x-8 mb-8">
                {userStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 min-w-[120px]">
                      <div className="text-3xl mb-2">{stat.icon}</div>
                      <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center space-x-4 mb-8">
                <Button className="bg-gray-800 text-white px-8 py-2 rounded-lg font-medium">
                  Levelkaart
                </Button>
                <Button variant="outline" className="px-8 py-2 rounded-lg font-medium">
                  Maand challenge
                </Button>
              </div>

              {/* Progress Sections */}
              <div className="space-y-6">
                {subjects.map((subject, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className={`text-lg font-semibold ${subject.isActive ? 'text-pink-500' : 'text-gray-400'}`}>
                          {subject.number} {subject.title}
                        </h3>
                        <Button 
                          className={`px-6 py-2 rounded-lg font-medium ${
                            subject.isActive 
                              ? 'bg-gray-800 text-white' 
                              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          }`}
                          disabled={!subject.isActive}
                        >
                          Start
                        </Button>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <span className="text-sm font-medium text-gray-600">Level {subject.currentLevel}</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div 
                            className={`h-full transition-all duration-300 ${
                              subject.isActive ? 'bg-pink-500' : 'bg-gray-300'
                            }`}
                            style={{ width: `${subject.progress}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-600">Level {subject.nextLevel}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right panel */}
          <div className="w-80 bg-white h-screen p-6 space-y-6 overflow-y-auto">
            {/* Reward notification */}
            <div className="bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-lg p-4 relative">
              <div className="absolute top-4 right-4">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="font-bold text-lg mb-1">Je bent er bijna!</h3>
              <p className="text-sm opacity-90">Verzamel nog 30 ⭐ voor je beloning</p>
            </div>

            {/* Challenge of the month */}
            <div className="bg-white border border-gray-100 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-4">Challenge van de maand</h3>
              <div className="mb-4">
                <h4 className="font-medium text-pink-600 mb-1">Spot the risk</h4>
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

            {/* Welcome message with mascot */}
            <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 relative">
              <p className="text-sm text-gray-700 mb-0">Welkom terug bij DotSecure</p>
              <div className="absolute bottom-2 right-2">
                <div className="w-12 h-12 rounded-full bg-pink-200 flex items-center justify-center">
                  <span className="text-2xl">🐰</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiel;
