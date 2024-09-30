'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';

import { getProfile } from '@/sanity/queries';
import { Profile } from '@/datatype';
import Typewriter from './Typewriter';

export default function Banner() {
  const [profile, setProfile] = React.useState<Profile>();

  React.useEffect(() => {
    getProfile().then((data) => setProfile(data));
  }, []);

  return (
    <section className="w-full h-auto bg-gradient-to-br from-yellow-300 via-pink-300 to-blue-500 text-lightText">
      <div className="w-full h-auto py-10 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center font-titleFont px-6 ">
        <div className="w-full lgl:w-1/2 flex flex-col gap-20 pl-4">
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl font-bold text-white">
              <span className="text-[#1a1c24] capitalize">
                {profile?.fullName}
              </span>
              <p className=" text-lg text-[#272930] font-normal">
                {profile?.headline}
              </p>
            </h1>
            <h2 className="text-4xl font-bold text-[#272930]">
              Công việc:{' '}
              <Typewriter texts={profile?.jobs as string[]} speed={200} />
            </h2>
            <p className="text-base font-bodyFont text-[#272930] leading-6 tracking-wide text-justify">
              {profile?.bio}
            </p>
          </div>
          <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
            <div>
              <div className="flex gap-4">
                {profile?.socialLinks?.facebook && (
                  <Link href={profile.socialLinks.facebook} target="_blank">
                    <span className="bannerIcon">
                      <FaFacebookF />
                    </span>
                  </Link>
                )}
                {profile?.socialLinks?.youtube && (
                  <Link href={profile.socialLinks.youtube} target="_blank">
                    <span className="bannerIcon">
                      <FaYoutube />
                    </span>
                  </Link>
                )}
                <Link href="/" target="_blank">
                  <span className="bannerIcon">
                    <FaInstagram />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center relative">
          {profile?.profileImage.asset?.url ? (
            <Image
              priority
              src={profile.profileImage.asset.url}
              width={1577}
              height={1717}
              alt="profile"
              className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px] object-cover z-10 transition-transform duration-300 hover:scale-105 rounded-lg "
            />
          ) : (
            <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px] flex justify-center items-center bg-gray-200 text-gray-500 text-xl font-semibold rounded-lg shadow-lg">
              Image not available
            </div>
          )}
          <div className="absolute bottom-0 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-[#f3f1d5] shadow-lg shadow-yellow-900/50 flex justify-center items-center transition-transform duration-300 hover:scale-105 rounded-lg" />
        </div>
      </div>
    </section>
  );
}
