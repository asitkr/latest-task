import React, { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="relative w-[230px] h-[30px]">
      {/* Toggle Checkbox (invisible over icon) */}
      <input
        type="checkbox"
        checked={!isCollapsed}
        onChange={() => setIsCollapsed(!isCollapsed)}
        className="appearance-none absolute right-2 top-[10px] w-[30px] h-[30px] cursor-pointer z-10"
      />

      {/* Main Box */}
      <div
        className={`absolute right-0 -top-0.5 h-[40px] flex items-center justify-between rounded-full bg-white transition-all duration-300 ease-in-out overflow-hidden ${
          isCollapsed ? "w-[40px] h-[36px]" : "w-[230px] h-[36px]"
        }`}
      >
        {/* Input (grows leftward) */}
        <input
          type="text"
          placeholder="Search"
          className={`bg-transparent border-none outline-none text-[#020234] text-base placeholder:text-[#020234] transition-all duration-300 ${
            isCollapsed ? "w-0 opacity-0" : "w-[170px] pl-3 opacity-100"
          }`}
        />

        {/* Icon (always pinned right) */}
        <div className="pr-2.5">
          <Search className="text-[#020234] w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

// import React, { useState } from "react";
// import { Search } from "lucide-react";

// const SearchBar = () => {
//   const [isCollapsed, setIsCollapsed] = useState(true);

//   return (
//     <div className="relative flex items-center">
//       {/* Toggle Button (invisible but clickable over icon) */}
//       <input
//         type="checkbox"
//         checked={!isCollapsed}
//         onChange={() => setIsCollapsed(!isCollapsed)}
//         className="appearance-none absolute right-0 w-[30px] h-[30px] cursor-pointer z-10"
//       />

//       {/* Main Box */}
//       <div
//         className={`flex items-center justify-between rounded-full bg-white transition-all duration-300 ease-in-out overflow-hidden ${
//           isCollapsed ? "w-[36px] h-[36px]" : "w-[230px] h-[36px]"
//         }`}
//       >
//         {/* Input (expands leftward) */}
//         <input
//           type="text"
//           placeholder="Search"
//           className={`bg-transparent border-none outline-none text-[#020234] text-sm placeholder:text-[#020234]/80 transition-all duration-300 ${
//             isCollapsed ? "w-0 opacity-0" : "w-[170px] pl-3 opacity-100"
//           }`}
//         />

//         {/* Icon */}
//         <div className="pr-2 flex items-center justify-center">
//           <Search className="text-[#020234] w-5 h-5" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchBar;

