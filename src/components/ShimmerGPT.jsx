const ShimmerGPT = () => {
  return (
    <div className="p-4 m-4 bg-black/80 flex flex-wrap justify-center gap-6">
      {/* Create 5-10 "ghost" cards */}
      {Array(20).fill("").map((_, index) => (
        <div 
          key={index} 
          className="w-32 md:w-48 h-48 md:h-72 bg-gray-800 rounded-lg animate-pulse"
        ></div>
      ))}
    </div>
  );
};


export default ShimmerGPT;