'use client';

import React from 'react';
import Link from 'next/link';
import { News } from '@/datatype';

import { getThreeLatestNews } from '../../sanity/queries';
import Title from '../Title';
import NewsCard from './NewsCard';
import { PortableText } from '@portabletext/react';

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
    <section id="tin-tuc" className="w-full py-20 px-5 lg:px-0">
      <Title title="Tin Tức" des="tin tức" />
      <hr className="border-[#222222] border-solid border-t-2 w-full" />
      <div className="grid grid-cols-1 pt-10 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {news.map((item: News) => (
          <NewsCard
            key={item.slug.current}
            slug={item.slug.current}
            title={item.title}
            // description={item.description}
            content={<PortableText value={item.content} />}
            thumbnail={item.thumbnail.asset.url}
            description={''}
          />
        ))}
      </div>
      <Link href="/tin-tuc" className="mt-5 block">
        <Title title="Xem Thêm" des="tin tức" />
      </Link>
    </section>
  );
}
