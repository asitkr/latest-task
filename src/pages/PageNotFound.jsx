import { useEffect } from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    useEffect(() => {
        const body = document.querySelector("#star-container");

        const createStar = () => {
            const star = document.createElement("div");
            star.className =
                "absolute w-[2px] h-[2px] bg-white animate-starTwinkle";
            star.style.top = Math.random() * window.innerHeight + "px";
            star.style.right = "0px";

            body.appendChild(star);

            let right = 0;
            const interval = setInterval(() => {
                if (right >= window.innerWidth) {
                    star.remove();
                    clearInterval(interval);
                }
                right += 3;
                star.style.right = right + "px";
            }, 10);
        };

        const interval = setInterval(createStar, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            id="star-container"
            className="relative flex justify-center items-center h-screen overflow-hidden"
            style={{
                backgroundImage:
                    "linear-gradient(to top, #2e1753, #1f1746, #131537, #0d1028, #050819)",
            }}
        >
            {/* Text */}
            <div className="absolute top-10 text-center text-white">
                <div className="text-xl tracking-widest">ERROR</div>
                <h1 className="text-7xl font-bold">404</h1>
                <hr className="my-2 border-gray-500" />
                <div className="text-xl">Page Not Found</div>
            </div>

            {/* Astronaut */}
            <div className="absolute top-1/2">
                <img
                    src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png"
                    alt="astronaut"
                    className="w-24 animate-astronautFly"
                />
            </div>

            <Link to="/" className="backtohome">
                <div className="original">Back To Home</div>
                <div className="letters">
                    {"Back To Home".split("").map((char, i) => (
                        <span
                            key={i}
                            style={{ transitionDelay: `${i * 0.1}s` }} // auto delay
                        >
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                </div>
            </Link>
        </div>
    );
};

export default PageNotFound;
