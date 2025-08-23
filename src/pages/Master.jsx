import { useState } from "react";
import { tabsData } from "../utils";
import TabTable from "../components/TabTable";

const Master = () => {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <div className="w-full min-h-screen flex flex-col items-center bg-gradient-to-b from-[#141e30] to-[#243b55] p-10">
            <div className="w-full bg-[#16181a] rounded-lg shadow-md border border-gray-700">
                {/* Tab headers */}
                <div className="flex relative border-b border-gray-700 m-3">
                    {tabsData?.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 py-2 px-4 text-xs uppercase tracking-wider font-medium rounded-t-md transition ${activeTab === tab.id
                                    ? `${tab.color} bg-[#1f2124]`
                                    : "text-gray-300 hover:text-gray-400"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                    {/* Glider */}
                    <div
                        className="absolute bottom-0 h-[3px] bg-gradient-to-r from-indigo-400 to-sky-400 rounded transition-all duration-300"
                        style={{
                            width: `${100 / tabsData.length}%`,
                            left: `${(activeTab - 1) * (100 / tabsData.length)}%`,
                        }}
                    ></div>
                </div>

                {/* Tab content */}
                <div className="p-4 min-h-[200px]"><TabTable /></div>
            </div>
        </div>
    )
}

export default Master;