import React from 'react';

interface CardProps {
  title: string;
  content: string;
  percent: string;
}

const Card: React.FC<CardProps> = ({ title, content, percent }) => {
  return (
    <div className=" bg-white mt-4 w-60 h-36 p-2 rounded-lg flex flex-col space-y-4 ">
      <h2 className=' font-bold uppercase text-[1.3rem]' >{title}</h2>
      <p className='font-bold text-3xl'>{content}</p>
      <h2 className=' font-semibold text-lg text-orange-400 ' >{percent}</h2>
    </div>
  );
};

export default Card;
