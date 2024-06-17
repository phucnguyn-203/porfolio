import { getArtPerformanceBySlug } from '@/sanity/queries';
import React from 'react';
import Image from 'next/image';
import formatDate from '@/utils/formatDate';

export default async function page({ params }: { params: { slug: string } }) {
  const artPerformances = await getArtPerformanceBySlug(params.slug);

  return (
    <div className="px-8">
      <div className="w-full h-[80%] overflow-hidden flex flex-col justify-center items-center">
        <h1 className=" text-xl lg:text-3xl my-5 font-semibold text-justify lg:text-center">
          {artPerformances.title}
        </h1>
        <Image
          priority
          width={500}
          height={500}
          src={artPerformances.thumbnail.asset.url}
          alt={artPerformances.title}
          className="w-full lg:w-1/2 object-cover "
        />
      </div>
      <p className="text-lg text-[#444444] tracking-wide mt-3 text-justify">
        {artPerformances.description}
      </p>
      <div className="w-full my-5 flex flex-row justify-between gap-6">
        <p className="text-base italic text-[#7e7d7d] tracking-wide ">
          Post by Admin
        </p>
        {artPerformances?.file && (
          <div className="mt-4">
            <p className="font-medium mb-1">File:</p>
            <ul className="list-disc list-inside">
              <li>
                <a
                  href={artPerformances.file.url}
                  className="text-blue-500 underline"
                  download={artPerformances.file.name}
                >
                  {artPerformances.file.name}
                </a>
              </li>
            </ul>
          </div>
        )}
        <p className="text-base italic text-[#7e7d7d] tracking-wide">
          {formatDate(artPerformances._createdAt)}
        </p>
      </div>
    </div>
  );
}
