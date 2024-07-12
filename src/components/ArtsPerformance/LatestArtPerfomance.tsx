import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFilePdf,
  faFileWord,
  faFileAlt,
  faFileExcel,
} from '@fortawesome/free-solid-svg-icons';
import formatDate from '@/utils/formatDate';
import { ArtPerfomance } from '@/datatype'; // Adjust the import path based on your actual file structure
import { getLateArtPerformance } from '@/sanity/queries';

const getFileExtension = (filename: string) => {
  const lastDotIndex = filename.lastIndexOf('.');
  if (lastDotIndex === -1) return ''; // Handle case where no dot is found
  return filename.substring(lastDotIndex + 1).toLowerCase();
};

const getFileIcon = (fileUrl: string | undefined) => {
  if (!fileUrl) return { icon: faFileAlt, color: 'text-gray-400' };

  const extension = getFileExtension(fileUrl);
  switch (extension) {
    case 'pdf':
      return { icon: faFilePdf, color: 'text-red-400' };
    case 'doc':
    case 'docx':
      return { icon: faFileWord, color: 'text-blue-400' };
    case 'txt':
      return { icon: faFileAlt, color: 'text-gray-400' };
    case 'xlsx':
      return { icon: faFileExcel, color: 'text-green-400' };
    default:
      return { icon: faFileAlt, color: 'text-gray-400' };
  }
};

const LatestArtPerformance: React.FC = () => {
  const [latestArtPerformance, setLatestArtPerformance] =
    useState<ArtPerfomance | null>(null);

  useEffect(() => {
    const fetchLatestArtPerformance = async () => {
      try {
        const artPerformance = await getLateArtPerformance();
        setLatestArtPerformance(artPerformance);
      } catch (error) {
        throw new Error('Failed to fetch latest art performance');
      }
    };
    fetchLatestArtPerformance();
  }, []);

  if (!latestArtPerformance) return null;

  const { icon, color } = latestArtPerformance.file.asset.url
    ? getFileIcon(latestArtPerformance.file.asset.url)
    : { icon: faFileAlt, color: 'text-gray-500' };

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
          {latestArtPerformance.file.asset.url && (
            <Link
              href={latestArtPerformance.file.asset.url}
              className={`${color} underline flex items-center mt-2 pb-2`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={icon} className="mr-2" />
              {latestArtPerformance.fileName}
            </Link>
          )}
          <Link
            href={`/chuong-trinh-nghe-thuat/${latestArtPerformance?.slug?.current}`}
            passHref
            className="font-medium mt-4 block"
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
