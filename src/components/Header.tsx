
import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-semibold text-pink-500 flex items-center">
          1. Bewustwording
          <ChevronDown className="w-5 h-5 ml-2" />
        </h1>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center">
          📋 Uitleg
        </button>
      </div>
      
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🔥</span>
          <span className="font-bold text-lg">3</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-2xl">⭐</span>
          <span className="font-bold text-lg">70</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
