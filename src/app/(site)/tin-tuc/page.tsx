'use client';

import React from 'react';
import { getNews } from '@/sanity/queries';
import LatestNews from '@/components/News/LatestNews';
import NewsCard from '@/components/News/NewsCard';
import { News } from '@/datatype';

export default function Page() {
  const [news, setNews] = React.useState<News[]>([]);
  React.useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNews();
        setNews(data);
      } catch (error) {
        throw new Error('Failed to fetch news');
      }
    };
    fetchNews();
  }, []);

  if (news.length === 0) return null;

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-20">
          <div className="flex justify-between">
            <div className="py-2 px-6 bg-gradient-to-br from-yellow-200 via-pink-200 to-blue-400 h-[44px] w-[300px] block border-box rounded-lg relative">
              <h2 className="text-xl font-normal uppercase text-[#444444] tracking-wide text-center">
                Tin Tức
              </h2>
            </div>
          </div>
          <hr className="border-[#222222] border-solid border-t-2 w-full" />
        </div>
        <LatestNews />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          {news.slice(1, news.length).map((item: News) => (
            <NewsCard
              key={item.slug.current}
              slug={item.slug.current}
              title={item.title}
              description={item.description}
              thumbnail={item.thumbnail.asset.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
