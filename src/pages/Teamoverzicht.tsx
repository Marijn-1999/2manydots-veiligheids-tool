
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Teamoverzicht = () => {
  const topThree = [
    { rank: 1, name: "Arjan van Esdoorn", score: 100, avatar: "👨" },
    { rank: 2, name: "Julian Wilgen", score: 90, avatar: "👨" },
    { rank: 3, name: "Iris Meesters", score: 80, avatar: "👩" },
  ];

  const tableData = [
    { place: 4, name: "Rik Hendriks", score: 70, change: "up", avatar: "👨" },
    { place: 5, name: "Eva van Dijk", score: 60, change: "up", avatar: "👩" },
    { place: 6, name: "Merel Lijster", score: 50, change: "down", avatar: "👩" },
    { place: 7, name: "Max van Eiken", score: 40, change: "up", avatar: "👨" },
    { place: 8, name: "Khan Gulshan", score: 30, change: "down", avatar: "👨" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            {/* Time period tabs */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-lg p-1 shadow-sm">
                <Button variant="outline" className="rounded-md px-6 py-2">
                  Vandaag
                </Button>
                <Button variant="outline" className="rounded-md px-6 py-2 mx-1">
                  Week
                </Button>
                <Button className="bg-gray-800 text-white rounded-md px-6 py-2">
                  Maand
                </Button>
              </div>
            </div>

            {/* Challenge banner */}
            <div className="text-center mb-8">
              <h2 className="text-xl font-semibold mb-2">10 dagen te gaan</h2>
              <p className="text-gray-600">Eindig de maand op de eerste plek om een prijs te winnen</p>
            </div>

            {/* Top 3 podium */}
            <div className="flex justify-center items-end space-x-8 mb-12">
              {/* Second place */}
              <div className="text-center">
                <div className="relative mb-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-pink-400 p-1">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-2xl">
                      {topThree[1].avatar}
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    2
                  </div>
                </div>
                <h3 className="font-semibold">{topThree[1].name}</h3>
                <p className="text-lg font-bold">{topThree[1].score} ⭐</p>
              </div>

              {/* First place */}
              <div className="text-center">
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-500 to-pink-400 p-1">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-3xl">
                      {topThree[0].avatar}
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    1
                  </div>
                </div>
                <h3 className="font-semibold">{topThree[0].name}</h3>
                <p className="text-lg font-bold">{topThree[0].score} ⭐</p>
              </div>

              {/* Third place */}
              <div className="text-center">
                <div className="relative mb-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-pink-400 p-1">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-2xl">
                      {topThree[2].avatar}
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    3
                  </div>
                </div>
                <h3 className="font-semibold">{topThree[2].name}</h3>
                <p className="text-lg font-bold">{topThree[2].score} ⭐</p>
              </div>
            </div>

            {/* Leaderboard table */}
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-20">Plaats</TableHead>
                      <TableHead>Naam</TableHead>
                      <TableHead className="text-right">Punten</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tableData.map((user) => (
                      <TableRow key={user.place}>
                        <TableCell className="font-medium">
                          <div className="flex items-center space-x-2">
                            <span>{user.place}</span>
                            <span className={user.change === "up" ? "text-green-500" : "text-red-500"}>
                              {user.change === "up" ? "▲" : "▼"}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                              {user.avatar}
                            </div>
                            <span>{user.name}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right font-bold">
                          {user.score} ⭐
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Right panel */}
          <div className="fixed right-0 top-0 w-80 h-full pt-20">
            <div className="p-6 space-y-6">
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
                  {topThree.map((user) => (
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teamoverzicht;
