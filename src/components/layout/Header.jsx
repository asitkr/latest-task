import { lazy, useState } from "react";
import { CloudUploadIcon } from "lucide-react";
import { useSelector } from "react-redux";

const ResearchModal = lazy(() => import("../ResearchModal"));

const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const { user } = useSelector((state) => state.auth);

    const handleResearchModal = () => {
        setShowModal(false)
    }

    console.log(user);
    

    return (
        <>
            <div className="w-full bg-[#020234] text-white sticky top-0">
                <div className="w-full flex items-center px-8 py-4">
                    <div className="ml-10 w-20 h-20">
                        <img
                            src="/assets/logos/nipun_logo.png"
                            alt="Logo"
                            className="w-full h-full rounded-full object-cover shrink-0"
                        />
                    </div>

                    <p className="w-full flex-1 pl-16 text-3xl">
                        Naval Intellectual Portal for Unified Knowledge ( निपुण )
                    </p>

                    <div className="flex items-center gap-6">
                        <button 
                            onClick={() => setShowModal(true)}
                            className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-5 py-[11px] rounded-full text-sm shadow-md transition">
                            <CloudUploadIcon className="w-6 h-6" />
                            <span>
                                Submit Research/Studies
                            </span>
                        </button>

                        <div className="relative group">
                            <button className="flex items-center bg-white text-blue-900 px-4 py-1 rounded-full shadow hover:shadow-lg transition space-x-2 min-w-[160px] max-w-full">
                                <img
                                    src="/assets/images/profile.png"
                                    alt="User profile"
                                    className="w-8 h-8 rounded-full object-cover"
                                />
                                <span className="text-sm font-medium whitespace-nowrap">
                                    Devanand Verma
                                </span>
                            </button>
                            <div className="absolute right-0 mt-2 w-56 bg-white text-blue-900 rounded-lg shadow-lg p-4 text-sm hidden group-hover:block z-50">
                                <p className="font-semibold text-base mb-2">User Profile</p>
                                <div className="flex items-center space-x-3">
                                    <img
                                        src="/assets/images/profile.png"
                                        alt="User profile"
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                    <div className="min-w-0">
                                        <p className="font-medium break-words">Devanand Verma</p>
                                        <p className="text-xs text-gray-500 break-all">
                                            user@email.com
                                        </p>
                                    </div>
                                </div>
                                <hr className="my-2" />
                                <div className="space-y-1">
                                    <button className="w-full text-left hover:text-blue-600">
                                        View Profile
                                    </button>
                                    <button className="w-full text-left hover:text-blue-600">
                                        Settings
                                    </button>
                                    <button className="w-full text-left hover:text-red-500">
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ResearchModal onClose={handleResearchModal} showModal={showModal} />
        </>
    )
}

export default Header;