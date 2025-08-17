import { Search } from "lucide-react";
import { lazy, useState } from "react";

const ParticipationChartCard = lazy(() => import("./ParticipationChartCard"));

const mostActiveUser = {
  name: "VISHNU SINGH NAOMI",
  id: "1419191 (DLGIA)",
  post: 0,
  like: 1,
  comment: 1,
  follow: 0,
};

const tags = ["Agniveers", "Weapon", "Deterrence","Deterrence","Deterrence", "Cybersecurity", "Logistics", "Strategy", "Naval Warfare", "Maritime Security"];

const RightSidebar = () => {
    const [cnsTab, setCnsTab] = useState("appreciated");
    const [trendTab, setTrendTab] = useState("research");

    return (
        <div className="bg-gray-50 border-l border-gray-300 p-2 text-xs space-y-4 h-full">
            {/* Most Active Members */}
            <div className="bg-white rounded shadow">
                <div className="bg-[#020234] text-white text-center py-2 text-sm font-semibold">
                    Most Active Members
                </div>
                <div className="p-3 text-center relative flex flex-col items-center">
                    <img
                        src="/assets/images/profile.png"
                        alt="User profile"
                        className="w-8 h-8 rounded-full object-cover"
                    />
                    <p className="font-bold text-blue-900 text-[11px]">
                        {mostActiveUser.name}
                    </p>
                    <p className="text-[10px] text-gray-600">{mostActiveUser.id}</p>
                    <div className="absolute top-3 right-3 w-7 h-7 bg-yellow-400 rounded-full flex items-center justify-center shadow-md text-xl">
                        🏅
                    </div>

                    <hr className="my-2 border-gray-300" />

                    <div className="max-h-[130px] overflow-y-auto mt-2 grid grid-cols-4 text-[10px] gap-10">
                        <div>
                            <p className="font-semibold">Post</p>
                            <p>{mostActiveUser.post}</p>
                        </div>
                        <div>
                            <p className="font-semibold">Like</p>
                            <p>{mostActiveUser.like}</p>
                        </div>
                        <div>
                            <p className="font-semibold">Comment</p>
                            <p>{mostActiveUser.comment}</p>
                        </div>
                        <div>
                            <p className="font-semibold">Follow</p>
                            <p>{mostActiveUser.follow}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* From CNS Desk */}
            <div className="bg-white rounded shadow overflow-hidden">
                <div className="bg-[#020234] text-white text-sm font-semibold px-3 py-2">
                    From CNS Desk
                </div>
                <div className="grid grid-cols-1 divide-x text-[12px] text-center cursor-pointer">
                    <div
                        onClick={() => setCnsTab("appreciated")}
                        className={`py-2 ${cnsTab === "appreciated"
                            ? "bg-[#2323a1] font-semibold text-white"
                            : "hover:bg-gray-100"
                            }`}
                    >
                        Appreciated Research/Studies
                    </div>
                    {/* <div
            onClick={() => setCnsTab("comment")}
            className={`py-2 ${
              cnsTab === "comment"
                ? "bg-blue-100 font-semibold text-blue-900"
                : "hover:bg-gray-100"
            }`}
          >
            CNS Comment
          </div> */}
                </div>
                <div className="p-3 text-[11px] text-gray-700 max-h-[100px] overflow-y-auto">
                    {cnsTab === "appreciated" ? (
                        <p>
                            The study on “Maritime Strategic Depth in the IOR” has been
                            greatly appreciated.
                        </p>
                    ) : (
                        <p>“We need to build more collaborative maritime think-tanks.”</p>
                    )}
                </div>
            </div>

            {/* Trending Section */}
            <div className="bg-white rounded shadow overflow-hidden">
                <div className="bg-[#020234] text-white text-sm font-semibold px-3 py-2">
                    Trending
                </div>
                <div className="grid grid-cols-2 divide-x text-[12px] text-center cursor-pointer">
                    <div
                        onClick={() => setTrendTab("research")}
                        className={`py-2 ${trendTab === "research"
                            ? "bg-[#2323a1] font-semibold text-white"
                            : "hover:bg-gray-100"
                            }`}
                    >
                        Research/Studies
                    </div>
                    <div
                        onClick={() => setTrendTab("comment")}
                        className={`py-2 ${trendTab === "comment"
                            ? "bg-[#2323a1] font-semibold text-white"
                            : "hover:bg-gray-100"
                            }`}
                    >
                        Comment
                    </div>
                </div>
                <div className="p-3 text-[11px] text-gray-700 max-h-[100px] overflow-y-auto">
                    {trendTab === "research" ? (
                        <p>
                            “Naval Cyber Strategy 2040” is gaining attention among scholars.
                        </p>
                    ) : (
                        <p>
                            Lt Cdr Ravi commented on the Maritime Logistics study: “Insightful
                            and futuristic.”
                        </p>
                    )}
                </div>
            </div>

            {/* Tags Being Used */}
            <div className="bg-white rounded shadow overflow-hidden">
                <div className="bg-[#020234] text-white text-sm font-semibold px-3 py-2">
                    Tags being used.
                </div>
                <div className="relative p-2">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <Search className="w-4 h-4 text-gray-400 ml-2" />
                    </div>
                    <input
                        className="w-full pl-9 pr-3 py-2 rounded-md border text-sm border-gray-300 focus:outline-blue-400"
                        placeholder="Search By Tags..."
                    />
                </div>
                <div className="px-3 pb-3 space-y-2 text-sm max-h-[150px] overflow-y-auto">
                    {tags.map((tag, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-800">
                            <span className="text-blue-600 font-bold">#</span>
                            {tag}
                        </div>
                    ))}
                </div>
            </div>

            {/* Participation Chart */}
            <ParticipationChartCard />
        </div>
    )
}

export default RightSidebar;