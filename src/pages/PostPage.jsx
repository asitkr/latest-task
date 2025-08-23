import { useEffect, useRef, useState } from "react";
import { ChevronDown, MessageCircle, Search, ThumbsDown, ThumbsUp, UserPlus } from "lucide-react";
import { searchTypes } from "../utils";

const PostPage = () => {
    const dropdownRef = useRef(null);
    const [searchType, setSearchType] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearch = () => {
        if (searchQuery.trim()) {
            console.log('Searching for:', searchQuery, 'in category:', searchType);
            // Here you would typically make an API call or perform the search
            alert(`Searching for "${searchQuery}" in ${searchTypes.find(type => type.value === searchType)?.label} category`);
        } else {
            alert('Please enter a search query');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleTypeSelect = (value) => {
        setSearchType(value);
        setIsDropdownOpen(false);
    };

    return (
        <div className="min-w-[20%] min-h-screen bg-gray-100 overflow-y-auto">
            {/* Header Section */}
            {/* <div className="w-full bg-white shadow-sm border-b border-gray-200 p-4 flex items-center justify-between sticky top-0 z-10">
                <div className="w-full relative px-2">
                    <div className="w-full flex border border-gray-300 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                        <button
                            type="button"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="h-full px-4 py-3 bg-gray-50 border-r border-gray-300 text-left focus:outline-none flex items-center gap-2 min-w-32"
                        >
                            <span className="text-gray-900 text-sm font-medium">
                                {searchTypes.find(type => type.value === searchType)?.label}
                            </span>
                            <ChevronDown className={`h-4 w-4 ml-16 text-gray-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute top-full left-0 w-48 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                                {searchTypes.map((type) => (
                                    <button
                                        key={type.value}
                                        onClick={() => {
                                            setSearchType(type.value);
                                            setIsDropdownOpen(false);
                                        }}
                                        className={`w-full px-4 py-3 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg ${searchType === type.value ? 'bg-blue-50 text-blue-700' : 'text-gray-900'
                                            }`}
                                    >
                                        {type.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Enter your search terms..."
                        className="flex-grow px-4 py-3 focus:outline-none"
                    />

                    <button
                        onClick={handleSearch}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-medium transition-colors duration-200 flex items-center gap-2"
                    >
                        <Search className="h-5 w-5" />
                        <span className="hidden sm:inline">Search</span>
                    </button>
                </div>
            </div> */}

            {/* <div className="w-full bg-white shadow-sm border-b border-gray-200 p-4 sticky top-0 z-10">
                <div className="w-full flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
                    <div className="relative" ref={dropdownRef}>
                        <button
                            type="button"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="h-full px-4 py-3 bg-gray-50 border-r border-gray-300 text-left flex items-center gap-2 min-w-32"
                        >
                            <span className="text-gray-900 text-sm font-medium">
                                {searchTypes?.find((type) => type.value === searchType)?.label}
                            </span>
                            <ChevronDown
                                className={`h-4 w-4 ml-auto text-gray-400 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute top-full left-0 w-48 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                                {searchTypes?.map((type, index) => (
                                    <button
                                        key={type.value}
                                        onClick={() => handleTypeSelect(type.value)}
                                        className={`w-full px-4 py-3 text-left text-sm transition-colors duration-150 ${index === 0 ? 'rounded-t-lg' : ''
                                            } ${index === searchTypes.length - 1 ? 'rounded-b-lg' : ''
                                            } ${searchType === type.value
                                                ? 'bg-blue-50 text-blue-700'
                                                : 'text-gray-900 hover:bg-gray-50'
                                            }`}
                                    >
                                        {type?.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Enter your search terms..."
                        className="flex-grow px-4 py-3 focus:outline-none text-sm"
                    />

                    <button
                        onClick={handleSearch}
                        className="bg-blue-600 hover:bg-[#020234] text-white px-6 py-3 font-medium transition-colors duration-200 flex items-center gap-2"
                    >
                        <Search className="h-5 w-5" />
                        <span className="hidden sm:inline">Search</span>
                    </button>
                </div>
            </div> */}

            <div className="w-full bg-white shadow-sm border-b border-gray-200 p-4 sticky top-0 z-10">
                <div className="relative w-full">
                    <div className="w-full flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
                        <div className="relative" ref={dropdownRef}>
                            <button
                                type="button"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="h-full w-48 px-4 py-3 bg-gray-50 border-r border-gray-300 text-left flex items-center gap-2 min-w-32"
                            >
                                <span className="text-gray-900 text-sm font-medium">
                                    {searchTypes?.find((type) => type.value === searchType)?.label}
                                </span>
                                <ChevronDown
                                    className={`h-4 w-4 ml-auto text-gray-400 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                        </div>

                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Enter your search terms..."
                            className="flex-grow px-4 py-3 focus:outline-none text-sm"
                        />

                        <button
                            onClick={handleSearch}
                            className="bg-blue-600 hover:bg-[#020234] text-white px-6 py-3 font-medium transition-colors duration-200 flex items-center gap-2"
                        >
                            <Search className="h-5 w-5" />
                            <span className="hidden sm:inline">Search</span>
                        </button>
                    </div>

                    {/* Dropdown moved outside overflow container */}
                    {isDropdownOpen && (
                        <div className="absolute top-full left-0 w-48 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                            {searchTypes?.map((type, index) => (
                                <button
                                    key={type.value}
                                    onClick={() => handleTypeSelect(type.value)}
                                    className={`w-full px-4 py-3 text-left text-sm transition-colors duration-150 ${index === 0 ? 'rounded-t-lg' : ''
                                        } ${index === searchTypes.length - 1 ? 'rounded-b-lg' : ''
                                        } ${searchType === type.value
                                            ? 'bg-blue-50 text-blue-700'
                                            : 'text-gray-900 hover:bg-gray-50'
                                        }`}
                                >
                                    {type?.label}
                                </button>
                            ))}
                        </div>
                    )}
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