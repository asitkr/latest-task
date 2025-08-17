import { useState } from "react";
import { MessageCircle, Search, ThumbsDown, ThumbsUp, UserPlus } from "lucide-react";

const PostPage = () => {
    const [search, setSearch] = useState("");

    return (
        <div className="min-w-[20%] min-h-screen bg-gray-100 overflow-y-auto">
            {/* Header Section */}
            <div className="w-full bg-white shadow-sm border-b border-gray-200 p-4 flex items-center justify-between sticky top-0 z-10">
                {/* Search */}
                <div className="relative w-full px-2">
                    <Search className="absolute left-5 top-3 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search Posts..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-10 py-3 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                </div>
            </div>

            {/* Post Container */}
            <div className="w-full p-6 mx-auto space-y-6">
                {/* Post Card */}
                <div className="bg-white rounded-md shadow-sm border border-gray-200 p-5 transition hover:shadow-md">
                    {/* Header */}
                    <div className="flex items-start gap-4">
                        {/* Profile Image */}
                        <img
                            src="/assets/images/profile.png"
                            alt="User profile"
                            className="w-10 h-10 rounded-full object-cover border shadow"
                        />

                        {/* Text Info */}
                        <div>
                            <h3 className="text-blue-700 font-semibold text-lg underline cursor-pointer">
                                6596. UTILISATION OF DDQ
                            </h3>
                            <p className="text-sm text-gray-800 mt-1">
                                <strong>CAPT DHIREN GOVIND</strong>{" "}
                                <span className="text-gray-500">(04674Y)</span>
                            </p>
                            <p className="text-xs text-gray-500">Jul 2, 2025</p>
                        </div>

                        {/* Post Tag or Label */}
                        <div className="ml-auto text-xs font-semibold text-gray-600">
                            DPA
                        </div>
                    </div>

                    {/* Content */}
                    <div className="mt-4 space-y-2 text-sm text-gray-700 leading-relaxed">
                        <p>
                            1. All Movement Control Offices (MCOs) have a special Defence
                            Quota (DDQ) in a reasonable number of trains, which all of us
                            always want more of.
                        </p>
                        <p>
                            2. However, of late, the Indian Railways have stopped issuing
                            WaitListed (WL) tickets when the booking reaches a certain limit
                            in a particular train.
                        </p>
                        <p>
                            3. Invariably, this popular train has a DDQ which now cannot be
                            utilised by Defence Personnel as the booking itself shows
                            REGRET...
                        </p>
                        <button className="text-blue-600 font-medium hover:underline mt-1">
                            Show More
                        </button>
                    </div>

                    {/* Reacted By */}
                    <div className="mt-3 text-xs text-gray-500">
                        Reacted By{" "}
                        <span className="font-semibold text-gray-700">
                            CMDE SV KODALAPURAM
                        </span>
                    </div>

                    {/* Footer Actions */}
                    <div className="mt-4 border-t pt-3 grid grid-cols-4 text-sm text-gray-600 divide-x">
                        <button className="flex items-center justify-center gap-1 hover:bg-gray-100 py-2 transition">
                            <ThumbsUp className="w-4 h-4" /> Like
                        </button>
                        <button className="flex items-center justify-center gap-1 hover:bg-gray-100 py-2 transition">
                            <ThumbsDown className="w-4 h-4" /> Dislike
                        </button>
                        <button className="flex items-center justify-center gap-1 hover:bg-gray-100 py-2 transition">
                            <MessageCircle className="w-4 h-4" /> Comment
                        </button>
                        <button className="flex items-center justify-center gap-1 hover:bg-gray-100 py-2 transition">
                            <UserPlus className="w-4 h-4" /> Follow
                        </button>
                    </div>
                </div>
            </div>
            <div className="p-6 w-full mx-auto space-y-6">
                {/* Post Card */}
                <div className="bg-white rounded-md shadow-sm border border-gray-200 p-5 transition hover:shadow-md">
                    {/* Header */}
                    <div className="flex items-start gap-4">
                        {/* Profile Image */}
                        <img
                            src="/assets/images/profile.png"
                            alt="User profile"
                            className="w-10 h-10 rounded-full object-cover border shadow"
                        />

                        {/* Text Info */}
                        <div>
                            <h3 className="text-blue-700 font-semibold text-lg underline cursor-pointer">
                                6596. UTILISATION OF DDQ
                            </h3>
                            <p className="text-sm text-gray-800 mt-1">
                                <strong>CAPT DHIREN GOVIND</strong>{" "}
                                <span className="text-gray-500">(04674Y)</span>
                            </p>
                            <p className="text-xs text-gray-500">Jul 2, 2025</p>
                        </div>

                        {/* Post Tag or Label */}
                        <div className="ml-auto text-xs font-semibold text-gray-600">
                            DPA
                        </div>
                    </div>

                    {/* Content */}
                    <div className="mt-4 space-y-2 text-sm text-gray-700 leading-relaxed">
                        <p>
                            1. All Movement Control Offices (MCOs) have a special Defence
                            Quota (DDQ) in a reasonable number of trains, which all of us
                            always want more of.
                        </p>
                        <p>
                            2. However, of late, the Indian Railways have stopped issuing
                            WaitListed (WL) tickets when the booking reaches a certain limit
                            in a particular train.
                        </p>
                        <p>
                            3. Invariably, this popular train has a DDQ which now cannot be
                            utilised by Defence Personnel as the booking itself shows
                            REGRET...
                        </p>
                        <button className="text-blue-600 font-medium hover:underline mt-1">
                            Show More
                        </button>
                    </div>

                    {/* Reacted By */}
                    <div className="mt-3 text-xs text-gray-500">
                        Reacted By{" "}
                        <span className="font-semibold text-gray-700">
                            CMDE SV KODALAPURAM
                        </span>
                    </div>

                    {/* Footer Actions */}
                    <div className="mt-4 border-t pt-3 grid grid-cols-4 text-sm text-gray-600 divide-x">
                        <button className="flex items-center justify-center gap-1 hover:bg-gray-100 py-2 transition">
                            <ThumbsUp className="w-4 h-4" /> Like
                        </button>
                        <button className="flex items-center justify-center gap-1 hover:bg-gray-100 py-2 transition">
                            <ThumbsDown className="w-4 h-4" /> Dislike
                        </button>
                        <button className="flex items-center justify-center gap-1 hover:bg-gray-100 py-2 transition">
                            <MessageCircle className="w-4 h-4" /> Comment
                        </button>
                        <button className="flex items-center justify-center gap-1 hover:bg-gray-100 py-2 transition">
                            <UserPlus className="w-4 h-4" /> Follow
                        </button>
                    </div>
                </div>
            </div>
            <div className="p-6 w-full mx-auto space-y-6">
                {/* Post Card */}
                <div className="bg-white rounded-md shadow-sm border border-gray-200 p-5 transition hover:shadow-md">
                    {/* Header */}
                    <div className="flex items-start gap-4">
                        {/* Profile Image */}
                        <img
                            src="/assets/images/profile.png"
                            alt="User profile"
                            className="w-10 h-10 rounded-full object-cover border shadow"
                        />

                        {/* Text Info */}
                        <div>
                            <h3 className="text-blue-700 font-semibold text-lg underline cursor-pointer">
                                6596. UTILISATION OF DDQ
                            </h3>
                            <p className="text-sm text-gray-800 mt-1">
                                <strong>CAPT DHIREN GOVIND</strong>{" "}
                                <span className="text-gray-500">(04674Y)</span>
                            </p>
                            <p className="text-xs text-gray-500">Jul 2, 2025</p>
                        </div>

                        {/* Post Tag or Label */}
                        <div className="ml-auto text-xs font-semibold text-gray-600">
                            DPA
                        </div>
                    </div>

                    {/* Content */}
                    <div className="mt-4 space-y-2 text-sm text-gray-700 leading-relaxed">
                        <p>
                            1. All Movement Control Offices (MCOs) have a special Defence
                            Quota (DDQ) in a reasonable number of trains, which all of us
                            always want more of.
                        </p>
                        <p>
                            2. However, of late, the Indian Railways have stopped issuing
                            WaitListed (WL) tickets when the booking reaches a certain limit
                            in a particular train.
                        </p>
                        <p>
                            3. Invariably, this popular train has a DDQ which now cannot be
                            utilised by Defence Personnel as the booking itself shows
                            REGRET...
                        </p>
                        <button className="text-blue-600 font-medium hover:underline mt-1">
                            Show More
                        </button>
                    </div>

                    {/* Reacted By */}
                    <div className="mt-3 text-xs text-gray-500">
                        Reacted By{" "}
                        <span className="font-semibold text-gray-700">
                            CMDE SV KODALAPURAM
                        </span>
                    </div>

                    {/* Footer Actions */}
                    <div className="mt-4 border-t pt-3 grid grid-cols-4 text-sm text-gray-600 divide-x">
                        <button className="flex items-center justify-center gap-1 hover:bg-gray-100 py-2 transition">
                            <ThumbsUp className="w-4 h-4" /> Like
                        </button>
                        <button className="flex items-center justify-center gap-1 hover:bg-gray-100 py-2 transition">
                            <ThumbsDown className="w-4 h-4" /> Dislike
                        </button>
                        <button className="flex items-center justify-center gap-1 hover:bg-gray-100 py-2 transition">
                            <MessageCircle className="w-4 h-4" /> Comment
                        </button>
                        <button className="flex items-center justify-center gap-1 hover:bg-gray-100 py-2 transition">
                            <UserPlus className="w-4 h-4" /> Follow
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostPage;