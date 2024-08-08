import React, {useState} from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
    RiFileCopy2Line,
} from '@remixicon/react';

const TwoCopy = () => {
    const [isCopied, setIsCopied] = useState(false);
    const copyText = `npm start`;
    const onCopy = () => {
        setIsCopied(true);
        setTimeout(()=>{
        setIsCopied(false);
        }, 2000)
    }
    return (
        <CopyToClipboard text={copyText} onCopy={onCopy} >
            <div className="relative flex items-center justify-center cursor-pointer">
                {isCopied && ( <div className="transition all-ease rounded-md absolute w-32 px-3 py-1 h-auto -translate-y-9 bg-zinc-700/30 text-center right-0 translate-x-10">text copied!!</div> )}
                <RiFileCopy2Line size={15}/>
            </div>
        </CopyToClipboard>
    );
}

export default TwoCopy;