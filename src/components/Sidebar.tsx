
import { Home, Users, Gift, BookOpen, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { icon: Home, label: "Training", path: "/", active: location.pathname === "/" },
    { icon: Users, label: "Teamoverzicht", path: "/teamoverzicht", active: location.pathname === "/teamoverzicht" },
    { icon: Gift, label: "Beloningen", path: "#", active: false },
    { icon: BookOpen, label: "Kennisplein", path: "/kennisplein", active: location.pathname === "/kennisplein" },
    { icon: User, label: "Profiel", path: "/profiel", active: location.pathname === "/profiel" },
  ];

  return (
    <div className="w-64 bg-white h-screen shadow-sm border-r border-gray-100 flex flex-col">
      <div className="p-6">
        <div className="text-pink-500 text-2xl font-bold">2manydots</div>
      </div>
      
      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={index}>
                {item.path === "#" ? (
                  <a
                    href="#"
                    className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      item.active
                        ? "bg-pink-50 text-pink-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      item.active
                        ? "bg-pink-50 text-pink-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
