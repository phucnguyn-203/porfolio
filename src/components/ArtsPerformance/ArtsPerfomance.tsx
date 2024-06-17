'use client';

import React, { useState, useEffect } from 'react';
import { ArtPerfomance } from '@/datatype';
import { getThreeLatestArtPerformance } from '../../sanity/queries';
import ArtPerformanceCard from './ArtPerfomanceCard';

const ArtsPerformance: React.FC = () => {
  const [artsPerformance, setArtsPerformance] = useState<ArtPerfomance[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArtPerformance = async () => {
      try {
        const data = await getThreeLatestArtPerformance();
        setArtsPerformance(data);
        console.log(data);
      } catch (error) {
        setError('Failed to fetch art performances');
      } finally {
        setLoading(false);
      }
    };

    fetchArtPerformance();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (artsPerformance.length === 0) return <p>No performances available</p>;

  return (
    <section id="chuong-trinh-nghe-thuat" className="w-full py-20 px-5 lg:px-0">
      <div className="py-2 px-6 bg-gradient-to-br from-yellow-200 via-pink-200 to-blue-400 h-[44px] w-[400px] block border-box rounded-lg relative">
        <h2 className="text-xl font-normal uppercase text-[#444444] tracking-wide text-center">
          Chương Trình Nghệ Thuật
        </h2>
        <div className="w-full">
          <div className="absolute bottom-0 left-0 right-0" />
        </div>
      </div>
      <hr className="border-[#222222] border-solid border-t-2 w-full" />
      <div className="grid grid-cols-1 pt-10 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {artsPerformance.map((item: ArtPerfomance) => (
          <ArtPerformanceCard
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
};
export default ArtsPerformance;
