
import { Home, Users, Gift, BookOpen, User } from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: "Training", active: true },
    { icon: Users, label: "Teamoverzicht", active: false },
    { icon: Gift, label: "Beloningen", active: false },
    { icon: BookOpen, label: "Kennisplein", active: false },
    { icon: User, label: "Profiel", active: false },
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
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
