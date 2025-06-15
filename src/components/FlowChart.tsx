
import { Lock } from "lucide-react";
import { useState } from "react";

const FlowChart = () => {
  const [activeNode, setActiveNode] = useState<number | null>(3);

  const nodes = [
    { id: 1, position: { x: 400, y: 80 }, unlocked: true },
    { id: 2, position: { x: 650, y: 120 }, unlocked: true },
    { id: 3, position: { x: 450, y: 280 }, unlocked: true, hasAvatar: true },
    { id: 4, position: { x: 750, y: 400 }, unlocked: false },
    { id: 5, position: { x: 450, y: 550 }, unlocked: false },
    { id: 6, position: { x: 650, y: 650 }, unlocked: false },
  ];

  return (
    <div className="flex-1 bg-gray-50 relative overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        {/* Connection lines */}
        <path
          d="M 450 120 Q 550 120 650 160"
          stroke="#e91e63"
          strokeWidth="2"
          fill="none"
          strokeDasharray="none"
        />
        <path
          d="M 400 120 Q 350 200 450 280"
          stroke="#e91e63"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 650 160 Q 700 250 750 400"
          stroke="#e91e63"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 450 320 Q 350 450 450 550"
          stroke="#e91e63"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 750 440 Q 700 550 650 650"
          stroke="#e91e63"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* Nodes */}
      {nodes.map((node) => (
        <div
          key={node.id}
          className="absolute"
          style={{
            left: node.position.x,
            top: node.position.y,
            transform: 'translate(-50%, -50%)',
            zIndex: 10
          }}
        >
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl cursor-pointer transition-all relative ${
              node.unlocked ? "bg-pink-500 hover:bg-pink-600" : "bg-gray-300"
            }`}
            onClick={() => node.unlocked && setActiveNode(node.id)}
          >
            {node.unlocked ? (
              <>
                {node.hasAvatar && (
                  <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-orange-400 border-2 border-white flex items-center justify-center">
                    <span className="text-xs">👨</span>
                  </div>
                )}
                {node.id}
              </>
            ) : (
              <Lock className="w-6 h-6 text-gray-500" />
            )}
          </div>
        </div>
      ))}

      {/* Active node popup */}
      {activeNode === 3 && (
        <div
          className="absolute bg-gray-800 text-white rounded-lg p-4 shadow-lg"
          style={{
            left: 520,
            top: 320,
            zIndex: 20,
            width: 280
          }}
        >
          <h3 className="font-semibold text-lg mb-1">Bewustwording</h3>
          <p className="text-gray-300 text-sm mb-4">Reageren op incidenten</p>
          <button className="w-full bg-white text-gray-800 py-2 px-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Start +10 ⭐
          </button>
        </div>
      )}
    </div>
  );
};

export default FlowChart;
