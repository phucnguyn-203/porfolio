'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';
import logo from '../assets/images/logo.png';

export default function Header() {
  const [isShowMenu, setIsShowMenu] = React.useState<boolean>(false);

  const handleMenuClick = () => {
    setIsShowMenu(!isShowMenu);
  };

  const handleCloseMenu = () => {
    setIsShowMenu(false);
  };

  return (
    <header className="w-full h-20 sticky top-0 z-50 bg-[#ffff] px-6 flex justify-between items-center">
      <div className="w-32">
        <Link href="/">
          <Image priority src={logo} alt="Logo" width={96} height={96} />
        </Link>
      </div>
      <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
        <li className="text-base font-normal text-[#1a1c24] tracking-wide cursor-pointer hover:text-designColor duration-300">
          <Link href="/">Trang Chủ</Link>
        </li>
        <li className="text-base font-normal text-[#1a1c24] tracking-wide cursor-pointer hover:text-designColor duration-300">
          <Link href="#linh-vuc">Lĩnh Vực</Link>
        </li>
        <li className="text-base font-normal text-[#1a1c24] tracking-wide cursor-pointer hover:text-designColor duration-300">
          <Link href="#tin-tuc">Tin Tức</Link>
        </li>
        <li className="text-base font-normal text-[#1a1c24] tracking-wide cursor-pointer hover:text-designColor duration-300">
          <Link href="#chuong-trinh-nghe-thuat">Chương Trình Nghệ Thuật</Link>
        </li>
        <li className="text-base font-normal text-[#1a1c24] tracking-wide cursor-pointer hover:text-designColor duration-300">
          <Link href="#lien-he">Liên Hệ</Link>
        </li>
      </ul>

      <button
        onClick={handleMenuClick}
        aria-label="Menu"
        className="text-2xl mdl:hidden bg-white w-10 h-10 inline-flex items-center justify-center rounded-full text-black cursor-pointer"
      >
        <FiMenu />
      </button>
      {isShowMenu && (
        <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
          <div className="flex flex-col gap-8 py-2 relative">
            <div>
              <Link href="/">
                <Image priority src={logo} alt="Logo" width={96} height={96} />
              </Link>
              <p className="text-white">Nguyễn Lê Thanh Hải</p>
              <h1 className="text-xs pt-1 text-white">
                Th.s Đạo diễn - Biên đạo
              </h1>
            </div>
            <ul className="flex flex-col gap-4">
              <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
                <Link href="/" onClick={handleCloseMenu}>
                  Trang Chủ
                </Link>
              </li>
              <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
                <Link href="#linh-vuc" onClick={handleCloseMenu}>
                  Lĩnh Vực
                </Link>
              </li>
              <li className="text-base font-normal text-[#1a1c24] tracking-wide cursor-pointer hover:text-designColor duration-300">
                <Link href="#chuong-trinh-nghe-thuat">
                  Chương Trình Nghệ Thuật
                </Link>
              </li>
              <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
                <Link href="#tin-tuc" onClick={handleCloseMenu}>
                  Tin Tức
                </Link>
              </li>
              <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
                <Link href="#lien-he" onClick={handleCloseMenu}>
                  Liên Hệ
                </Link>
              </li>
            </ul>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <Link
                  href="http://www.facebook.com/thanhhai.nguyenle1"
                  target="_blank"
                >
                  <span className="bannerIcon">
                    <FaFacebookF />
                  </span>
                </Link>
                <Link
                  href="https://www.youtube.com/@nguyenlethanhhaiofficial"
                  target="_blank"
                >
                  <span className="bannerIcon">
                    <FaYoutube />
                  </span>
                </Link>
                <Link href="/" target="_blank">
                  <span className="bannerIcon">
                    <FaInstagram />
                  </span>
                </Link>
              </div>
            </div>
            <button
              onClick={handleCloseMenu}
              aria-label="Close Menu"
              className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
            >
              <MdClose />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
