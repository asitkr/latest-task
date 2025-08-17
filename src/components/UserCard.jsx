const UserCard = () => {
  return (
    <div className="w-full rounded-2xl bg-[#020234] p-2 shadow-md shadow-gray-500/20 transition-transform duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:scale-105">
      {/* Top Section */}
      <div className="relative flex justify-between h-[150px] flex-col rounded-xl bg-gradient-to-tr from-cyan-700 to-cyan-300">
        {/* Border effect */}
        <div className="relative h-[30px] w-[130px] skew-x-[-40deg] rounded-br-md bg-[#1b233d]">
          <div className="absolute right-[-15px] top-0 h-[15px] w-[15px] rounded-tl-md bg-transparent shadow-[-10px_-5px_0_2px_#1b233d]" />
        </div>
        {/* corner cut effect */}
        <div className="absolute left-0 top-[30px] h-[15px] w-[15px] rounded-tl-xl bg-transparent shadow-[-5px_-5px_0_2px_#1b233d]" />

        {/* Icons Row */}
        <div className="absolute top-0 flex h-[30px] w-full items-center justify-between">
          {/* Logo */}
          {/* <div className="h-full aspect-square pl-4 pt-2">
            
          </div> */}

          {/* Social Icons */}
          <div className="flex h-full items-center gap-2 pr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              className="h-full fill-[#1b233d] hover:fill-white transition"
            >
              <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953L3 20.001953C3 23.860953 6.1419531 27 10.001953 27L20.001953 27C23.860953 27 27 23.858047 27 19.998047L27 9.9980469C27 6.1390469 23.858047 3 19.998047 3L9.9980469 3zM22 7C22.552 7 23 7.448 23 8C23 8.552 22.552 9 22 9C21.448 9 21 8.552 21 8C21 7.448 21.448 7 22 7zM15 9C18.309 9 21 11.691 21 15C21 18.309 18.309 21 15 21C11.691 21 9 18.309 9 15C9 11.691 11.691 9 15 9zM15 11A4 4 0 0011 15A4 4 0 0015 19A4 4 0 0019 15A4 4 0 0015 11z"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-4 px-2 py-3">
        <span className="block text-center text-lg font-bold tracking-widest text-white">
          UNIVERSE OF UI
        </span>

        <div className="mt-5 flex justify-between text-xs">
          <div className="flex-1 text-center text-cyan-200/80">
            <span className="block text-sm font-semibold">2626</span>
            <span>UI elements</span>
          </div>
          <div className="flex-1 border-x border-white/20 text-center text-cyan-200/80">
            <span className="block text-sm font-semibold">100%</span>
            <span>Free for use</span>
          </div>
          <div className="flex-1 text-center text-cyan-200/80">
            <span className="block text-sm font-semibold">38,631</span>
            <span>Contributors</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCard;