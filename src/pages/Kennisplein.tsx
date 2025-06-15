
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";

const Kennisplein = () => {
  const [expandedSection, setExpandedSection] = useState("bewustwording");
  
  const sections = [
    {
      id: "bewustwording",
      number: "1.",
      title: "Bewustwording",
      content: {
        title: "Waarom bewustwording belangrijk is",
        text: `Informatiebeveiliging begint met bewustwording. Veel risico's op het gebied van dataveiligheid ontstaan niet door opzet, maar door onwetendheid of routinegedrag. Denk aan het te laat updaten van software, klikken op een verdachte e-mail, of het open laten staan van je laptop.

Door je bewust te zijn van mogelijke risico's — en hoe je ze herkent — kun je actief bijdragen aan een veiligere digitale werkomgeving. Niet alleen voor jezelf, maar ook voor collega's en klanten.`,
        subtitle: "Wat bedoelen we met 'bewust gedrag'?",
        bulletPoints: [
          "Vraag je bij een link in een e-mail af of die wel betrouwbaar is.",
          "Denk na voordat je bestanden deelt of opslaat.",
          "Wees alert op signalen van een phishingpoging.",
          "Herken situaties waarin gevoelige gegevens zichtbaar kunnen zijn voor anderen."
        ],
        conclusion: `En nu?
De vragen die je net hebt beantwoord helpen je om die bewustwording te trainen. Door regelmatig zulke situaties te oefenen, vergroot je je alertheid en voorkom je dat je in valkuilen trapt. Het is geen kwestie van slim zijn — het is een kwestie van aandacht hebben voor veiligheid.`
      }
    },
    {
      id: "toegangsbeveiliging",
      number: "2.",
      title: "Toegangsbeveiliging",
      content: null
    },
    {
      id: "netwerkveiligheid", 
      number: "3.",
      title: "Netwerkveiligheid",
      content: null
    },
    {
      id: "systeemveiligheid",
      number: "4.", 
      title: "Systeemveiligheid",
      content: null
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
            <div className="max-w-4xl mx-auto space-y-4">
              {sections.map((section) => (
                <div key={section.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => setExpandedSection(expandedSection === section.id ? "" : section.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50"
                  >
                    <h2 className="text-lg font-semibold text-pink-500">
                      {section.number} {section.title}
                    </h2>
                    {expandedSection === section.id ? (
                      <ChevronUp className="w-5 h-5 text-pink-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  
                  {expandedSection === section.id && section.content && (
                    <div className="px-6 pb-6 border-t border-gray-100">
                      <div className="pt-6 space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            {section.content.title}
                          </h3>
                          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                            {section.content.text}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-medium text-gray-800 mb-4">
                            {section.content.subtitle}
                          </h4>
                          <p className="text-gray-700 mb-3">
                            Bewust gedrag betekent dat je even stilstaat bij handelingen die normaal misschien automatisch gaan. Bijvoorbeeld:
                          </p>
                          <ul className="space-y-2 ml-4">
                            {section.content.bulletPoints.map((point, index) => (
                              <li key={index} className="text-gray-700 flex">
                                <span className="text-pink-500 mr-2">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-gray-700 whitespace-pre-line">
                            {section.content.conclusion}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
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
        </div>
      </div>
    </div>
  );
};

export default Kennisplein;
