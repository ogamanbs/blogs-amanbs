import React from 'react';
import Image from 'next/image';

const LogoImage = () => {
    return (
        <div className="h-6 w-6 overflow-hidden select-none">
            <Image
                priority
                className="w-full h-full object-cover pointer-events-none"
                src={"logo.svg"}
                alt="logo"
                width={10}
                height={10}
            />
        </div>
    );
}

export default LogoImage;