const Loader = () => {
    return (
        <div className="bg-[#acabab] w-screen h-screen flex items-center justify-center">
            <div className="relative w-[150px] h-[150px] border-4 border-[#969595] rounded-full text-center leading-[150px] font-sans text-[20px] tracking-[4px] uppercase shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                <img
                    src="/assets/logos/nipun_logo.png"
                    alt="Logo"
                    className="w-full h-full rounded-full object-cover shrink-0"
                />
                {/* Circle Border Animation */}
                <div className="absolute top-[-3px] left-[-3px] w-full h-full border-[3px] border-transparent border-t-[#020234] border-r-[#020234] rounded-full animate-animateC"></div>

                {/* Rotating Line + Dot */}
                <span className="block absolute top-[calc(50%-2px)] left-1/2 w-1/2 h-[4px] bg-transparent origin-left animate-animate">
                    <span className="absolute w-[16px] h-[16px] rounded-full bg-[#020234] top-[-6px] right-[-8px] shadow-[0_0_20px_#020234]" />
                </span>
            </div>
        </div>
    );
};

export default Loader;
