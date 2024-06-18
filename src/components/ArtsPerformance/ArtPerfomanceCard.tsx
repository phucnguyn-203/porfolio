import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFilePdf,
  faFileWord,
  faFileAlt,
  faFileExcel,
} from '@fortawesome/free-solid-svg-icons';

type ArtPerformanceCardProps = {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  fileUrl: string;
  fileName: string;
};

export default function ArtPerformanceCard({
  slug,
  title,
  description,
  thumbnail,
  fileUrl,
  fileName,
}: ArtPerformanceCardProps) {
  const getFileExtension = (filename: string) => {
    const lastDotIndex = filename.lastIndexOf('.');
    if (lastDotIndex === -1) return '';
    return filename.substring(lastDotIndex + 1).toLowerCase();
  };

  const getFileIcon = (fileUrl: string | undefined) => {
    if (!fileUrl) {
      return { icon: faFileAlt, color: 'text-gray-400' };
    }

    const extension = getFileExtension(fileUrl);
    switch (extension) {
      case 'pdf':
        return { icon: faFilePdf, color: 'text-red-400' };
      case 'doc':
      case 'docx':
        return { icon: faFileWord, color: 'text-blue-400' };
      case 'txt':
        return { icon: faFileAlt, color: 'text-gray-400' };
      case 'xlsx':
        return { icon: faFileExcel, color: 'text-green-400' };
      default:
        return { icon: faFileAlt, color: 'text-gray-400' };
    }
  };

  const { icon, color } = getFileIcon(fileUrl);

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
        <h1 className="font-semibold text-xl mb-2 text-ellipsis overflow-hidden line-clamp-2">
          {title}
        </h1>
        <p className="text-gray-700 text-base text-ellipsis overflow-hidden line-clamp-3">
          {description}
        </p>
        {fileUrl && fileName && (
          <Link
            href={fileUrl}
            className={`${color} font-medium underline flex items-center mt-2 pb-2`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={icon} className="mr-2 size-6" />
            {fileName}
          </Link>
        )}
        {slug && (
          <Link
            href={`chuong-trinh-nghe-thuat/${slug}`}
            className="font-medium mt-4 "
          >
            Xem thêm
          </Link>
        )}
      </div>
    </div>
  );
}
