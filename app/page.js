import React from 'react';
import Link from 'next/link';
import {
  RiArrowLeftSLine

} from '@remixicon/react';
import BlogRPHSCard from '@/components/BlogsPage/BlogCards/BlogRPHSCard';
import LogoImage from '@/components/LogoImage';

const Home = () => {
  return (
    <div className="relative w-full min-h-screen bg-zinc-900 text-white">
        <div className="relative flex items-center justify-center md:justify-between px-10 py-5 ">
          <div className="flex gap-3 items-center">
            <LogoImage />
            <h1 className="text-xl">Aman Blogs</h1>
          </div>
          <div className="text-sm hidden md:block">
            
          </div>
        </div>
        <div className="flex flex-wrap gap-3 py-2 md:py-5 px-5 md:px-10 ">
          <BlogRPHSCard />
        </div>
    </div>
  )
}

export default Home;
