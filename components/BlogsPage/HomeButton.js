'use client'
import React from 'react';
import {
  RiArrowLeftLine,
} from '@remixicon/react';

const HomeButton = () => {
  return (
    <a href="/"><button className="px-5 py-2 hover:bg-blue-500 text-white text-sm rounded-full">
       <RiArrowLeftLine size={20}/>
    </button></a>
  )
}

export default HomeButton;