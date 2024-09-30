import React from 'react';
import Image from 'next/image';

import { getNewsBySlug } from '@/sanity/queries';
import YoutubeIframe from '@/components/YoutubeIframe';
import formatDate from '@/utils/formatDate';
import { PortableText, PortableTextComponents } from 'next-sanity';

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className="my-5">
          <Image
            src={value.asset.url}
            alt="Content Image"
            width={500}
            height={500}
            className="w-full object-cover"
          />
        </div>
      );
    },
  },
};

export default async function Page({ params }: { params: { slug: string } }) {
  const news = await getNewsBySlug(params.slug);

  return (
    <div className="px-8">
      <div className="w-full h-[80%] overflow-hidden flex flex-col justify-center items-center">
        <h1 className=" text-xl lg:text-3xl my-5 font-semibold text-justify lg:text-center">
          {news.title}
        </h1>
        {/* <Image
          priority
          width={500}
          height={500}
          src={news.thumbnail.asset.url}
          alt={news.title}
          className="w-full lg:w-1/2 object-cover "
        /> */}
      </div>
      <p className="text-lg text-[#444444] tracking-wide mt-3 text-justify">
        {news.description}
      </p>
      <div>
        <PortableText value={news.content} components={components} />
      </div>
      {news.youtubeUrl && (
        <div className="mt-5 flex items-center justify-center">
          <YoutubeIframe url={news.youtubeUrl} />
        </div>
      )}
      <div className="w-full my-5 flex flex-row justify-between gap-6">
        <p className="text-base italic text-[#7e7d7d] tracking-wide ">
          Post by Admin
        </p>
        <p className="text-base italic text-[#7e7d7d] tracking-wide">
          {formatDate(news._createdAt)}
        </p>
      </div>
    </div>
  );
}
