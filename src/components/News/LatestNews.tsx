'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { News } from '@/datatype';
import { getLatestNews } from '@/sanity/queries';
import formatDate from '@/utils/formatDate';

export default function LatestNews() {
  const [latestNews, setLatestNews] = React.useState<News | null>(null);

  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        const news = await getLatestNews();
        setLatestNews(news);
      } catch (error) {
        throw new Error('Failed to fetch latest news');
      }
    };

    fetchLatestNews();
  }, []);

  if (!latestNews) return null;

  return (
    <div className="flex">
      <div className="w-full mb-5 py-4 xl:px-6 rounded-lg shadow-xl flex flex-col xl:flex-row transition-colors duration-1000">
        <div className="w-full xl:w-1/2 flex justify-center items-start xl:items-end">
          <div className="w-full h-full overflow-hidden rounded-lg xl:rounded-l-lg">
            {latestNews?.thumbnail && (
              <Image
                priority
                width={500}
                height={500}
                sizes="100vw"
                className="w-full h-auto object-cover group-hover:scale-110 duration-300 cursor-pointer"
                src={latestNews?.thumbnail?.asset?.url}
                alt="Lastest News Image"
              />
            )}
          </div>
        </div>
        <div className="w-full xl:w-1/2 p-4 xl:p-8 flex flex-col justify-between mt-14 mb-14">
          <h1 className="text-2xl text-[#444444] font-semibold overflow-ellipsis overflow-hidden line-clamp-2">
            {latestNews?.title}
          </h1>
          <p className="text-sm text-[#444444] tracking-wide my-3 duration-300 overflow-ellipsis overflow-hidden line-clamp-5">
            {latestNews?.description}
          </p>
          <Link
            href={`tin-tuc/${latestNews?.slug?.current}`}
            className="font-medium"
          >
            Xem thêm
          </Link>
          <div className="mt-3 flex flex-row justify-between">
            <p className="text-sm text-[#666565] italic">Post by Admin</p>
            <p className="text-sm text-[#666565] italic">
              {formatDate(latestNews?._createdAt)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
