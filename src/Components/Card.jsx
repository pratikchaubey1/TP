import React from "react";

const Card = () => {
  return (
    <div className="group relative w-[190px] h-[254px] rounded-[12px] shadow-[0_0_12px_4px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-500 hover:scale-110 hover:rounded-[16px] cursor-pointer">
      
      {/* First Content */}
      <div className="absolute inset-0 flex items-center justify-center opacity-100 transition-all duration-500 gap-5 group-hover:opacity-0 group-hover:h-0" >
        <img
          src=""
          alt="Front"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Second Content */}
      <div className="absolute inset-0 flex items-center justify-center h-0 opacity-0 rotate-90 scale-x-[-1] transition-all duration-500 group-hover:opacity-100 group-hover:h-full group-hover:rotate-0 group-hover:scale-x-100">
        <img
          src=""
          alt="Back"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Card;
