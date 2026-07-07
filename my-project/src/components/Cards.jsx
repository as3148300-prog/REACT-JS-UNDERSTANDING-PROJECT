import React from "react";

const Cards = ({ data , click , index}) => {
  const { img, songname, authorname, addfav } = data;
  console.log(img);
  return (
    <div
      className="w-70 p-2 bg-gray-300 flex items-center
     gap-5 rounded-2xl overflow-hidden"
    >
      <div className="w-20 h-20 bg-red-500 overflow-hidden rounded-2xl ">
        <img src={img} alt={songname} className="w-full h-full object-cover" />
      </div>
      <div>
        <h1 className="text-2xl font-bold">{songname}</h1>
        <h3 className="text-1xl font-light ">{authorname}</h3>
        <button onClick={()=>click(index)} className={`p-3 ${addfav === false ? "bg-red-400" : "bg-blue-300"} font-medium mt-5 rounded-full text-white cursor-pointer `}>
          {addfav === false ? " Add Favrioute ❤️" : "Favriote"}
        </button>
      </div>
    </div>
  );
};

export default Cards;
