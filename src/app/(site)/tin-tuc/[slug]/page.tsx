import React from 'react';
import Image from 'next/image';

import { getNewsBySlug } from '@/sanity/queries';
import YoutubeIframe from '@/components/YoutubeIframe';
import formatDate from '@/utils/formatDate';

export default async function Page({ params }: { params: { slug: string } }) {
  const news = await getNewsBySlug(params.slug);

  return (
    <div className="px-8">
      <div className="w-full h-[80%] overflow-hidden flex flex-col justify-center items-center rounded-lg">
        <h1 className="text-3xl pb-5 font-semibold text-center">
          {news.title}
        </h1>
        <Image
          priority
          width={500}
          height={500}
          className="w-1/2 h-1/2 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={news.thumbnail.asset.url}
          alt="Picture of the author"
        />
      </div>
      <div className="w-full px-4 mt-5 flex flex-col gap-6">
        <div>
          {/* <div className="flex items-center justify-between">
            <h3 className="text-2xl uppercase text-designColor font-normal">
              KHOẢNH KHẮC CUỘC ĐỜI - ĐẠO DIỄN THANH HẢI KHÔNG NGỪNG CỐ GẮNG
            </h3>
          </div> */}
          <p className="text-lg text-[#444444] tracking-wide mt-3">
            {news.description}
          </p>
        </div>
      </div>
      {news.youtubeUrl && (
        <div className="px-4 mt-5 flex items-center justify-center">
          <YoutubeIframe url={news.youtubeUrl} />
        </div>
      )}
      <div className="w-full px-4 mt-5 flex flex-row justify-between gap-6">
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
