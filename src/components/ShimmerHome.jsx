const ShimmerHome = () => {
  return (
    <div className="bg-black min-h-screen overflow-hidden">
      {/* 1. Hero Section Placeholder */}
      <div className="relative w-screen aspect-video bg-gray-900 animate-pulse flex flex-col justify-center px-6 md:px-24">
        {/* Title Placeholder */}
        <div className="h-12 md:h-20 w-1/2 md:w-1/3 bg-gray-800 rounded-lg mb-6"></div>
        {/* Description Placeholder */}
        <div className="hidden md:block h-6 w-1/4 bg-gray-800 rounded-lg mb-4"></div>
        <div className="hidden md:block h-6 w-1/5 bg-gray-800 rounded-lg mb-8"></div>
        {/* Buttons Placeholder */}
        <div className="flex gap-4">
          <div className="h-12 w-24 md:w-32 bg-gray-700 rounded-lg"></div>
          <div className="h-12 w-24 md:w-32 bg-gray-700 rounded-lg"></div>
        </div>
      </div>

      {/* 2. Movie Row Placeholders (Repeating 3 times) */}
      <div className="relative -mt-20 md:-mt-40 z-30 pl-4 md:pl-12">
        {[1, 2, 3].map((row) => (
          <div key={row} className="mb-12">
            {/* Category Title */}
            <div className="h-8 w-40 bg-gray-900 rounded mb-4 animate-pulse"></div>
            {/* Poster Row */}
            <div className="flex gap-4 overflow-hidden">
              {[1, 2, 3, 4, 5, 6].map((poster) => (
                <div 
                  key={poster} 
                  className="min-w-32.5 md:min-w-50 h-50 md:h-75 bg-gray-950 rounded-lg animate-pulse"
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerHome;