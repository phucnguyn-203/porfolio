import React from 'react';

type TitleProps = {
  title: string;
  des: string;
};

export default function Title({ title, des }: TitleProps) {
  return (
    <div className="py-2 px-6 bg-gradient-to-br from-yellow-200 via-pink-200 to-blue-400 h-[44px] w-[200px] block border-box rounded-lg relative">
      <h2 className="text-xl font-normal uppercase text-[#444444] tracking-wide text-center">
        {title}
      </h2>
      <div className="w-full">
        <div className="absolute bottom-0 left-0 right-0" />
      </div>
    </div>
  );
}
