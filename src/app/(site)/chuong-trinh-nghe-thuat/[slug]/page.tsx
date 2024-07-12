import { getArtPerformanceBySlug } from '@/sanity/queries';
import React from 'react';
import formatDate from '@/utils/formatDate';
import Link from 'next/link';
import FileIframe from '@/components/FileIframe';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFilePdf,
  faFileWord,
  faFileAlt,
  faFileExcel,
} from '@fortawesome/free-solid-svg-icons';

export default async function Page({ params }: { params: { slug: string } }) {
  const artPerformances = await getArtPerformanceBySlug(params.slug);

  const getFileExtension = (filename: string) => {
    const lastDotIndex = filename.lastIndexOf('.');
    if (lastDotIndex === -1) return '';
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

  const { icon, color } = getFileIcon(artPerformances?.file?.asset?.url);

  return (
    <div className="px-8">
      <div className="w-full h-[80%] overflow-hidden flex flex-col justify-center items-center">
        <h1 className="text-xl lg:text-3xl my-5 font-semibold text-justify lg:text-center">
          {artPerformances?.title}
        </h1>
        {/* {artPerformances?.thumbnail?.asset?.url && (
          <Image
            priority
            width={500}
            height={500}
            src={artPerformances.thumbnail.asset.url}
            alt={artPerformances.title}
            className="w-32 lg:w-32 object-cover"
          />
        )} */}
      </div>

      {artPerformances?.file?.asset?.url && (
        <div className="flex items-center justify-center">
          <FileIframe url={artPerformances.file.asset.url} />
        </div>
      )}
      {artPerformances?.file?.asset?.url && artPerformances?.fileName && (
        <Link
          href={artPerformances.file.asset.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${color} underline flex items-center justify-center mt-2 pb-2`}
        >
          <FontAwesomeIcon icon={icon} className="mr-2 size-8" />
          {artPerformances.fileName}
        </Link>
      )}
      <p className="text-lg  text-[#444444] tracking-wide mt-3 text-center">
        {artPerformances?.description}
      </p>
      <div className="w-full my-5 flex flex-row justify-between gap-6">
        <p className="text-base italic text-[#7e7d7d] tracking-wide">
          Post by Admin
        </p>
        <p className="text-base italic text-[#7e7d7d] tracking-wide">
          {formatDate(artPerformances?._createdAt)}
        </p>
      </div>
    </div>
  );
}
