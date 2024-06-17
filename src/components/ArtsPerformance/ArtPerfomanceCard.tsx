import Link from 'next/link';
import Image from 'next/image';

type ArtPerformanceCardProps = {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
};

export default function ArtPerformanceCard({
  slug,
  title,
  description,
  thumbnail,
}: ArtPerformanceCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg max-w-md mx-auto">
      <div className="h-[300px] relative">
        <Image
          priority
          src={thumbnail}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          className="w-full h-full object-cover transition-all ease-linear duration-300"
        />
      </div>
      <div className="p-6">
        <h1 className="font-semibold text-xl mb-2 text-ellipsis overflow-hidden line-clamp-2">
          {title}
        </h1>
        <p className="text-gray-700 text-base text-ellipsis overflow-hidden line-clamp-3">
          {description}
        </p>
        <Link href={`/chuong-trinh-nghe-thuat/${slug}`} passHref>
          Xem thêm
        </Link>
      </div>
    </div>
  );
}
