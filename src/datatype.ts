export interface Profile {
  fullName: string;
  headline: string;
  jobs: string[];
  bio: string;
  socialLinks: {
    facebook: string;
    youtube: string;
    instagram: string;
  };
  profileImage: {
    asset: {
      url: string;
    };
  };
}

export interface News {
  title: string;
  description: string;
  thumbnail: {
    asset: {
      url: string;
    };
  };
  slug: {
    current: string;
  };
  _createdAt: string;
}

export interface ArtPerfomance {
  title: string;
  description: string;
  thumbnail: {
    asset: {
      url: string;
    };
  };
  slug: {
    current: string;
  };
  _createdAt: string;
  file?: {
    asset: {
      name: string;
      url: string;
    };
  };
}
