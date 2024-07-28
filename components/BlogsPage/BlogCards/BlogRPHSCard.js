import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    RiExternalLinkLine,
} from '@remixicon/react';

const BlogRPHSCard = () => {
    return (
        <div className="w-full md:w-56 flex flex-col p-2 rounded-[30px] transition ease-in-out">
            <Link href="/react-password-hide-show">
                <div className="relative w-full md:w-auto h-48 md:h-32 rounded-[20px] border border-zinc-600 overflow-hidden cursor-pointer">
                    <div className="absolute text-white right-3 top-2 z-10"><RiExternalLinkLine size={22} /></div>
                    <Image className="transition ease-in-out delay-100 hover:scale-105 w-full h-full object-cover object-top" src={"/password-hide-show.png"} alt="alt" width={3000} height={3000} />
                </div>
            </Link>
            <div className="w-full md:w-auto mt-3">
                <h1 className="text-center mb-2 text-xs font-medium">React Password Hide and Show</h1>
            </div>
        </div>
    )
}

export default BlogRPHSCard;