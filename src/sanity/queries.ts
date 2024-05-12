import { groq } from 'next-sanity';
import client from './sanity.client';

const getProfile = async () => {
  return client.fetch(groq`
    *[_type == "profile"]{
      fullName,
      headline,
      profileImage{
        asset->{
          url
        }
      },
      jobs,
      bio,
      socialLinks{
        facebook,
        youtube,
        instagram
      }
    }[0]
  `);
};

export { getProfile };

const getLatestNews = async () => {
  return client.fetch(
    groq`
    *[_type == "news"]|order(_createdAt desc){
      title,
      slug,
      description,
      thumbnail{
        asset->{
          url
        }
      },
      youtubeUrl,
      _createdAt
    }[0]
  `,
  );
};

export { getLatestNews };

const getNewsBySlug = async (slug: string) => {
  return client.fetch(
    groq`
    *[_type == "news" && slug.current == $slug]{
      title,
      description,
      thumbnail{
        asset->{
          url
        }
      },
      youtubeUrl,
      _createdAt
    }[0]
  `,
    { slug },
  );
};

export { getNewsBySlug };

const getNews = async () => {
  return client.fetch(
    groq`
    *[_type == "news"]|order(_createdAt desc){
      title,
      slug,
      description,
      thumbnail{
        asset->{
          url
        }
      },
      youtubeUrl,
      _createdAt
    }
  `,
  );
};

export { getNews };

const getThreeLatestNews = async () => {
  return client.fetch(
    groq`
    *[_type == "news"]|order(_createdAt desc){
      title,
      slug,
      description,
      thumbnail{
        asset->{
          url
        }
      },
      youtubeUrl,
      _createdAt
    }[0...3]
  `,
  );
};

export { getThreeLatestNews };
