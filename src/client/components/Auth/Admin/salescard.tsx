import React from "react";

interface CardProps {
  title: string;
  content: string;
  percent: string;
}

const Salescard: React.FC<CardProps> = ({ title, content, percent }) => {
  return (
    <div className=" bg-white mt-4 w-96 h-60 p-8 rounded-lg flex flex-col space-y-4 ">
      <h2 className=" font-bold uppercase text-2xl ">{title}</h2>
      <div className="flex justify-between" >
        <p className="font-semibold text-orange-400 text-2xl">{content}</p>
        <div className=" w-32 h-32 border-[8px] border-r-gray-200 rounded-full border-orange-400 flex justify-center items-center ">
          {percent}
        </div>
      </div>
    </div>
  );
};

export default Salescard;
