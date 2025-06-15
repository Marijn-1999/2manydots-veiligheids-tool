
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import FlowChart from "@/components/FlowChart";
import RightPanel from "@/components/RightPanel";

const Index = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex flex-1">
          <FlowChart />
          <RightPanel />
        </div>
      </div>
    </div>
  );
};

export default Index;
