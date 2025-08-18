// import { lazy } from "react";
// import { ChevronDown, Search } from "lucide-react";

// const PostPage = lazy(() => import("./PostPage"));
// const RightSidebar = lazy(() => import("./../components/RightSidebar"));

// const Hero = () => {
//     return (
//         <div className="flex w-full min-h-screen">
//             <div className="w-full flex flex-row">
//                 {/* Sidebar */}
//                 <div className="min-w-[20%] flex flex-col">
//                     {/* Sticky Wrapper */}
//                     <div className="sticky top-0">
//                         {/* Scrollable Inner */}
//                         <div className="w-full min-w-[250px] bg-gray-100 border-r border-gray-300 p-2 space-y-4 h-[calc(100vh-5rem)] overflow-y-auto">
//                             {/* Profile */}
//                             <div className="bg-white text-blue-900 rounded-lg shadow p-4 text-sm">
//                                 <div className="flex items-center space-x-3">
//                                     <img
//                                         src="/assets/images/profile.png"
//                                         alt="User profile"
//                                         className="w-10 h-10 rounded-full object-cover border shadow"
//                                     />
//                                     <div className="min-w-0">
//                                         <p className="font-medium break-words">Devanand Verma</p>
//                                         <p className="text-xs text-gray-500 break-all">12345A</p>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Themes */}
//                             <div className="bg-white rounded shadow">
//                                 <div className="flex justify-between items-center bg-[#020234] px-3 py-2 rounded-t">
//                                     <h3 className="font-semibold text-white text-sm">Themes</h3>
//                                 </div>
//                                 <div className="relative p-2">
//                                     <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
//                                         <Search className="w-4 h-4 text-gray-400 ml-2" />
//                                     </div>
//                                     <input
//                                         className="w-full pl-9 pr-3 py-2 rounded-md border text-sm border-gray-300 focus:outline-blue-400"
//                                         placeholder="Search Themes..."
//                                     />
//                                 </div>
//                                 <div className="space-y-2 px-3 pb-3">
//                                     {["Maritime Strategy", "Naval Power", "Cyber Warfare"].map(
//                                         (item, idx) => (
//                                             <details
//                                                 key={idx}
//                                                 className="bg-gray-50 rounded border px-3 py-2 text-sm text-blue-800"
//                                             >
//                                                 <summary className="flex justify-between items-center cursor-pointer font-medium">
//                                                     {item}
//                                                     <ChevronDown className="w-4 h-4 text-blue-600" />
//                                                 </summary>
//                                                 <p className="mt-2 text-xs text-gray-600">
//                                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                                                 </p>
//                                             </details>
//                                         )
//                                     )}
//                                 </div>
//                             </div>

//                             {/* Institutes */}
//                             <div className="bg-white rounded shadow">
//                                 <div className="flex justify-between items-center bg-[#020234] px-3 py-2 rounded-t">
//                                     <h3 className="font-semibold text-white text-sm">Institutes</h3>
//                                 </div>
//                                 <div className="relative p-2">
//                                     <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
//                                         <Search className="w-4 h-4 text-gray-400 ml-2" />
//                                     </div>
//                                     <input
//                                         className="w-full pl-9 pr-3 py-2 rounded-md border text-sm border-gray-300 focus:outline-blue-400"
//                                         placeholder="Search Institutes..."
//                                     />
//                                 </div>
//                                 <div className="space-y-2 px-3 pb-3">
//                                     {["Naval War College", "Indian Naval Academy", "DRDO"].map(
//                                         (inst, idx) => (
//                                             <details
//                                                 key={idx}
//                                                 className="bg-gray-50 rounded border px-3 py-2 text-sm text-blue-800"
//                                             >
//                                                 <summary className="flex justify-between items-center cursor-pointer font-medium">
//                                                     {inst}
//                                                     <ChevronDown className="w-4 h-4 text-blue-600" />
//                                                 </summary>
//                                                 <p className="mt-2 text-xs text-gray-600">
//                                                     Details about {inst}.
//                                                 </p>
//                                             </details>
//                                         )
//                                     )}
//                                 </div>
//                             </div>

//                             {/* Content Types */}
//                             <div className="bg-white rounded shadow">
//                                 <div className="flex justify-between items-center bg-[#020234] px-3 py-2 rounded-t">
//                                     <h3 className="font-semibold text-white text-sm">Content Types</h3>
//                                 </div>
//                                 <div className="relative p-2">
//                                     <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
//                                         <Search className="w-4 h-4 text-gray-400 ml-2" />
//                                     </div>
//                                     <input
//                                         className="w-full pl-9 pr-3 py-2 rounded-md border text-sm border-gray-300 focus:outline-blue-400"
//                                         placeholder="Search Content Types..."
//                                     />
//                                 </div>
//                                 <div className="space-y-2 px-3 pb-3">
//                                     {[
//                                         "Training",
//                                         "Research Products",
//                                         "Incidental Studies",
//                                         "Institutional Studies",
//                                     ].map((type, idx) => (
//                                         <details
//                                             key={idx}
//                                             className="bg-gray-50 rounded border px-3 py-2 text-sm text-blue-800"
//                                         >
//                                             <summary className="flex justify-between items-center cursor-pointer font-medium">
//                                                 {type}
//                                                 <ChevronDown className="w-4 h-4 text-blue-600" />
//                                             </summary>
//                                             <p className="mt-2 text-xs text-gray-600">
//                                                 Sample description for {type}.
//                                             </p>
//                                         </details>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Main Content */}
//                 <div className="flex-1 bg-white overflow-y-auto">
//                     <PostPage />
//                 </div>

//                 {/* Right Sidebar (optional) */}
//                 <div className="w-[20%] bg-gray-50 border-l sticky top-0 z-50">
//                     <RightSidebar />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Hero;


import { lazy } from "react";
import { ChevronDown, Search } from "lucide-react";
import { contentData, instituteData, themesData } from "../utils";

const PostPage = lazy(() => import("./PostPage"));
const RightSidebar = lazy(() => import("./../components/RightSidebar"));

const Hero = () => {
  return (
    <div className="w-full h-screen flex">
      {/* Sidebar */}
      <aside className="w-[20%] border-r bg-gray-100 h-full sticky top-0">
        <div className="h-full overflow-y-auto p-2 space-y-4">
          {/* Profile */}
          <div className="bg-white text-blue-900 rounded-lg shadow p-4 text-sm">
            <div className="flex items-center space-x-3">
              <img
                src="/assets/images/profile.png"
                alt="User profile"
                className="w-10 h-10 rounded-full object-cover border shadow"
              />
              <div className="min-w-0">
                <p className="font-medium break-words">Devanand Verma</p>
                <p className="text-xs text-gray-500 break-all">12345A</p>
              </div>
            </div>
          </div>

          {/* Themes */}
          <div className="bg-white rounded shadow">
            <div className="flex justify-between items-center bg-[#020234] px-3 py-2 rounded-t">
              <h3 className="font-semibold text-white text-sm">Themes</h3>
            </div>
            <div className="relative p-2">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-gray-400 ml-2" />
              </div>
              <input
                className="w-full pl-9 pr-3 py-2 rounded-md border text-sm border-gray-300 focus:outline-blue-400"
                placeholder="Search Themes..."
              />
            </div>
            <div className="space-y-2 px-3 pb-3 max-h-[180px] overflow-y-auto">
              {themesData?.map((item) => (
                <details
                  key={item?.id}
                  className="bg-gray-50 rounded border px-3 py-2 text-sm text-blue-800"
                >
                  <summary className="flex justify-between items-center cursor-pointer font-medium">
                    {item?.name}
                    <ChevronDown className="w-4 h-4 text-blue-600" />
                  </summary>
                  <p className="mt-2 text-xs text-gray-600">
                    {item?.description}
                  </p>
                </details>
              ))}
            </div>
          </div>

          {/* Institutes */}
          <div className="bg-white rounded shadow">
            <div className="flex justify-between items-center bg-[#020234] px-3 py-2 rounded-t">
              <h3 className="font-semibold text-white text-sm">Institutes</h3>
            </div>
            <div className="relative p-2">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-gray-400 ml-2" />
              </div>
              <input
                className="w-full pl-9 pr-3 py-2 rounded-md border text-sm border-gray-300 focus:outline-blue-400"
                placeholder="Search Institutes..."
              />
            </div>
            <div className="space-y-2 px-3 pb-3 max-h-[180px] overflow-y-auto">
              {instituteData?.map((inst) => (
                <details
                  key={inst?.id}
                  className="bg-gray-50 rounded border px-3 py-2 text-sm text-blue-800"
                >
                  <summary className="flex justify-between items-center cursor-pointer font-medium">
                    {inst?.name}
                    <ChevronDown className="w-4 h-4 text-blue-600" />
                  </summary>
                  <p className="mt-2 text-xs text-gray-600">
                    {inst?.id} Details about {inst?.description}.
                  </p>
                </details>
              ))}
            </div>
          </div>

          {/* Content Types */}
          <div className="bg-white rounded shadow">
            <div className="flex justify-between items-center bg-[#020234] px-3 py-2 rounded-t">
              <h3 className="font-semibold text-white text-sm">Content Types</h3>
            </div>
            <div className="relative p-2">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-gray-400 ml-2" />
              </div>
              <input
                className="w-full pl-9 pr-3 py-2 rounded-md border text-sm border-gray-300 focus:outline-blue-400"
                placeholder="Search Content Types..."
              />
            </div>
            <div className="space-y-2 px-3 pb-3 max-h-[180px] overflow-y-auto">
              {contentData?.map((type) => (
                <details
                  key={type?.id}
                  className="bg-gray-50 rounded border px-3 py-2 text-sm text-blue-800"
                >
                  <summary className="flex justify-between items-center cursor-pointer font-medium">
                    {type?.name}
                    <ChevronDown className="w-4 h-4 text-blue-600" />
                  </summary>
                  <p className="mt-2 text-xs text-gray-600">
                    {type?.id} Sample description for {type?.description}.
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 h-full overflow-y-auto bg-white">
        <PostPage />
      </main>

      {/* Right Sidebar */}
      <aside className="w-[20%] border-l bg-gray-50 h-full sticky top-0">
        <div className="h-full overflow-y-auto">
          <RightSidebar />
        </div>
      </aside>
    </div>
  );
};

export default Hero;
