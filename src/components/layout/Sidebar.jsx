// import { FileText, HelpCircle, Home, Layers, PieChart, Search, Settings } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const Sidebar = () => {
//   const navigate = useNavigate();

//   const menuItems = [
//     { icon: <Home size={20} />, label: "Dashboard", onClick: () => navigate("/") },
//     { icon: <PieChart size={20} />, label: "Analytics" },
//     { icon: <FileText size={20} />, label: "Reports" },
//     { icon: <Search size={20} />, label: "Search" },
//     { icon: <Settings size={20} />, label: "Settings" },
//     { icon: <HelpCircle size={20} />, label: "Help" },
//     { icon: <Layers size={20} />, label: "Master", onClick: () => navigate("/master") }
//   ];

//   return (
//     <div className="fixed pt-3 max-w-[60px] w-full flex flex-col bg-[#020234] min-h-screen gap-10 z-[9999] overflow-visible">
//       {menuItems?.map((item, index) => (
//         <div
//           key={index}
//           className="group relative flex flex-col items-center cursor-pointer text-white"
//           onClick={item.onClick}
//         >
//           {item?.icon}
//           {/* Tooltip */}
//           <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-white text-blue-800 text-lg px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap shadow-md z-[999999] font-semibold">
//             {item?.label}
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Sidebar;


import { FileText, HelpCircle, Home, Layers, PieChart, Search, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { useState } from "react";

const Sidebar = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  const menuItems = [
    { icon: <Home size={20} />, label: "Dashboard", onClick: () => navigate("/") },
    { icon: <PieChart size={20} />, label: "Analytics" },
    { icon: <FileText size={20} />, label: "Reports" },
    { icon: <Search size={20} />, label: "Search" },
    { icon: <Settings size={20} />, label: "Settings" },
    { icon: <HelpCircle size={20} />, label: "Help" },
    { icon: <Layers size={20} />, label: "Master", onClick: () => navigate("/master") }
  ];

  return (
    <>
      <div className="fixed pt-3 max-w-[60px] w-full flex flex-col bg-[#020234] min-h-screen gap-10 z-[9999]">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center cursor-pointer text-white"
            onClick={item.onClick}
            onMouseEnter={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setCoords({ top: rect.top + rect.height / 2, left: rect.right + 10 });
              setHovered(item.label);
            }}
            onMouseLeave={() => setHovered(null)}
          >
            {item.icon}
          </div>
        ))}
      </div>

      {hovered &&
        createPortal(
          <div
            className="fixed bg-white text-blue-800 text-lg px-2 py-1 rounded shadow-md font-semibold"
            style={{ top: coords.top, left: coords.left, transform: "translateY(-50%)" }}
          >
            {hovered}
          </div>,
          document.body
        )}
    </>
  );
};

export default Sidebar;

