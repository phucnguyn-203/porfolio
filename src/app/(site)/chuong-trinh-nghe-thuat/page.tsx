'use client';

import ArtPerformanceCard from '@/components/ArtsPerformance/ArtPerfomanceCard';
import LatestArtPerformance from '@/components/ArtsPerformance/LatestArtPerfomance';
import { ArtPerfomance } from '@/datatype';
import { getArtPerformance } from '@/sanity/queries';
import React from 'react';

export default function Page() {
  const [artPerformances, setArtsPerformances] = React.useState<
    ArtPerfomance[]
  >([]);
  React.useEffect(() => {
    const fetchArtPerformances = async () => {
      try {
        const data = await getArtPerformance();
        setArtsPerformances(data);
      } catch (error) {
        throw new Error('Failed to fetch art perfomance');
      }
    };
    fetchArtPerformances();
  }, []);

  if (artPerformances.length === 0) return null;
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-20">
          <div className="flex justify-between">
            <div className="py-2 px-6 bg-gradient-to-br from-yellow-200 via-pink-200 to-blue-400 h-[44px] w-[400px] block border-box rounded-lg relative">
              <h2 className="text-xl font-normal uppercase text-[#444444] tracking-wide text-center">
                Chương Trình Nghệ Thuật
              </h2>
            </div>
          </div>
          <hr className="border-[#222222] border-solid border-t-2 w-full" />
        </div>
        <LatestArtPerformance />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          {artPerformances
            .slice(1, artPerformances.length)
            .map((item: ArtPerfomance) => (
              <ArtPerformanceCard
                key={item.slug.current}
                slug={item.slug.current}
                title={item.title}
                description={item.description}
                thumbnail={item.thumbnail.asset.url}
                fileUrl={item.file.asset.url}
                fileName={item.fileName}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
