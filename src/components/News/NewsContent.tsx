import React from 'react';
import { PortableText } from '@portabletext/react';

interface NewsContentProps {
  content: any;
}

const NewsContent: React.FC<NewsContentProps> = ({ content }) => {
  return (
    <div className="text-base text-[#444444] tracking-wide mt-3 text-justify">
      <PortableText value={content} />
    </div>
  );
};

export default NewsContent;
