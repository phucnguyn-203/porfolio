'use client';

import React from 'react';
import Link from 'next/link';
import { News } from '@/datatype';

import { getThreeLatestNews } from '../../sanity/queries';
import Title from '../Title';
import NewsCard from './NewsCard';

export default function NewsSection() {
  const [news, setNews] = React.useState<News[]>([]);

  React.useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getThreeLatestNews();
        setNews(data);
      } catch (error) {
        throw new Error('Failed to fetch news');
      }
    };
    fetchNews();
  }, []);

  if (news.length === 0) return null;

  return (
    <section id="tin-tuc" className="w-full py-20  ">
      <div className="pb-20">
        <div className="flex justify-between">
          <Title title="Tin Tức" des="tin tức" />
          <Link href="/tin-tuc">
            <Title title="Xem Thêm" des="tin tức" />
          </Link>
        </div>
        <hr className="border-[#222222] border-solid border-t-2 w-full" />
      </div>
      <div className="grid grid-cols-1 pt-10 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {news.map((item: News) => (
          <NewsCard
            key={item.slug.current}
            slug={item.slug.current}
            title={item.title}
            description={item.description}
            thumbnail={item.thumbnail.asset.url}
          />
        ))}
      </div>
    </section>
  );
}
