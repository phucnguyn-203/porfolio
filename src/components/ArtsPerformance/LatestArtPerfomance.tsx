// components/LatestArtPerformance.tsx

'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import formatDate from '@/utils/formatDate';
import { ArtPerfomance } from '@/datatype'; // Adjust the import path based on your actual file structure
import { getLateArtPerformance } from '@/sanity/queries';
import ArtsPerformance from './ArtsPerfomance';

const LatestArtPerformance: React.FC = () => {
  const [latestArtPerformance, setLatestArtPerformance] =
    useState<ArtPerfomance | null>(null);

  useEffect(() => {
    const fetchLatestArtPerformance = async () => {
      try {
        const artPerformance = await getLateArtPerformance();
        setLatestArtPerformance(artPerformance);
      } catch (error) {
        console.error('Failed to fetch latest art performance', error);
      }
    };
    fetchLatestArtPerformance();
  }, []);

  if (!latestArtPerformance) return null;

  return (
    <div className="flex">
      <div className="w-full mb-5 py-4 xl:px-6 rounded-lg shadow-xl flex flex-col xl:flex-row transition-colors duration-1000">
        <div className="w-full xl:w-1/2 flex justify-center items-start xl:items-end">
          <div className="w-full h-full overflow-hidden rounded-lg xl:rounded-l-lg">
            {latestArtPerformance?.thumbnail && (
              <Image
                priority
                width={500}
                height={500}
                sizes="100vw"
                className="w-full h-auto object-cover group-hover:scale-110 duration-300 cursor-pointer"
                src={latestArtPerformance?.thumbnail?.asset?.url}
                alt="Latest Art Performance Image"
              />
            )}
          </div>
        </div>
        <div className="w-full xl:w-1/2 p-4 xl:p-8 flex flex-col justify-between mt-14 mb-14">
          <h1 className="text-2xl text-[#444444] font-semibold overflow-ellipsis overflow-hidden line-clamp-2">
            {latestArtPerformance?.title}
          </h1>
          <p className="text-sm text-[#444444] tracking-wide my-3 duration-300 overflow-ellipsis overflow-hidden line-clamp-5">
            {latestArtPerformance?.description}
          </p>
          {/* {latestArtPerformance?.file && (
            <div className="mt-4">
              <p className="font-medium mb-1">File:</p>
              <ul className="list-disc list-inside">
                <li>
                  <a
                    href={latestArtPerformance.file.}
                    className="text-blue-500 underline"
                    download={latestArtPerformance.file}
                  >
                    {latestArtPerformance.file.}
                  </a>
                </li>
              </ul>
            </div>
          )} */}
          <Link
            href={`tin-tuc/${latestArtPerformance?.slug?.current}`}
            className="font-medium"
          >
            Xem thêm
          </Link>
          <div className="mt-3 flex flex-row justify-between">
            <p className="text-sm text-[#666565] italic">Post by Admin</p>
            <p className="text-sm text-[#666565] italic">
              {formatDate(latestArtPerformance?._createdAt)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestArtPerformance;
