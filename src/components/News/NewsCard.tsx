import Link from 'next/link';
import Image from 'next/image';

type NewsCardProps = {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
};

export default function NewsCard({
  slug,
  title,
  description,
  thumbnail,
}: NewsCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg max-w-md mx-auto">
      <div className="h-[300px]">
        <Image
          priority
          width={0}
          height={0}
          src={thumbnail}
          alt={title}
          sizes="100vw"
          className="w-full h-full object-cover transition-all ease-linear duration-300 overflow-hidden"
        />
      </div>
      <div className="p-6">
        <h1 className="font-semibold text-xl mb-2 text-ellipsis overflow-clip line-clamp-2">
          {title}
        </h1>
        <p className="text-gray-700 text-base text-ellipsis overflow-clip line-clamp-3">
          {description}
        </p>
        <Link href={`tin-tuc/${slug}`} className="font-medium mt-4 block">
          Xem thêm
        </Link>
      </div>
    </div>
  );
}
