import React from "react";

interface CardProps {
  title: string;
  content: string;
  percent: string;
}

const Salescard: React.FC<CardProps> = ({ title, content, percent }) => {
  return (
    <div className=" bg-white mt-4 w-60 h-96 p-2 rounded-lg flex flex-col space-y-4 ">
      <h2 className=" font-bold uppercase text-2xl ">{title}</h2>
      <p className="font-semibold text-orange-400 text-2xl">{content}</p>
      <div className=" bg-blue-500 flex justify-center items-center h-36 w-36 rounded-full ">
        <h2 className=" font-semibold text-lg">{percent}</h2>
      </div>
    </div>
  );
};

export default Salescard;
