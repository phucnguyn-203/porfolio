import { groq } from 'next-sanity';
import client from './sanity.client';

// Fetch profile information
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

// Fetch latest news
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

// Fetch news by slug
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

// Fetch all news
const getNews = async () => {
  return client.fetch(
    groq`
    *[_type == "news"]|order(_createdAt desc){
      title,
      slug,
      description,
      content,
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

// Fetch three latest news
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

// Fetch three latest art performances
const getThreeLatestArtPerformance = async () => {
  return client.fetch(
    groq`
    *[_type == "artPerformance"]|order(_createdAt desc){
      title,
      slug,
      description,
      thumbnail{
        asset->{
          url
        }
      },
      file{
      asset->{
      url
      }
      },
      fileName,
      type,
      _createdAt
    }[0...3]
  `,
  );
};

// Fetch latest art performance
const getLateArtPerformance = async () => {
  return client.fetch(
    groq`
    *[_type == "artPerformance"]|order(_createdAt desc){
      title,
      slug,
      description,
      thumbnail{
        asset->{
          url
        }
      },
      file{
      asset->{
      url
      }
      },
      fileName,
      type,
      _createdAt
    }[0]
  `,
  );
};

// Fetch art performance by slug
const getArtPerformanceBySlug = async (slug: string) => {
  return client.fetch(
    groq`
    *[_type == "artPerformance" && slug.current == $slug]{
      title,
      description,
      thumbnail{
        asset->{
          url
        }
      },
      file{
      asset->{
      url
      }
      },
      fileName,
      type,
      _createdAt
    }[0]
  `,
    { slug },
  );
};

// Fetch all art performances
const getArtPerformance = async () => {
  return client.fetch(
    groq`
    *[_type == "artPerformance"]|order(_createdAt desc){
      title,
      slug,
      description,
      thumbnail{
        asset->{
          url
        }
      },
      "fileUrl": file.asset->url,
      type,
      _createdAt
    }
  `,
  );
};

export {
  getProfile,
  getLatestNews,
  getNewsBySlug,
  getNews,
  getThreeLatestNews,
  getThreeLatestArtPerformance,
  getLateArtPerformance,
  getArtPerformanceBySlug,
  getArtPerformance,
};
